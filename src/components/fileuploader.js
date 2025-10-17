'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext' // NEW: Import auth

export default function FileUploader({ onCompareComplete }) {
  const { user } = useAuth() // NEW: Get user from auth context
  const [fileA, setFileA] = useState(null)
  const [fileB, setFileB] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [useLLM, setUseLLM] = useState(false)

  const handleFileChange = (e, setter) => {
    const file = e.target.files[0]
    if (file) {
      const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain']
      const validExtensions = ['.pdf', '.docx', '.doc', '.txt']
      const hasValidExtension = validExtensions.some(ext => file.name.toLowerCase().endsWith(ext))
      
      if (!validTypes.includes(file.type) && !hasValidExtension) {
        setError('Please upload PDF, DOCX, or TXT files only')
        return
      }
      
      if (file.size > 10 * 1024 * 1024) {
        setError('File size must be less than 10MB')
        return
      }
      
      setter(file)
      setError(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // NEW: Check authentication
    const token = localStorage.getItem('token')
    if (!token) {
      setError('Please login to compare contracts')
      setTimeout(() => {
        window.location.href = '/login'
      }, 2000)
      return
    }
    
    if (!fileA || !fileB) {
      setError('Please select both files')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append('fileA', fileA)
      formData.append('fileB', fileB)
      formData.append('use_llm', useLLM ? 'true' : 'false')
      formData.append('use_ai_full', 'true') // NEW: Enable AI by default

      // CHANGED: Call backend directly instead of /api/compare proxy
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/compare`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}` // NEW: Add auth token
        },
        body: formData,
      })

      // NEW: Handle 401 (token expired)
      if (response.status === 401) {
        localStorage.removeItem('token')
        setError('Session expired. Please login again.')
        setTimeout(() => {
          window.location.href = '/login'
        }, 2000)
        return
      }

      // Handle rate limit error (429)
      if (response.status === 429) {
        const errorData = await response.json()
        const detail = errorData.detail || errorData
        const message = detail.message || 'Monthly comparison limit reached'
        setError(`${message} Upgrade to Pro for unlimited comparisons.`)
        setIsLoading(false)
        return
      }

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || errorData.detail || `Server error: ${response.status}`)
      }

      const data = await response.json()
      
      if (onCompareComplete) {
        onCompareComplete(data)
      }
      
      // Reset files after successful comparison
      setFileA(null)
      setFileB(null)
      
    } catch (err) {
      console.error('Comparison error:', err)
      setError(err.message || 'Failed to compare contracts. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e, setter) => {
    e.preventDefault()
    e.stopPropagation()
    
    const file = e.dataTransfer.files[0]
    if (file) {
      const fakeEvent = { target: { files: [file] } }
      handleFileChange(fakeEvent, setter)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Compare Contracts</h2>
        
        {/* NEW: Show usage info */}
        {user && (
          <div className="text-sm text-gray-600">
            <span className="font-semibold">{user.comparisons_used || 0}</span> / {user.comparisons_limit || 10} used this month
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* File A Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Original Contract (Version A)
            </label>
            <div
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, setFileA)}
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition cursor-pointer"
            >
              <input
                type="file"
                id="fileA"
                accept=".pdf,.docx,.doc,.txt"
                onChange={(e) => handleFileChange(e, setFileA)}
                className="hidden"
              />
              <label htmlFor="fileA" className="cursor-pointer">
                <div className="text-4xl mb-2">📄</div>
                {fileA ? (
                  <p className="text-sm text-gray-600 font-medium">{fileA.name}</p>
                ) : (
                  <>
                    <p className="text-sm text-gray-600">Drop file here or click to browse</p>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOCX, or TXT (max 10MB)</p>
                  </>
                )}
              </label>
            </div>
          </div>

          {/* File B Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Contract (Version B)
            </label>
            <div
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, setFileB)}
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition cursor-pointer"
            >
              <input
                type="file"
                id="fileB"
                accept=".pdf,.docx,.doc,.txt"
                onChange={(e) => handleFileChange(e, setFileB)}
                className="hidden"
              />
              <label htmlFor="fileB" className="cursor-pointer">
                <div className="text-4xl mb-2">📄</div>
                {fileB ? (
                  <p className="text-sm text-gray-600 font-medium">{fileB.name}</p>
                ) : (
                  <>
                    <p className="text-sm text-gray-600">Drop file here or click to browse</p>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOCX, or TXT (max 10MB)</p>
                  </>
                )}
              </label>
            </div>
          </div>
        </div>

        {/* LLM Toggle - UPDATED description */}
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="useLLM"
            checked={useLLM}
            onChange={(e) => setUseLLM(e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="useLLM" className="text-sm text-gray-700">
            Enhanced AI explanations (recommended, may take 10-15 seconds)
          </label>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
  type="submit"
  disabled={isLoading || !fileA || !fileB}
  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
>
  {isLoading ? (
    <span className="flex items-center justify-center">
      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
      {fileA && fileB ? 'Analyzing contracts... This may take 10-30 seconds' : 'Uploading...'}
    </span>
  ) : (
    'Compare Contracts'
  )}
</button>

        <p className="text-xs text-gray-500 text-center">
          🔒 Your files are processed securely and deleted within 24 hours. We never use your contracts for AI training.
        </p>
      </form>
    </div>
  )
}
