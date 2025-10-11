import LoginForm from '@/components/loginform'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to access your contract comparisons</p>
        </div>

        <LoginForm />

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link href="/signup" className="text-primary-600 font-semibold hover:text-primary-700">
            Sign up for free
          </Link>
        </p>
      </div>
    </div>
  )
}
