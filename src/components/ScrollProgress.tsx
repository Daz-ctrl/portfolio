import { useState, useEffect, useCallback } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

/**
 * A thin progress bar fixed to the top of the viewport that fills
 * based on scroll position.
 */
export default function ScrollProgress(): JSX.Element {
  const [progress, setProgress] = useState(0)
  const reducedMotion = useReducedMotion()

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const ratio = docHeight > 0 ? scrollTop / docHeight : 0
    setProgress(Math.min(1, Math.max(0, ratio)))
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-accent-500 to-accent-300"
        style={{
          width: `${progress * 100}%`,
          transition: reducedMotion ? 'none' : 'width 0.1s linear',
        }}
      />
    </div>
  )
}
