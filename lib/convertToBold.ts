/**
 * Unicode Bold Text Converter
 * Converts regular text to Mathematical Bold Unicode characters
 */

// Unicode mapping for Mathematical Bold characters
const BOLD_MAP: { [key: string]: string } = {
  // Uppercase letters (𝐀-𝐙)
  'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉',
  'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓',
  'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙',
  
  // Lowercase letters (𝐚-𝐳)
  'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣',
  'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭',
  'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳',
  
  // Numbers (𝟎-𝟗)
  '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗'
};

/**
 * Converts regular text to bold Unicode text
 * @param text - The input text to convert
 * @returns The converted bold Unicode text
 */
export function convertToBold(text: string): string {
  if (!text) return '';
  
  return text
    .split('')
    .map(char => BOLD_MAP[char] || char)
    .join('');
}

/**
 * Checks if a character can be converted to bold
 * @param char - The character to check
 * @returns True if the character can be converted
 */
export function isBoldable(char: string): boolean {
  return char in BOLD_MAP;
}

/**
 * Gets statistics about the text conversion
 * @param text - The input text
 * @returns Statistics object with character counts
 */
export function getTextStats(text: string) {
  const totalChars = text.length;
  const boldableChars = text.split('').filter(char => isBoldable(char)).length;
  const nonBoldableChars = totalChars - boldableChars;
  
  return {
    totalChars,
    boldableChars,
    nonBoldableChars,
    boldablePercentage: totalChars > 0 ? Math.round((boldableChars / totalChars) * 100) : 0
  };
}