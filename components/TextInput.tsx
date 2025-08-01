'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface TextInputProps {
  value: string
  onChange: (value: string) => void
  maxLength?: number
  placeholder?: string
}

export default function TextInput({ 
  value, 
  onChange, 
  maxLength = 1000, 
  placeholder = "Type or paste your text here..." 
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  const handleClear = () => {
    onChange('')
  }

  const remainingChars = maxLength - value.length

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label htmlFor="text-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Input Text
        </label>
        <div className="flex items-center space-x-2">
          <span className={`text-xs ${remainingChars < 50 ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}>
            {value.length} / {maxLength}
          </span>
          {value && (
            <button
              onClick={handleClear}
              className="p-1 rounded text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Clear text"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
      
      <div className="relative">
        <textarea
          id="text-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          maxLength={maxLength}
          rows={6}
          className={`input-field ${isFocused ? 'ring-2 ring-primary-500' : ''}`}
        />
        
        {/* Focus indicator */}
        {isFocused && (
          <div className="absolute inset-0 rounded-lg ring-2 ring-primary-500 pointer-events-none" />
        )}
      </div>
      
      {/* Character warning */}
      {remainingChars < 50 && (
        <p className="text-xs text-red-500 fade-in">
          {remainingChars === 0 ? 'Character limit reached' : `${remainingChars} characters remaining`}
        </p>
      )}
    </div>
  )
}