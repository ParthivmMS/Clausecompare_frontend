/**
 * Client-side fallback diff engine for contract comparison
 * Implements basic clause comparison logic when backend is unavailable
 */

export async function generateDiff(textA, textB) {
  const clausesA = segmentClauses(textA)
  const clausesB = segmentClauses(textB)

  const diffs = []
  let totalRisk = 0

  // Simple clause-by-clause comparison
  const maxLength = Math.max(clausesA.length, clausesB.length)

  for (let i = 0; i < maxLength; i++) {
    const clauseA = clausesA[i] || { title: '', content: '' }
    const clauseB = clausesB[i] || { title: '', content: '' }

    const similarity = calculateSimilarity(clauseA.content, clauseB.content)

    if (similarity < 0.95 || !clauseA.content || !clauseB.content) {
      const { severity, riskType } = detectRiskPatterns(
        clauseA.content,
        clauseB.content,
        clauseA.title || clauseB.title
      )

      const riskValue = { High: 30, Medium: 15, Low: 5 }[severity]
      totalRisk += riskValue

      diffs.push({
        clause: clauseA.title || clauseB.title || `Clause ${i + 1}`,
        summary: generateSummary(clauseA.content, clauseB.content, riskType),
        oldText: clauseA.content.substring(0, 500),
        newText: clauseB.content.substring(0, 500),
        severity,
        explanation: getTemplateExplanation(clauseA.content, clauseB.content, severity),
        confidence: Math.round(similarity * 100),
        suggestions: getTemplateSuggestions(severity),
      })
    }
  }

  return {
    riskScore: Math.min(100, totalRisk),
    diffs,
  }
}

function segmentClauses(text) {
  const clauses = []
  const lines = text.split('\n')
  let currentClause = { title: '', content: '' }

  for (const line of lines) {
    const stripped = line.trim()

    if (!stripped) {
      if (currentClause.content) {
        clauses.push(currentClause)
        currentClause = { title: '', content: '' }
      }
      continue
    }

    // Detect headings
    const isHeading =
      stripped.toUpperCase() === stripped && stripped.length < 100 ||
      stripped.endsWith(':') ||
      /^\d+\.?\s+[A-Z]/.test(stripped)

    if (isHeading && !currentClause.content) {
      currentClause.title = stripped
    } else {
      currentClause.content += stripped + ' '
    }
  }

  if (currentClause.content) {
    clauses.push(currentClause)
  }

  return clauses.length > 0 ? clauses : [{ title: 'Document', content: text }]
}

function calculateSimilarity(text1, text2) {
  if (!text1 || !text2) return 0

  const words1 = text1.toLowerCase().split(/\s+/)
  const words2 = text2.toLowerCase().split(/\s+/)

  const set1 = new Set(words1)
  const set2 = new Set(words2)

  const intersection = new Set([...set1].filter(x => set2.has(x)))
  const union = new Set([...set1, ...set2])

  return intersection.size / union.size
}

function detectRiskPatterns(oldText, newText, clauseTitle) {
  const oldLower = oldText.toLowerCase()
  const newLower = newText.toLowerCase()
  const titleLower = clauseTitle.toLowerCase()

  const highRiskKeywords = [
    'confidentiality',
    'indemnity',
    'liability',
    'intellectual property',
    'termination',
    'non-compete',
    'arbitration',
    'warranty',
  ]

  const isHighRiskClause = highRiskKeywords.some(keyword => titleLower.includes(keyword))

  // Confidentiality changes
  if (titleLower.includes('confidential')) {
    const oldYears = extractYears(oldText)
    const newYears = extractYears(newText)
    if (newYears < oldYears) {
      return { severity: 'High', riskType: 'Confidentiality period reduced' }
    }
  }

  // Payment changes
  if (titleLower.includes('payment') || oldLower.includes('fee')) {
    const oldAmounts = extractAmounts(oldText)
    const newAmounts = extractAmounts(newText)
    if (newAmounts.length > 0 && oldAmounts.length > 0 && newAmounts[0] > oldAmounts[0]) {
      return { severity: 'High', riskType: 'Payment amount increased' }
    }
  }

  // Liability changes
  if (titleLower.includes('liability') || oldLower.includes('indemnif')) {
    if (newLower.includes('unlimited') && !oldLower.includes('unlimited')) {
      return { severity: 'High', riskType: 'Liability cap removed' }
    }
  }

  const similarity = calculateSimilarity(oldText, newText)

  if (similarity < 0.5 && isHighRiskClause) {
    return { severity: 'High', riskType: 'Significant change to critical clause' }
  } else if (similarity < 0.7 && isHighRiskClause) {
    return { severity: 'Medium', riskType: 'Moderate change to critical clause' }
  } else if (similarity < 0.5) {
    return { severity: 'Medium', riskType: 'Significant change' }
  }

  return { severity: 'Low', riskType: 'Minor change' }
}

function extractYears(text) {
  const match = text.match(/(\d+)\s*year/i)
  return match ? parseInt(match[1]) : 999
}

function extractAmounts(text) {
  const matches = text.match(/\$\s*([\d,]+(?:\.\d{2})?)/g)
  return matches ? matches.map(m => parseFloat(m.replace(/[$,]/g, ''))) : []
}

function generateSummary(oldText, newText, riskType) {
  const oldWords = oldText.split(/\s+/).length
  const newWords = newText.split(/\s+/).length

  if (!oldText) return 'This is a new clause added in the new version.'
  if (!newText) return 'This clause was removed from the new version.'

  if (Math.abs(oldWords - newWords) > 20) {
    return newWords > oldWords
      ? `${riskType}. Clause expanded with additional terms.`
      : `${riskType}. Clause shortened, some terms removed.`
  }

  return `${riskType}. Wording and terms have been modified.`
}

function getTemplateExplanation(oldText, newText, severity) {
  const oldLower = oldText.toLowerCase()
  const newLower = newText.toLowerCase()

  if (oldLower.includes('confidential') || newLower.includes('confidential')) {
    return 'Changes to confidentiality terms can affect how long you must protect sensitive information. Shorter periods may reduce your obligations but could expose your own confidential data.'
  }

  if (oldLower.includes('payment') || oldLower.includes('fee')) {
    return 'Payment terms directly impact your financial obligations. Ensure any increases are justified and aligned with the value received.'
  }

  if (oldLower.includes('liabilit') || oldLower.includes('indemnif')) {
    return 'Liability clauses determine your financial exposure if something goes wrong. Unlimited liability can put your business at significant risk.'
  }

  if (severity === 'High') {
    return 'This is a significant change to an important contract term. Careful review and potential legal counsel is recommended.'
  }

  if (severity === 'Medium') {
    return 'This change modifies the terms in a way that could affect your obligations or rights. Review to ensure alignment with your needs.'
  }

  return 'This appears to be a minor clarification or wording change that likely doesn\'t materially affect the substance of the agreement.'
}

function getTemplateSuggestions(severity) {
  if (severity === 'High') {
    return [
      'Request clarification on the business reason for this change',
      'Propose reverting to original language with minor modifications',
    ]
  }

  if (severity === 'Medium') {
    return [
      'Request examples of how this clause would apply in practice',
      'Propose compromise language that addresses both parties\' concerns',
    ]
  }

  return [
    'Accept the change if the meaning remains substantially the same',
    'Request clarification if any ambiguity exists',
  ]
}
