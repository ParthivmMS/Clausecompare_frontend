'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

export default function Navigation() {
  const pathname = usePathname()
  const { user, logout } = useAuth()

  const navLinks = [
  { href: '/dashboard', label: 'Dashboard', auth: true },
  { href: '/contracts', label: 'Compare', auth: true },
  { href: '/blog', label: 'Blog', auth: false },  // ← ADD THIS LINE
  { href: '/profile', label: 'Profile', auth: true },
]

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              ClauseCompare
            </Link>
            
            {user && (
              <div className="hidden md:flex ml-10 space-x-8">
  {navLinks.map((link) => {
    // Show blog to everyone, other links only to logged-in users
    if (!link.auth || user) {
      return (
        <Link
          key={link.href}
          href={link.href}
          className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
            pathname === link.href
              ? 'border-blue-500 text-gray-900'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          {link.label}
        </Link>
      )
    }
    return null
  })}
</div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm text-gray-600 hidden md:block">
                  {user.email}
                </span>
                <button
                  onClick={logout}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
