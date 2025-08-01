'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface OutputBoxProps {
  boldText: string
  originalText: string
}

export default function OutputBox({ boldText, originalText }: OutputBoxProps) {
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)

  const handleCopy = async () => {
    if (!boldText.trim()) return

    try {
      await navigator.clipboard.writeText(boldText)
      setCopied(true)
      setCopyError(false)
      
      // Reset the copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text:', err)
      setCopyError(true)
      
      // Fallback for older browsers
      try {
        const textArea = document.createElement('textarea')
        textArea.value = boldText
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        
        setCopied(true)
        setCopyError(false)
        setTimeout(() => setCopied(false), 2000)
      } catch (fallbackErr) {
        console.error('Fallback copy also failed:', fallbackErr)
        setTimeout(() => setCopyError(false), 3000)
      }
    }
  }

  const isEmpty = !originalText.trim()
  const hasConvertibleText = boldText !== originalText

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label htmlFor="output-text" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Bold Unicode Output
        </label>
        
        <button
          onClick={handleCopy}
          disabled={isEmpty}
          className={`
            flex items-center space-x-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200
            ${isEmpty 
              ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed' 
              : copied 
                ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' 
                : copyError
                  ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                  : 'btn-primary hover:scale-105'
            }
          `}
          aria-label={copied ? 'Text copied!' : 'Copy bold text'}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              <span>Copied!</span>
            </>
          ) : copyError ? (
            <span>Copy failed</span>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      
      <div
        id="output-text"
        className={`output-box ${isEmpty ? 'text-gray-400 dark:text-gray-600' : ''}`}
        role="textbox"
        aria-readonly="true"
        aria-label="Bold text output"
      >
        {isEmpty ? (
          <span className="italic">Your bold text will appear here...</span>
        ) : (
          boldText
        )}
      </div>
      
      {!isEmpty && hasConvertibleText && (
        <div className="text-xs text-gray-500 dark:text-gray-400 fade-in">
          ✨ Text successfully converted to bold Unicode characters
        </div>
      )}
      
      {!isEmpty && !hasConvertibleText && (
        <div className="text-xs text-amber-600 dark:text-amber-400 fade-in">
          ⚠️ No convertible characters found (only A-Z, a-z, 0-9 can be made bold)
        </div>
      )}
    </div>
  )
}