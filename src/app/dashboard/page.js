'use client'

import { useState } from 'react'
import Link from 'next/link'
import Dashboard from '@/components/dashboard'
import FileUploader from '@/components/fileuploader'
import { mockReports } from '@/data/mockData'

export default function DashboardPage() {
  const [reports] = useState(mockReports)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">
            View your recent comparisons and start a new analysis.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Stats Cards */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Comparisons</p>
                <p className="text-3xl font-bold text-gray-900">{reports.length}</p>
              </div>
              <div className="text-4xl">📊</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Avg Risk Score</p>
                <p className="text-3xl font-bold text-yellow-600">
                  {Math.round(reports.reduce((sum, r) => sum + r.riskScore, 0) / reports.length)}
                </p>
              </div>
              <div className="text-4xl">⚠️</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">High Risk Items</p>
                <p className="text-3xl font-bold text-red-600">
                  {reports.reduce((sum, r) => sum + r.highRiskCount, 0)}
                </p>
              </div>
              <div className="text-4xl">🚨</div>
            </div>
          </div>
        </div>

        {/* Quick Upload */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Compare</h2>
          <FileUploader onCompareComplete={(report) => {
            window.location.href = '/contracts'
          }} />
        </div>

        {/* Recent Reports */}
        <Dashboard reports={reports} />
      </div>
    </div>
  )
}
