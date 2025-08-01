'use client'

import { useState, useEffect } from 'react'
import { Type, Github, Heart, ExternalLink, MessageCircle } from 'lucide-react'
import { convertToStyle, TextStyle } from '@/lib/convertToBold'
import DarkModeToggle from '@/components/DarkModeToggle'
import TextInput from '@/components/TextInput'
import Image from 'next/image'

export default function Home() {
  const [inputText, setInputText] = useState('')

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

  const styles = ['bold', 'boldSans', 'boldItalic', 'boldItalicSans', 'doubleStruck', 'fraktur', 'script', 'monospace'] as TextStyle[]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/boldtext.png" alt="BoldText Logo" width={40} height={40} className="rounded-full" />
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  BoldText Converter
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 hidden sm:block">
                  Convert text to 8 Unicode styles instantly
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
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
              Instagram, and all social media platforms.
            </p>
          </div>

          {/* Input Section */}
          <div className="card p-6 sm:p-8">
            <TextInput
              value={inputText}
              onChange={handleInputChange}
              maxLength={1000}
              placeholder="Type or paste your text here and see all 8 styles instantly..."
            />
            
            {!inputText && (
              <button
                onClick={() => setInputText('Hello World! Transform your text to STYLISH Unicode characters instantly. 123 ABC xyz')}
                className="mt-4 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                Try example text
              </button>
            )}
          </div>

          {/* All Styles Output */}
          {inputText && (
            <div className="card p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">All 8 Text Styles</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {styles.map((style) => (
                  <div key={style} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 capitalize">
                      {style.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <div className="text-lg font-mono mb-3 min-h-[2.5rem]">
                      {convertToStyle(inputText, style)}
                    </div>
                    <button
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(convertToStyle(inputText, style))
                        } catch (err) {
                          console.error('Failed to copy text:', err)
                        }
                      }}
                      className="w-full px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm"
                    >
                      Copy
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

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
          <div className="text-center space-y-6">
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
            
            {/* Social Links */}
            <div className="flex items-center justify-center space-x-6 text-sm">
              <a 
                href="https://github.com/usmanghias" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/m-usmanghias" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://wa.me/923126912440" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
            
            <div className="text-xs text-gray-400 dark:text-gray-500 max-w-2xl mx-auto">
              Senior Full Stack Developer | MERN Stack Expert | Odoo Developer | MSSE @Quantic | CEO @CODCrafters
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}