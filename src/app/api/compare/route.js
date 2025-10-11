import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const apiUrl = process.env.API_URL

    // If API_URL is configured, proxy to backend
    if (apiUrl) {
      const formData = await request.formData()
      
      // Forward the request to the backend
      const response = await fetch(`${apiUrl}/compare`, {
        method: 'POST',
        body: formData,
        // Don't set Content-Type header - let fetch handle multipart boundary
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        return NextResponse.json(
          { error: errorData.error || errorData.detail || 'Backend comparison failed' },
          { status: response.status }
        )
      }

      const data = await response.json()
      return NextResponse.json(data)
    }

    // Fallback: Use local diff engine if API_URL not configured
    const formData = await request.formData()
    const fileA = formData.get('fileA')
    const fileB = formData.get('fileB')

    if (!fileA || !fileB) {
      return NextResponse.json(
        { error: 'Both fileA and fileB are required' },
        { status: 400 }
      )
    }

    // Read file contents
    const textA = await fileA.text()
    const textB = await fileB.text()

    // Import local diff engine
    const { generateDiff } = await import('@/services/diffEngine')
    
    // Generate comparison report
    const report = await generateDiff(textA, textB)

    // Add metadata
    const timestamp = new Date().toISOString()
    const reportId = `rpt-${Date.now()}`

    const response = {
      reportId,
      riskScore: report.riskScore,
      diffs: report.diffs,
      createdAt: timestamp,
      fileA: fileA.name,
      fileB: fileB.name,
      llmUsed: false,
    }

    return NextResponse.json(response)

  } catch (error) {
    console.error('Comparison error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}

// Optional: Add OPTIONS handler for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
