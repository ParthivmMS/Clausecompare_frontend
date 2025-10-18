'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { FileText, TrendingUp, AlertCircle, Clock, Download, Eye, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}

function DashboardContent() {
  const { user, checkAuth } = useAuth()
  const router = useRouter()
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalComparisons: 0,
    avgRiskScore: 0,
    highRiskCount: 0
  })

  useEffect(() => {
    checkAuth() // Refresh user data
    loadReports()
  }, [])

  async function loadReports() {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        router.push('/login')
        return
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reports`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (res.status === 401) {
        localStorage.removeItem('token')
        router.push('/login')
        return
      }

      if (res.ok) {
        const data = await res.json()
        setReports(data)
        calculateStats(data)
      }
    } catch (error) {
      console.error('Failed to load reports:', error)
    } finally {
      setLoading(false)
    }
  }

  function calculateStats(reportsData) {
    if (reportsData.length === 0) {
      setStats({ totalComparisons: 0, avgRiskScore: 0, highRiskCount: 0 })
      return
    }

    const total = reportsData.length
    const avgRisk = reportsData.reduce((sum, r) => sum + (r.risk_score || 0), 0) / total
    const highRisk = reportsData.filter(r => (r.risk_score || 0) >= 70).length

    setStats({
      totalComparisons: total,
      avgRiskScore: Math.round(avgRisk),
      highRiskCount: highRisk
    })
  }

  const getRiskColor = (score) => {
    if (score >= 70) return 'text-red-600'
    if (score >= 40) return 'text-orange-600'
    return 'text-green-600'
  }

  const getRiskBadge = (score) => {
    if (score >= 70) return '🔴 High Risk'
    if (score >= 40) return '🟡 Medium Risk'
    return '🟢 Low Risk'
  }

  const formatDate = (dateStr) => {
    try {
      const date = new Date(dateStr)
      const now = new Date()
      const diffHours = Math.floor((now - date) / (1000 * 60 * 60))
      
      if (diffHours < 1) return 'Just now'
      if (diffHours < 24) return `${diffHours}h ago`
      if (diffHours < 48) return 'Yesterday'
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    } catch {
      return dateStr
    }
  }

  async function downloadReport(reportId) {
    try {
      const token = localStorage.getItem('token')
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
        alert('Failed to download report')
      }
    } catch (error) {
      console.error('Download failed:', error)
      alert('Failed to download report. Please try again.')
    }
  }

  function viewReport(reportId) {
    // Store report in sessionStorage and navigate
    const report = reports.find(r => r.report_id === reportId)
    if (report) {
      sessionStorage.setItem('currentReport', JSON.stringify(report))
      router.push(`/reports/${reportId}`)
    }
  }

  // NEW: Delete report function
  async function handleDeleteReport(reportId) {
    if (!confirm('⚠️ Delete this report permanently?\n\nThis action cannot be undone.')) {
      return
    }

    try {
      const token = localStorage.getItem('token')
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reports/${reportId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (res.ok) {
        // Remove from UI
        setReports(prevReports => prevReports.filter(r => r.report_id !== reportId))
        
        // Update stats
        const newReports = reports.filter(r => r.report_id !== reportId)
        calculateStats(newReports)
        
        alert('✅ Report deleted successfully')
      } else {
        throw new Error('Failed to delete')
      }
    } catch (error) {
      console.error('Delete error:', error)
      alert('❌ Failed to delete report. Please try again.')
    }
  }

  const usagePercent = user ? (user.comparisons_used / user.comparisons_limit) * 100 : 0
  const isPlanUpgradeNeeded = usagePercent > 80

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, {user?.email}</p>
        </div>

        {/* Upgrade Banner for Free Users */}
        {user?.plan === 'free' && (
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-6 mb-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">🚀 Unlock Unlimited Comparisons</h3>
                <p className="text-blue-100 mb-2">
                  Upgrade to Pro for unlimited comparisons, PDF export, and AI-powered insights
                </p>
                <ul className="text-sm text-blue-100 space-y-1">
                  <li>✅ Unlimited monthly comparisons</li>
                  <li>✅ PDF export with your branding</li>
                  <li>✅ Advanced AI explanations</li>
                </ul>
              </div>
              <Link
                href="/pricing"
                className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition whitespace-nowrap"
              >
                Upgrade Now
              </Link>
            </div>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <FileText className="text-blue-600" size={24} />
              <span className="text-xs text-gray-500">All Time</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.totalComparisons}</p>
            <p className="text-sm text-gray-600 mt-1">Total Comparisons</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="text-green-600" size={24} />
              <span className="text-xs text-gray-500">This Month</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">{user?.comparisons_used || 0}</p>
            <p className="text-sm text-gray-600 mt-1">Comparisons Used</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <AlertCircle className="text-orange-600" size={24} />
              <span className="text-xs text-gray-500">Average</span>
            </div>
            <p className={`text-3xl font-bold ${getRiskColor(stats.avgRiskScore)}`}>
              {stats.avgRiskScore}
            </p>
            <p className="text-sm text-gray-600 mt-1">Avg Risk Score</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <AlertCircle className="text-red-600" size={24} />
              <span className="text-xs text-gray-500">Flagged</span>
            </div>
            <p className="text-3xl font-bold text-red-600">{stats.highRiskCount}</p>
            <p className="text-sm text-gray-600 mt-1">High-Risk Reports</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Start a New Comparison</h2>
              <p className="text-blue-100">
                {user?.comparisons_limit && user?.comparisons_used !== undefined
                  ? `${user.comparisons_limit - user.comparisons_used} comparisons remaining this month`
                  : 'Compare your contracts now'}
              </p>
            </div>
            <Link
              href="/contracts"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
            >
              Upload Contracts
            </Link>
          </div>
        </div>

        {/* Reports Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Comparisons</h3>
          </div>

          {loading ? (
            <div className="p-8 text-center text-gray-500">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              Loading reports...
            </div>
          ) : reports.length === 0 ? (
            <div className="p-8 text-center">
              <FileText className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-600 mb-4">No comparisons yet</p>
              <Link
                href="/contracts"
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Create Your First Comparison
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                      Files Compared
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                      Risk Score
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                      Changes
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {reports.map((report) => (
                    <tr key={report.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          <FileText className="text-gray-400 flex-shrink-0 mt-1" size={20} />
                          <div className="min-w-0">
                            <p className="font-medium text-gray-900 truncate">
                              {report.file_a_name}
                            </p>
                            <p className="text-xs text-gray-500 truncate">
                              vs {report.file_b_name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock size={14} />
                          {formatDate(report.created_at)}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`text-2xl font-bold ${getRiskColor(report.risk_score)}`}>
                            {report.risk_score}
                          </span>
                          <span className="text-xs text-gray-500">/100</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {getRiskBadge(report.risk_score)}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full">
                          {report.metadata?.diffCount || report.diffs?.length || 0} changes
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => viewReport(report.report_id)}
                            className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition flex items-center gap-1"
                          >
                            <Eye size={14} />
                            View
                          </button>
                          <button
                            onClick={() => downloadReport(report.report_id)}
                            className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded hover:bg-gray-300 transition flex items-center gap-1"
                          >
                            <Download size={14} />
                            PDF
                          </button>
                          {/* NEW: Delete Button */}
                          <button
                            onClick={() => handleDeleteReport(report.report_id)}
                            className="px-3 py-1 bg-red-50 text-red-600 text-sm rounded hover:bg-red-100 transition flex items-center gap-1"
                            title="Delete this report permanently"
                          >
                            <Trash2 size={14} />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Plan Status */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Current Plan</h3>
              <p className="text-sm text-gray-600">
                {user?.plan === 'free' ? 'Free Plan' : user?.plan === 'pro' ? 'Pro Plan' : 'Team Plan'}
              </p>
            </div>
            {user?.plan === 'free' && (
              <Link
                href="/pricing"
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Upgrade to Pro
              </Link>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Monthly Comparisons</span>
                <span className="font-semibold text-gray-900">
                  {user?.comparisons_used || 0} / {user?.comparisons_limit || 10}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all ${
                    usagePercent >= 100 ? 'bg-red-600' :
                    usagePercent >= 80 ? 'bg-orange-500' :
                    'bg-blue-600'
                  }`}
                  style={{ width: `${Math.min(usagePercent, 100)}%` }}
                />
              </div>
            </div>

            {user?.plan === 'free' && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900 font-semibold mb-2">
                  ✨ Upgrade to unlock unlimited comparisons
                </p>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Unlimited monthly comparisons</li>
                  <li>• Advanced AI insights</li>
                  <li>• Priority support</li>
                  <li>• PDF export with your branding</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
