'use client'

import { useState, useEffect } from 'react'
import { Type, Github, Heart, ExternalLink } from 'lucide-react'
import { convertToStyle, TextStyle } from '@/lib/convertToBold'
import DarkModeToggle from '@/components/DarkModeToggle'
import TextInput from '@/components/TextInput'
import OutputBox from '@/components/OutputBox'
import StyleSelector from '@/components/StyleSelector'

export default function Home() {
  const [inputText, setInputText] = useState('')
  const [styledText, setStyledText] = useState('')
  const [selectedStyle, setSelectedStyle] = useState<TextStyle>('bold')

  // Convert text to styled Unicode in real-time
  useEffect(() => {
    setStyledText(convertToStyle(inputText, selectedStyle))
  }, [inputText, selectedStyle])

  // Load saved text from localStorage on mount
  useEffect(() => {
    const savedText = localStorage.getItem('boldTextInput')
    if (savedText) {
      setInputText(savedText)
    }
  }, [])

  // Save text to localStorage when it changes
  useEffect(() => {
    if (inputText) {
      localStorage.setItem('boldTextInput', inputText)
    } else {
      localStorage.removeItem('boldTextInput')
    }
  }, [inputText])

  const handleInputChange = (value: string) => {
    setInputText(value)
  }

  const handleStyleChange = (style: TextStyle) => {
    setSelectedStyle(style)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                <Type className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Multi-Style Text Converter
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 hidden sm:block">
                  Convert text to 8 different Unicode styles instantly
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <a
                href="https://usman.codcrafters.org"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                aria-label="Visit Usman's Portfolio"
              >
                <ExternalLink className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </a>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Transform Your Text with <span className="text-primary-600 dark:text-primary-400">8 Unicode Styles</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Convert regular text into 8 different Unicode styles instantly. Perfect for LinkedIn, Facebook, 
              Instagram, and all social media platforms. Professional, elegant, and eye-catching text styles.
            </p>
          </div>

          {/* Converter Interface */}
          <div className="card p-6 sm:p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Input Section */}
              <div className="space-y-4">
                <TextInput
                  value={inputText}
                  onChange={handleInputChange}
                  maxLength={1000}
                  placeholder="Type or paste your text here and watch it transform instantly..."
                />
                
                {/* Style Selector */}
                <StyleSelector 
                  selectedStyle={selectedStyle}
                  onStyleChange={handleStyleChange}
                />
                
                {/* Example text button */}
                {!inputText && (
                  <button
                    onClick={() => setInputText('Hello World! Transform your text to STYLISH Unicode characters instantly. 123 ABC xyz')}
                    className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    📝 Try example text
                  </button>
                )}
              </div>

              {/* Output Section */}
              <div className="lg:col-span-2 space-y-4">
                <OutputBox 
                  styledText={styledText} 
                  originalText={inputText} 
                  selectedStyle={selectedStyle}
                />
              </div>
            </div>
          </div>

          {/* Style Preview Section */}
          <div className="card p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">All Available Styles</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {['bold', 'boldSans', 'boldItalic', 'boldItalicSans', 'doubleStruck', 'fraktur', 'script', 'monospace'].map((style) => (
                <div key={style} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 capitalize">
                    {style.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  <div className="text-lg font-mono">
                    {convertToStyle('Hello World', style as TextStyle)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">8 Text Styles</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Choose from Bold, Italic, Double-Struck, Fraktur, Script, and more.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Social Media Ready</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Works perfectly on LinkedIn, Facebook, Instagram, and all platforms.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Instant Conversion</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Real-time conversion as you type. No waiting, no delays.
              </p>
            </div>
          </div>

          {/* How it Works */}
          <div className="card p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How it Works</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                This tool converts regular text characters into various <strong>Mathematical Unicode</strong> equivalents. 
                Unlike CSS styling, these are actual Unicode characters that will appear styled anywhere they&apos;re used.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Supported Characters:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Uppercase letters (A-Z) → Various Unicode styles</li>
                    <li>• Lowercase letters (a-z) → Various Unicode styles</li>
                    <li>• Numbers (0-9) → Available in most styles</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Perfect For:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• LinkedIn profile names</li>
                    <li>• Facebook posts & comments</li>
                    <li>• Instagram bios & captions</li>
                    <li>• Professional documents</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
              <span>Developed by</span>
              <a 
                href="https://usman.codcrafters.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-primary-600 dark:text-primary-400 hover:underline"
              >
                Usman Ghias
              </a>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
              <a 
                href="https://github.com/UsmanGhias/bold-text" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                GitHub
              </a>
              <span>•</span>
              <a 
                href="https://usman.codcrafters.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Portfolio
              </a>
              <span>•</span>
              <span>Multi-Style Text Converter © 2024</span>
            </div>
            <div className="text-xs text-gray-400 dark:text-gray-500 max-w-2xl mx-auto">
              Senior Full Stack Developer | MERN Stack Expert | Odoo Developer | MSSE @Quantic | CEO @CODCrafters | 
              Passionate about creating innovative solutions that make a difference.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}