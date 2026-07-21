import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useReducedMotion } from '../hooks/useReducedMotion'

const SCROLL_THRESHOLD = 300

/**
 * A floating button that appears after scrolling down.
 * On click it smoothly scrolls back to the top of the page.
 * The arrow icon rolls (rotates 360°) on hover for a playful effect.
 */
export default function ScrollToTop(): JSX.Element {
  const [visible, setVisible] = useState(false)
  const reducedMotion = useReducedMotion()

  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > SCROLL_THRESHOLD)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="group fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full glass glass-hover text-accent-400 transition-shadow hover:glow-border focus-visible:outline-accent-400"
        >
          <ArrowUp
            size={20}
            className="transition-transform duration-500 ease-out group-hover:rotate-[360deg]"
            style={{ transition: reducedMotion ? 'none' : undefined }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}