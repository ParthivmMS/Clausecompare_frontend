/**
 * API utility functions for making requests to backend
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'

/**
 * Compare two contract files
 */
export async function compareContracts(fileA, fileB, useLLM = false) {
  const formData = new FormData()
  formData.append('fileA', fileA)
  formData.append('fileB', fileB)
  formData.append('use_llm', useLLM ? 'true' : 'false')

  const response = await fetch(`${API_BASE_URL}/compare`, {
    method: 'POST',
    body: formData,
    credentials: 'include',
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.error || error.detail || `HTTP ${response.status}`)
  }

  return response.json()
}

/**
 * Generic API request helper
 */
export async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  }

  if (options.body && typeof options.body === 'object') {
    config.body = JSON.stringify(options.body)
  }

  const response = await fetch(url, config)

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.message || `HTTP ${response.status}`)
  }

  return response.json()
}

/**
 * Health check
 */
export async function checkHealth() {
  const response = await fetch(`${API_BASE_URL}/health`)
  return response.json()
}
