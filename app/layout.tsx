import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BoldText Converter - 8 Unicode Text Styles Generator',
  description: 'Convert regular text into 8 different Unicode styles instantly. Perfect for LinkedIn, Facebook, Instagram, and all social media platforms. Free online tool.',
  keywords: ['bold text', 'unicode converter', 'text generator', 'bold font', 'online tool', 'copy paste bold text', 'social media text', 'linkedin text', 'instagram text', 'facebook text', 'unicode styles', 'text converter'],
  authors: [{ name: 'Usman Ghias' }],
  creator: 'Usman Ghias',
  publisher: 'BoldText Converter',
  openGraph: {
    title: 'BoldText Converter - 8 Unicode Text Styles Generator',
    description: 'Convert regular text into 8 different Unicode styles instantly. Perfect for LinkedIn, Facebook, Instagram, and all social media platforms.',
    url: 'https://boldtext.vercel.app',
    siteName: 'BoldText Converter',
    images: [
      {
        url: '/boldtext.png',
        width: 400,
        height: 400,
        alt: 'BoldText Converter Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BoldText Converter - 8 Unicode Text Styles Generator',
    description: 'Convert regular text into 8 different Unicode styles instantly. Perfect for LinkedIn, Facebook, Instagram, and all social media platforms.',
    images: ['/boldtext.png'],
    creator: '@usmanghias',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://boldtext.vercel.app',
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
        <link rel="icon" type="image/png" href="/boldtext.png" />
        <link rel="apple-touch-icon" href="/boldtext.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="BoldText Converter" />
        <meta name="application-name" content="BoldText Converter" />
        <meta name="msapplication-TileImage" content="/boldtext.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}