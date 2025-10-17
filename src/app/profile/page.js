'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { User, Mail, Lock, CreditCard, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfileContent />
    </ProtectedRoute>
  )
}

function ProfileContent() {
  const { user, logout } = useAuth()
  const [showPasswordForm, setShowPasswordForm] = useState(false)
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  })
  const [message, setMessage] = useState({ type: '', text: '' })

  const handlePasswordChange = async (e) => {
    e.preventDefault()
    setMessage({ type: '', text: '' })

    if (passwords.new !== passwords.confirm) {
      setMessage({ type: 'error', text: 'New passwords do not match' })
      return
    }

    if (passwords.new.length < 8) {
      setMessage({ type: 'error', text: 'Password must be at least 8 characters' })
      return
    }

    // TODO: Implement password change API
    setMessage({ type: 'success', text: 'Password change coming soon!' })
    setPasswords({ current: '', new: '', confirm: '' })
    setShowPasswordForm(false)
  }

  const getPlanBadge = (plan) => {
    if (plan === 'pro') return 'bg-blue-100 text-blue-800 border-blue-300'
    if (plan === 'team') return 'bg-purple-100 text-purple-800 border-purple-300'
    return 'bg-gray-100 text-gray-800 border-gray-300'
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Profile & Settings</h1>
          <p className="text-gray-600 mt-1">Manage your account information</p>
        </div>

        {/* Message */}
        {message.text && (
          <div className={`mb-6 p-4 rounded-lg ${
            message.type === 'success' ? 'bg-green-50 border border-green-200 text-green-800' :
            'bg-red-50 border border-red-200 text-red-800'
          }`}>
            {message.text}
          </div>
        )}

        {/* Account Information */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Account Information</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <User className="text-gray-400 mt-1" size={20} />
              <div className="flex-1">
                <p className="text-sm text-gray-600">User ID</p>
                <p className="font-medium text-gray-900">{user?.id}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-gray-400 mt-1" size={20} />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium text-gray-900">{user?.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CreditCard className="text-gray-400 mt-1" size={20} />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Current Plan</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border mt-1 ${getPlanBadge(user?.plan)}`}>
                  {user?.plan === 'free' ? 'Free Plan' : user?.plan === 'pro' ? 'Pro Plan' : 'Team Plan'}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Calendar className="text-gray-400 mt-1" size={20} />
              <div className="flex-1">
                <p className="text-sm text-gray-600">Usage This Month</p>
                <p className="font-medium text-gray-900">
                  {user?.comparisons_used || 0} / {user?.comparisons_limit || 10} comparisons
                </p>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${Math.min((user?.comparisons_used || 0) / (user?.comparisons_limit || 10) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Security</h2>
          
          {!showPasswordForm ? (
            <button
              onClick={() => setShowPasswordForm(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            >
              <Lock size={18} />
              Change Password
            </button>
          ) : (
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  value={passwords.current}
                  onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  value={passwords.new}
                  onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                  required
                  minLength={8}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={passwords.confirm}
                  onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                  required
                  minLength={8}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Update Password
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordForm(false)
                    setPasswords({ current: '', new: '', confirm: '' })
                  }}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Subscription Management */}
        {user?.plan !== 'free' && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Subscription</h2>
            <p className="text-gray-600 mb-4">Manage your billing and subscription</p>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">
              Manage Billing
            </button>
          </div>
        )}

        {user?.plan === 'free' && (
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white mb-6">
            <h3 className="text-xl font-bold mb-2">Upgrade to Pro</h3>
            <p className="text-blue-100 mb-4">
              Get unlimited comparisons, advanced insights, and priority support
            </p>
            <Link
              href="/pricing"
              className="inline-block px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
            >
              View Plans
            </Link>
          </div>
        )}

        {/* Danger Zone */}
        <div className="bg-white rounded-lg shadow-sm p-6 border-2 border-red-200">
          <h2 className="text-xl font-bold text-red-600 mb-4">Danger Zone</h2>
          <p className="text-gray-600 mb-4">Irreversible actions</p>
          <button
            onClick={() => {
              if (confirm('Are you sure you want to log out?')) {
                logout()
              }
            }}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Log Out
          </button>
        </div>

      </div>
    </div>
  )
                    }
