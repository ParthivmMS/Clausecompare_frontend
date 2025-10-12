import { useState } from 'react'
import FileUploader from '@/components/fileuploader'
import ReportViewer from '@/components/reportviewer'

export default function ContractsPage() {
  const [report, setReport] = useState(null)

  const handleCompareComplete = (reportData) => {
    setReport(reportData)
    // Scroll to report
    setTimeout(() => {
      document.getElementById('report-section')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const handleNewComparison = () => {
    setReport(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contract Comparison</h1>
          <p className="text-gray-600">
            Upload two versions of your contract to see what changed and get AI-powered analysis.
          </p>
        </div>

        <FileUploader onCompareComplete={handleCompareComplete} />

        {report && (
          <div id="report-section">
            <ReportViewer report={report} />
            
            <div className="mt-8 text-center">
              <button
                onClick={handleNewComparison}
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Compare Another Set of Contracts
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
