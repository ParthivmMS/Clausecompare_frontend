import { AuthProvider } from '@/contexts/AuthContext'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import './globals.css'

export const metadata = {
  title: 'ClauseCompare - AI Contract Comparison Tool',
  description: 'Compare contracts with AI-powered analysis. Get instant risk scoring, clause-by-clause differences, and negotiation suggestions. Trusted by law firms globally.',
  keywords: 'contract comparison, AI contract analysis, legal tech, contract review, risk analysis',
  authors: [{ name: 'ClauseCompare' }],
  openGraph: {
    title: 'ClauseCompare - AI Contract Comparison',
    description: 'Compare contracts in seconds with AI-powered analysis',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClauseCompare - AI Contract Comparison',
    description: 'Compare contracts in seconds with AI-powered analysis',
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://accounts.google.com/gsi/client" async defer></script>
      </head>
      <body className="min-h-screen flex flex-col">
        <AuthProvider>
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
