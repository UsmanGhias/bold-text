import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bold Text Converter - Convert Text to Bold Unicode',
  description: 'Convert regular text to bold Unicode characters instantly. Free, fast, and easy-to-use bold text generator for social media, documents, and more.',
  keywords: 'bold text, unicode, text converter, bold generator, text styling, bold letters',
  authors: [{ name: 'Bold Text Converter' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Bold Text Converter - Convert Text to Bold Unicode',
    description: 'Convert regular text to bold Unicode characters instantly. Free, fast, and easy-to-use.',
    type: 'website',
    url: 'https://your-domain.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bold Text Converter',
    description: 'Convert regular text to bold Unicode characters instantly.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}