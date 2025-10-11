'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  
  const isActive = (path) => {
    return pathname === path ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:text-gray-900'
  }

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            ClauseCompare
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link href="/dashboard" className={`${isActive('/dashboard')} font-medium transition pb-1`}>
              Dashboard
            </Link>
            <Link href="/contracts" className={`${isActive('/contracts')} font-medium transition pb-1`}>
              Compare
            </Link>
            <Link href="/profile" className={`${isActive('/profile')} font-medium transition pb-1`}>
              Profile
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900 font-medium">
              Log In
            </Link>
            <Link 
              href="/signup" 
              className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
