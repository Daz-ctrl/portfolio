import { useState, useEffect } from 'react'

/**
 * Detects the user's prefers-reduced-motion preference.
 * Returns true if the user has requested reduced motion.
 */
export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setReducedMotion(e.matches)
    }

    // Modern API
    if (mql.addEventListener) {
      mql.addEventListener('change', handler)
      return () => mql.removeEventListener('change', handler)
    }

    // Legacy API fallback
    mql.addListener(handler)
    return () => mql.removeListener(handler)
  }, [])

  return reducedMotion
}
