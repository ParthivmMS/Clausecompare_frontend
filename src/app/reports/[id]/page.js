'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import ReportViewer from '@/components/reportviewer'
import { ProtectedRoute } from '@/components/ProtectedRoute'

export default function ReportPage() {
  return (
    <ProtectedRoute>
      <ReportContent />
    </ProtectedRoute>
  )
}

function ReportContent() {
  const params = useParams()
  const router = useRouter()
  const [report, setReport] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadReport()
  }, [params.id])

  async function loadReport() {
    try {
      // First try sessionStorage
      const cached = sessionStorage.getItem('currentReport')
      if (cached) {
        const cachedReport = JSON.parse(cached)
        if (cachedReport.report_id === params.id) {
          setReport(formatReport(cachedReport))
          setLoading(false)
          return
        }
      }

      // Fetch from API
      const token = localStorage.getItem('token')
      if (!token) {
        router.push('/login')
        return
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reports/${params.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (res.ok) {
        const data = await res.json()
        setReport(formatReport(data))
      } else {
        alert('Report not found')
        router.push('/dashboard')
      }
    } catch (error) {
      console.error('Failed to load report:', error)
      alert('Failed to load report')
      router.push('/dashboard')
    } finally {
      setLoading(false)
    }
  }

  function formatReport(dbReport) {
    // Convert database format to ReportViewer format
    return {
      reportId: dbReport.report_id,
      riskScore: dbReport.risk_score,
      summary: dbReport.summary,
      verdict: dbReport.verdict,
      riskReport: dbReport.risk_report,
      diffs: dbReport.diffs || [],
      fileA: dbReport.file_a_name,
      fileB: dbReport.file_b_name,
      metadata: dbReport.metadata || {},
      createdAt: dbReport.created_at
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading report...</p>
        </div>
      </div>
    )
  }

  if (!report) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ReportViewer report={report} />
      <div className="mt-8 text-center">
        <button
          onClick={() => router.push('/dashboard')}
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition"
        >
          ← Back to Dashboard
        </button>
      </div>
    </div>
  )
}
