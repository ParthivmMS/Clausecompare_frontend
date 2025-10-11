'use client'

import { useState, useEffect, createContext, useContext } from 'react'

/**
 * Authentication hook (stubbed for now)
 * TODO: Implement actual authentication with backend
 */

const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  logout: async () => {},
  register: async () => {},
})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      // TODO: Check authentication status with backend
      // const response = await fetch('/api/auth/me')
      // const data = await response.json()
      // setUser(data.user)
      
      // Stub: Set dummy user for development
      setUser(null)
    } catch (error) {
      console.error('Auth check failed:', error)
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }

  const login = async (email, password) => {
    try {
      // TODO: Implement login API call
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   body: JSON.stringify({ email, password })
      // })
      // const data = await response.json()
      // setUser(data.user)
      
      // Stub
      setUser({ email, name: 'Test User' })
      return { success: true }
    } catch (error) {
      console.error('Login failed:', error)
      return { success: false, error: error.message }
    }
  }

  const logout = async () => {
    try {
      // TODO: Implement logout API call
      // await fetch('/api/auth/logout', { method: 'POST' })
      
      setUser(null)
      return { success: true }
    } catch (error) {
      console.error('Logout failed:', error)
      return { success: false, error: error.message }
    }
  }

  const register = async (name, email, password) => {
    try {
      // TODO: Implement registration API call
      // const response = await fetch('/api/auth/register', {
      //   method: 'POST',
      //   body: JSON.stringify({ name, email, password })
      // })
      // const data = await response.json()
      // setUser(data.user)
      
      // Stub
      setUser({ email, name })
      return { success: true }
    } catch (error) {
      console.error('Registration failed:', error)
      return { success: false, error: error.message }
    }
  }

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    register,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
