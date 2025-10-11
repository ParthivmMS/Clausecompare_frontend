import './globals.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata = {
  title: 'ClauseCompare - AI Contract Comparison',
  description: 'Compare contract versions with AI-powered analysis',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
