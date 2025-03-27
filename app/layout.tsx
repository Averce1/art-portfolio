import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Portfolio',
  description: 'A showcase of my art and photography work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-xl font-bold">
                Your Name
              </Link>
              <div className="space-x-6">
                <Link href="/art" className="hover:text-gray-600 transition">
                  Art
                </Link>
                <Link href="/photography" className="hover:text-gray-600 transition">
                  Photography
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-100 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
} 