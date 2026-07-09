export function calculateReadingTime(text: string, wordsPerMinute = 225): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / wordsPerMinute))
}
