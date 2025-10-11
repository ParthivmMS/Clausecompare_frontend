'use client'

import { useState } from 'react'
import { mockUser } from '@/data/mockData'
import Link from 'next/link'

export default function ProfilePage() {
  const [user, setUser] = useState(mockUser)
  const [isEditing, setIsEditing] = useState(false)

  const usagePercentage = (user.comparisonsUsed / user.comparisonsLimit) * 100

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile & Settings</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Account Information</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="text-primary-600 font-medium hover:text-primary-700"
                >
                  {isEditing ? 'Cancel' : 'Edit'}
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={user.name}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={user.email}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-50"
                  />
                </div>

                {isEditing && (
                  <button className="w-full bg-primary-600 text-white py-2 rounded-lg font-medium hover:bg-primary-700 transition">
                    Save Changes
                  </button>
                )}
              </div>
            </div>

            {/* Change Password */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Change Password</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="••••••••"
                  />
                </div>
                <button className="w-full bg-primary-600 text-white py-2 rounded-lg font-medium hover:bg-primary-700 transition">
                  Update Password
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Plan Info */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Current Plan</h3>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-primary-600 mb-1">{user.plan}</div>
                <p className="text-sm text-gray-600">Member since {new Date(user.joinedDate).toLocaleDateString()}</p>
              </div>
              <Link
                href="/pricing"
                className="block w-full bg-primary-600 text-white py-2 rounded-lg font-medium text-center hover:bg-primary-700 transition"
              >
                Upgrade Plan
              </Link>
            </div>

            {/* Usage Stats */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Usage This Month</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Comparisons</span>
                  <span className="font-medium text-gray-900">
                    {user.comparisonsUsed} / {user.comparisonsLimit}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full transition-all"
                    style={{ width: `${usagePercentage}%` }}
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500">
                {user.comparisonsLimit - user.comparisonsUsed} comparisons remaining
              </p>
            </div>

            {/* Delete Account */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Danger Zone</h3>
              <p className="text-sm text-gray-600 mb-4">
                Permanently delete your account and all data
              </p>
              <button className="w-full bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
