'use client'

import { useState, useEffect } from 'react'
import { Github, ExternalLink, MessageCircle, Copy, Check } from 'lucide-react'
import { convertToStyle, TextStyle } from '@/lib/convertToBold'
import DarkModeToggle from '@/components/DarkModeToggle'
import TextInput from '@/components/TextInput'

export default function Home() {
  const [inputText, setInputText] = useState('')
  const [copiedStyle, setCopiedStyle] = useState<string | null>(null)

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

  const handleCopy = async (text: string, style: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedStyle(style)
      setTimeout(() => setCopiedStyle(null), 2000)
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  const styles = [
    'bold', 'boldSans', 'boldItalic', 'boldItalicSans', 'doubleStruck', 'fraktur', 'script', 'monospace',
    'boldSerif', 'italic', 'sansSerif', 'scriptBold', 'doubleStruckBold', 'frakturBold'
  ] as TextStyle[]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  BoldText Converter
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 hidden sm:block">
                  Convert text to 14 Unicode styles instantly
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Social Links */}
              <div className="hidden sm:flex items-center space-x-4 text-sm">
                <a 
                  href="https://github.com/usmanghias" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/m-usmanghias" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://wa.me/923126912440" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-6">
          {/* Input Section */}
          <div className="card p-6">
            <TextInput
              value={inputText}
              onChange={handleInputChange}
              maxLength={1000}
              placeholder="Add text here, then scroll down ↓"
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
            <div className="space-y-3">
              {styles.map((style) => (
                <div key={style} className="card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white capitalize text-sm">
                      {style.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <button
                      onClick={() => handleCopy(convertToStyle(inputText, style), style)}
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      title="Copy to clipboard"
                    >
                      {copiedStyle === style ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <div className="text-base font-mono bg-gray-50 dark:bg-gray-800 p-3 rounded-lg break-all min-h-[2.5rem]">
                    {convertToStyle(inputText, style)}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* How it Works */}
          <div className="card p-6">
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
      <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 mt-12">
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
            
            <div className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Senior Full Stack Developer | MERN Stack Expert | Odoo Developer | MSSE @Quantic
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}