'use client'

import Link from 'next/link'
import { useState } from 'react'
import FeedbackModal from './feedbackmodal'

export default function ReportViewer({ report }) {
  const [showFeedback, setShowFeedback] = useState(false)
  
  if (!report) {
    return null
  }

  // Fix date formatting
  const getFormattedDate = () => {
    const date = report.createdAt || report.metadata?.createdAt
    if (!date) return new Date().toLocaleString('en-IN', { hour12: false })
    
    try {
      return new Date(date).toLocaleString('en-IN', { 
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })
    } catch {
      return new Date().toLocaleString('en-IN', { hour12: false })
    }
  }

  // Generate summary header
  const generateSummaryHeader = () => {
    const diffs = report.diffs || []
    const highRisk = diffs.filter(d => d.severity === 'High').length
    const mediumRisk = diffs.filter(d => d.severity === 'Medium').length
    const lowRisk = diffs.filter(d => d.severity === 'Low').length
    const totalChanges = diffs.length
    const riskScore = report.riskScore || 0

    // Get top risky clauses
    const topRisks = diffs
      .filter(d => d.severity === 'High')
      .slice(0, 2)
      .map(d => d.clause)
      .join(' and ')

    let summaryText = `ClauseCompare detected ${totalChanges} change${totalChanges !== 1 ? 's' : ''}`
    
    if (highRisk > 0 || mediumRisk > 0) {
      summaryText += ` — ${highRisk} High Risk, ${mediumRisk} Medium Risk`
    }
    
    summaryText += ` — with an overall score of ${riskScore}/100.`
    
    if (topRisks) {
      summaryText += ` The main risks involve ${topRisks}.`
    }

    return summaryText
  }

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'High':
        return 'bg-red-100 text-red-800 border-red-300'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300'
      case 'Low':
        return 'bg-green-100 text-green-800 border-green-300'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  const getSeverityEmoji = (severity) => {
    switch (severity) {
      case 'High':
        return '🔴'
      case 'Medium':
        return '🟡'
      case 'Low':
        return '🟢'
      default:
        return '⚪'
    }
  }

  const getRiskScoreColor = (score) => {
    if (score >= 70) return 'text-red-600'
    if (score >= 40) return 'text-yellow-600'
    return 'text-green-600'
  }

  const handleExportPDF = () => {
    // TODO: Implement PDF export functionality
    alert('PDF export feature coming soon!')
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-6 border-b">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Comparison Report</h2>
          <p className="text-sm text-gray-500 mt-1">
            Report ID: {report.reportId} | Generated: {getFormattedDate()}
          </p>
        </div>
        <button
          onClick={handleExportPDF}
          className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition"
        >
          Export PDF
        </button>
      </div>

      {/* Executive Summary Header */}
      <div className="mb-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
          <span className="text-2xl mr-2">📋</span>
          Executive Summary
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {generateSummaryHeader()}
        </p>
      </div>

      {/* Usage Indicator */}
      {report.usage && (
        <div className={`mb-6 p-4 rounded-lg border ${
          report.usage.remaining <= 2 ? 'bg-red-50 border-red-200' : 
          report.usage.remaining <= 5 ? 'bg-yellow-50 border-yellow-200' : 
          'bg-blue-50 border-blue-200'
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-900">
                Monthly Usage: {report.usage.used} / {report.usage.limit}
              </p>
              <p className="text-xs text-gray-600 mt-1">
                {report.usage.remaining} comparison{report.usage.remaining !== 1 ? 's' : ''} remaining this month
              </p>
            </div>
            {report.usage.remaining <= 2 && (
              <Link
                href="/pricing"
                className="text-xs bg-primary-600 text-white px-3 py-1 rounded font-medium hover:bg-primary-700"
              >
                Upgrade
              </Link>
            )}
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all ${
                report.usage.remaining <= 2 ? 'bg-red-500' :
                report.usage.remaining <= 5 ? 'bg-yellow-500' : 'bg-blue-500'
              }`}
              style={{ width: `${(report.usage.used / report.usage.limit) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Risk Score */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Overall Risk Score</h3>
            <p className="text-sm text-gray-600">
              Based on {report.diffs.length} detected change{report.diffs.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="text-center">
            <div className={`text-5xl font-bold ${getRiskScoreColor(report.riskScore)}`}>
              {report.riskScore}
            </div>
            <p className="text-sm text-gray-500 mt-1">out of 100</p>
          </div>
        </div>
        
        {/* Risk Indicator Bar */}
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-4 flex items-center overflow-hidden" style={{ borderRadius: '10px', height: '16px' }}>
            <div
              className={`h-full rounded-full transition-all duration-500 ease-in-out ${
                report.riskScore >= 70 ? 'bg-red-500' :
                report.riskScore >= 40 ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              style={{ width: `${report.riskScore}%`, borderRadius: '10px' }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Low Risk</span>
            <span>Medium Risk</span>
            <span>High Risk</span>
          </div>
        </div>
      </div>

      {/* File Information */}
      <div className="mb-8 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-900">
          <strong>Comparing:</strong> {report.fileA} → {report.fileB}
        </p>
        {report.llmUsed && (
          <p className="text-xs text-blue-700 mt-1">
            ✨ Enhanced with AI-powered explanations
          </p>
        )}
      </div>

      {/* Diffs List */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900">Detected Changes</h3>
        
        {report.diffs.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <div className="text-6xl mb-4">✅</div>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">No Significant Changes</h4>
            <p className="text-gray-600">The contracts appear to be identical or have only minor formatting differences.</p>
          </div>
        ) : (
          report.diffs.map((diff, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Diff Header */}
              <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{diff.clause}</h4>
                  <p className="text-sm text-gray-600 mt-1">{diff.summary}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border flex items-center gap-1 ${getSeverityColor(diff.severity)}`}>
                    <span>{getSeverityEmoji(diff.severity)}</span>
                    <span>{diff.severity}</span>
                  </span>
                  <span className="text-sm text-gray-500">
                    {diff.confidence}% confidence
                  </span>
                </div>
              </div>

              {/* Diff Content */}
              <div className="p-6">
                {/* Old vs New Text */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">Original Version</h5>
                    <div className="bg-red-50 border border-red-200 rounded p-3 text-sm text-gray-800 min-h-24">
                      {diff.oldText || <span className="text-gray-400 italic">Clause removed</span>}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-gray-700 mb-2">New Version</h5>
                    <div className="bg-green-50 border border-green-200 rounded p-3 text-sm text-gray-800 min-h-24">
                      {diff.newText || <span className="text-gray-400 italic">Clause added</span>}
                    </div>
                  </div>
                </div>

                {/* Explanation */}
                {diff.explanation && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <h5 className="text-sm font-semibold text-blue-900 mb-2">💡 Analysis</h5>
                    <p className="text-sm text-blue-800">{diff.explanation}</p>
                  </div>
                )}

                {/* Suggestions */}
                {diff.suggestions && diff.suggestions.length > 0 && (
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h5 className="text-sm font-semibold text-purple-900 mb-2">🎯 Negotiation Suggestions</h5>
                    <ul className="space-y-2">
                      {diff.suggestions.map((suggestion, idx) => (
                        <li key={idx} className="text-sm text-purple-800 flex items-start">
                          <span className="mr-2">•</span>
                          <span>{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Action Buttons */}
      <div className="mt-8 pt-6 border-t flex gap-4 justify-between">
        <button
          onClick={() => setShowFeedback(true)}
          className="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition"
        >
          📝 Give Feedback
        </button>
        <div className="flex gap-4">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition"
          >
            Print Report
          </button>
          <button
            onClick={handleExportPDF}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition"
          >
            Download PDF
          </button>
        </div>
      </div>

      {/* Feedback Modal */}
      <FeedbackModal 
        isOpen={showFeedback} 
        onClose={() => setShowFeedback(false)}
        reportId={report.reportId}
      />
    </div>
  )
            }
