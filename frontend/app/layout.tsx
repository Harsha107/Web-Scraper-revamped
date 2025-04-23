import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Amazon Price Tracker',
  description: 'Track Amazon product prices and get notified when they drop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen">
        <Navbar />
        <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </main>
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#1F2937',
              color: '#fff',
              borderRadius: '0.75rem',
              padding: '16px 24px',
            },
            success: {
              iconTheme: {
                primary: '#3B82F6',
                secondary: 'white',
              },
            },
          }}
        />
      </body>
    </html>
  )
}