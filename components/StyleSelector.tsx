'use client'

import { useState } from 'react'
import { ChevronDown, Type } from 'lucide-react'
import { TextStyle, getAvailableStyles } from '@/lib/convertToBold'

interface StyleSelectorProps {
  selectedStyle: TextStyle
  onStyleChange: (style: TextStyle) => void
}

export default function StyleSelector({ selectedStyle, onStyleChange }: StyleSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const styles = getAvailableStyles()
  const currentStyle = styles.find(s => s.value === selectedStyle)

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Text Style
      </label>
      
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:border-primary-500 dark:hover:border-primary-400 transition-colors"
        >
          <div className="flex items-center space-x-2">
            <Type className="h-4 w-4 text-primary-600 dark:text-primary-400" />
            <span className="font-medium">{currentStyle?.label}</span>
          </div>
          <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {styles.map((style) => (
              <button
                key={style.value}
                onClick={() => {
                  onStyleChange(style.value)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                  selectedStyle === style.value ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300' : ''
                }`}
              >
                <div className="font-medium">{style.label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{style.description}</div>
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Click outside to close */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
} 