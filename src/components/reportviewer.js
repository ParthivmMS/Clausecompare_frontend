'use client'

import { useState } from 'react'
import { Download, Printer, MessageSquare, FileText, AlertTriangle, CheckCircle, Info } from 'lucide-react'

export default function ReportViewer({ report }) {
  const [showFeedback, setShowFeedback] = useState(false)
  const [feedback, setFeedback] = useState({
    overallRating: 0,
    accuracyRating: 0,
    comments: ''
  })
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)

  // Calculate risk color
  const getRiskColor = (score) => {
    if (score >= 70) return 'text-red-600 bg-red-50 border-red-200'
    if (score >= 40) return 'text-orange-600 bg-orange-50 border-orange-200'
    return 'text-green-600 bg-green-50 border-green-200'
  }

  const getSeverityBadge = (severity) => {
    const badges = {
      'High': '🔴 High Risk',
      'Medium': '🟡 Medium Risk',
      'Low': '🟢 Low Risk'
    }
    return badges[severity] || severity
  }

  // Download PDF
  const handleDownloadPDF = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        alert('Please login to download reports')
        return
      }

      const reportId = report.reportId
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reports/${reportId}/pdf`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (res.ok) {
        const blob = await res.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `clausecompare-${reportId}.pdf`
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      } else {
        alert('Failed to download PDF. Please try again.')
      }
    } catch (error) {
      console.error('Download failed:', error)
      alert('Failed to download PDF. Please try again.')
    }
  }

  // Print Report
  const handlePrint = () => {
    window.print()
  }

  // Export as JSON
  const handleExportJSON = () => {
    const dataStr = JSON.stringify(report, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = window.URL.createObjectURL(dataBlob)
    const a = document.createElement('a')
    a.href = url
    a.download = `clausecompare-${report.reportId}.json`
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
  }

  // Submit Feedback
  const handleSubmitFeedback = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        alert('Please login to submit feedback')
        return
      }

      // For now, just show success (you can add backend endpoint later)
      console.log('Feedback submitted:', feedback)
      setFeedbackSubmitted(true)
      setTimeout(() => {
        setShowFeedback(false)
        setFeedbackSubmitted(false)
      }, 2000)
    } catch (error) {
      console.error('Feedback submission failed:', error)
      alert('Failed to submit feedback. Please try again.')
    }
  }

  // Format date
  const formatDate = (dateStr) => {
    try {
      const date = new Date(dateStr)
      return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    } catch {
      return dateStr
    }
  }

  return (
    <div className="space-y-6">
      {/* Action Buttons */}
      <div className="bg-white rounded-lg shadow-sm p-4 print:hidden">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Download size={18} />
            Download PDF
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
          >
            <Printer size={18} />
            Print Report
          </button>

          <button
            onClick={handleExportJSON}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            <FileText size={18} />
            Export JSON
          </button>

          <button
            onClick={() => setShowFeedback(!showFeedback)}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            <MessageSquare size={18} />
            Give Feedback
          </button>
        </div>
      </div>

      {/* Feedback Modal */}
      {showFeedback && (
        <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-purple-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Help Us Improve</h3>
          
          {feedbackSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="mx-auto text-green-600 mb-4" size={48} />
              <p className="text-green-600 font-semibold">Thank you for your feedback!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Overall Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Overall Experience
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setFeedback({ ...feedback, overallRating: star })}
                      className={`text-3xl ${
                        star <= feedback.overallRating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      ⭐
                    </button>
                  ))}
                </div>
              </div>

              {/* Accuracy Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Accuracy of Analysis
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((target) => (
                    <button
                      key={target}
                      onClick={() => setFeedback({ ...feedback, accuracyRating: target })}
                      className={`text-3xl ${
                        target <= feedback.accuracyRating ? 'text-green-500' : 'text-gray-300'
                      }`}
                    >
                      🎯
                    </button>
                  ))}
                </div>
              </div>

              {/* Comments */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Comments (Optional)
                </label>
                <textarea
                  value={feedback.comments}
                  onChange={(e) => setFeedback({ ...feedback, comments: e.target.value })}
                  placeholder="What did you like? What could be improved?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  rows={4}
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleSubmitFeedback}
                  disabled={feedback.overallRating === 0 || feedback.accuracyRating === 0}
                  className="flex-1 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  Submit Feedback
                </button>
                <button
                  onClick={() => setShowFeedback(false)}
                  className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Report Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Comparison Report</h2>
            <p className="text-sm text-gray-500 mt-1">
              {formatDate(report.metadata?.createdAt)}
            </p>
          </div>
          <div className={`px-6 py-3 rounded-lg border-2 ${getRiskColor(report.riskScore)}`}>
            <p className="text-sm font-semibold">Risk Score</p>
            <p className="text-3xl font-bold">{report.riskScore}/100</p>
          </div>
        </div>

        {/* File Names */}
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-xs text-red-600 font-semibold mb-1">ORIGINAL</p>
            <p className="text-sm text-gray-800">{report.metadata?.fileA}</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-xs text-green-600 font-semibold mb-1">MODIFIED</p>
            <p className="text-sm text-gray-800">{report.metadata?.fileB}</p>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Executive Summary</h3>
        <p className="text-gray-700 leading-relaxed">{report.summary}</p>
      </div>

      {/* Verdict */}
      {report.verdict && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 mb-2">Verdict</h3>
          <p className="text-blue-800">{report.verdict}</p>
        </div>
      )}

      {/* Risk Report */}
      {report.riskReport && (
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
          <h3 className="text-lg font-bold text-orange-900 mb-2">Risk Analysis</h3>
          <p className="text-orange-800">{report.riskReport}</p>
        </div>
      )}

      {/* Usage Stats */}
      {report.usage && (
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-600">
            📊 You've used <span className="font-bold">{report.usage.used}</span> of{' '}
            <span className="font-bold">{report.usage.limit}</span> comparisons this month
            {report.usage.remaining <= 3 && (
              <span className="ml-2 text-orange-600 font-semibold">
                ({report.usage.remaining} remaining)
              </span>
            )}
          </p>
        </div>
      )}

      {/* Detailed Changes */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Detailed Analysis ({report.diffs?.length || 0} changes)
        </h3>

        <div className="space-y-6">
          {report.diffs?.map((diff, index) => (
            <div key={index} className="border-l-4 border-gray-300 pl-4">
              {/* Clause Header */}
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {diff.clause}
                  </h4>
                  <span className="inline-block mt-1 px-2 py-1 text-xs font-semibold bg-gray-200 text-gray-800 rounded">
                    {diff.type}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-2xl">{getSeverityBadge(diff.severity)}</span>
                  {diff.confidence && (
                    <p className="text-xs text-gray-500 mt-1">{diff.confidence}% confidence</p>
                  )}
                </div>
              </div>

              {/* Summary */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-3">
                <p className="text-sm text-yellow-900 font-semibold mb-1">Summary:</p>
                <p className="text-sm text-yellow-800">{diff.summary}</p>
              </div>

              {/* Explanation */}
              {diff.explanation && (
                <div className="mb-3">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Analysis:</p>
                  <p className="text-sm text-gray-600">{diff.explanation}</p>
                </div>
              )}

              {/* Suggestions */}
              {diff.suggestions && diff.suggestions.length > 0 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm font-semibold text-green-900 mb-2">
                    💡 Negotiation Suggestions:
                  </p>
                  <ul className="space-y-1">
                    {diff.suggestions.map((suggestion, idx) => (
                      <li key={idx} className="text-sm text-green-800">
                        • {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-gray-50 rounded-lg p-4 text-center text-sm text-gray-600 print:block">
        <p>Report ID: {report.reportId}</p>
        <p className="mt-1">Generated using {report.metadata?.comparisonMethod}</p>
        <p className="mt-2 text-xs">
          🔒 This report is confidential. Your contracts are deleted within 24 hours.
        </p>
      </div>
    </div>
  )
        }
