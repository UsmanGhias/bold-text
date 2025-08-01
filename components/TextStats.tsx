'use client'

import { getTextStats } from '@/lib/convertToBold'

interface TextStatsProps {
  text: string
}

export default function TextStats({ text }: TextStatsProps) {
  const stats = getTextStats(text)
  
  if (!text) return null

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 space-y-2 fade-in">
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Text Statistics</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
        <div className="text-center">
          <div className="text-lg font-semibold text-primary-600 dark:text-primary-400">
            {stats.totalChars}
          </div>
          <div className="text-gray-600 dark:text-gray-400">Total</div>
        </div>
        
        <div className="text-center">
          <div className="text-lg font-semibold text-green-600 dark:text-green-400">
            {stats.boldableChars}
          </div>
          <div className="text-gray-600 dark:text-gray-400">Boldable</div>
        </div>
        
        <div className="text-center">
          <div className="text-lg font-semibold text-gray-600 dark:text-gray-400">
            {stats.nonBoldableChars}
          </div>
          <div className="text-gray-600 dark:text-gray-400">Unchanged</div>
        </div>
        
        <div className="text-center">
          <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">
            {stats.boldablePercentage}%
          </div>
          <div className="text-gray-600 dark:text-gray-400">Converted</div>
        </div>
      </div>
      
      {stats.boldablePercentage < 50 && stats.totalChars > 0 && (
        <div className="text-xs text-amber-600 dark:text-amber-400 mt-2">
          💡 Tip: Only letters (A-Z, a-z) and numbers (0-9) can be converted to bold Unicode
        </div>
      )}
    </div>
  )
}