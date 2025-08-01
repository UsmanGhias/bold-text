'use client'

import { useState, useEffect } from 'react'
import { Type, Github, Heart } from 'lucide-react'
import { convertToBold } from '@/lib/convertToBold'
import DarkModeToggle from '@/components/DarkModeToggle'
import TextInput from '@/components/TextInput'
import OutputBox from '@/components/OutputBox'
import TextStats from '@/components/TextStats'

export default function Home() {
  const [inputText, setInputText] = useState('')
  const [boldText, setBoldText] = useState('')

  // Convert text to bold in real-time
  useEffect(() => {
    setBoldText(convertToBold(inputText))
  }, [inputText])

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                <Type className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Bold Text Converter
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 hidden sm:block">
                  Convert regular text to bold Unicode characters
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <a
                href="https://github.com/UsmanGhias/bold-text"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                aria-label="View source on GitHub"
              >
                <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </a>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Make Your Text <span className="text-primary-600 dark:text-primary-400">𝐁𝐨𝐥𝐝</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Transform your regular text into bold Unicode characters instantly. Perfect for social media, 
              documents, and anywhere you want your text to stand out.
            </p>
          </div>

          {/* Converter Interface */}
          <div className="card p-6 sm:p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-4">
                <TextInput
                  value={inputText}
                  onChange={handleInputChange}
                  maxLength={1000}
                  placeholder="Type or paste your text here and watch it transform instantly..."
                />
                
                {/* Example text button */}
                {!inputText && (
                  <button
                    onClick={() => setInputText('Hello World! Transform your text to BOLD Unicode characters instantly. 123 ABC xyz')}
                    className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    📝 Try example text
                  </button>
                )}
              </div>

              {/* Output Section */}
              <div className="space-y-4">
                <OutputBox boldText={boldText} originalText={inputText} />
              </div>
            </div>

            {/* Text Statistics */}
            {inputText && (
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <TextStats text={inputText} />
              </div>
            )}
          </div>

          {/* Features Section */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Instant Conversion</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Real-time conversion as you type. No waiting, no delays.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Mobile Friendly</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Works perfectly on all devices and screen sizes.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Privacy First</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                All conversion happens locally. Your text never leaves your device.
              </p>
            </div>
          </div>

          {/* How it Works */}
          <div className="card p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How it Works</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                This tool converts regular text characters into their <strong>Mathematical Bold Unicode</strong> equivalents. 
                Unlike CSS bold styling, these are actual Unicode characters that will appear bold anywhere they're used.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Supported Characters:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Uppercase letters (A-Z) → 𝐀-𝐙</li>
                    <li>• Lowercase letters (a-z) → 𝐚-𝐳</li>
                    <li>• Numbers (0-9) → 𝟎-𝟗</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Use Cases:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Social media posts</li>
                    <li>• Email signatures</li>
                    <li>• Documents and presentations</li>
                    <li>• Profile names and bios</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>and Next.js</span>
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
              <span>Bold Text Converter © 2024</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}