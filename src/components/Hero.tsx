import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import type { PersonalDetails } from '../data/profile'

// ---------------------------------------------------------------------------
// Stagger config — each child staggers by this amount
// ---------------------------------------------------------------------------
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------
export default function Hero({ personalDetails }: { personalDetails: PersonalDetails }) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-4 sm:px-6"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Greeting */}
          <motion.p
            variants={item}
            className="mb-4 font-mono text-sm text-accent-400"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1 variants={item} className="mb-4 text-4xl font-bold tracking-tight break-words sm:text-5xl md:text-7xl">
            {personalDetails.name}
          </motion.h1>

          {/* Headline with gradient text */}
          <motion.p
            variants={item}
            className="text-gradient mb-2 text-lg font-semibold break-words sm:text-xl md:text-2xl"
          >
            {personalDetails.headline}
          </motion.p>

          {/* Highlights tag cloud */}
          <motion.div
            variants={item}
            className="mx-auto mb-8 flex max-w-xl flex-wrap justify-center gap-2"
          >
            {personalDetails.highlights.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{
                  scale: 1.08,
                  backgroundColor: 'rgba(6, 182, 212, 0.2)',
                  color: '#22d3ee',
                  transition: { type: 'spring', stiffness: 400, damping: 15 },
                }}
                className="cursor-default rounded-full bg-accent-500/10 px-3 py-1.5 text-sm font-medium text-accent-400 transition-colors"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center justify-center gap-4">
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="glass glass-hover rounded-full p-3 text-zinc-400 transition-colors hover:text-accent-400"
            >
              <Github size={20} />
            </a>
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass glass-hover rounded-full p-3 text-zinc-400 transition-colors hover:text-accent-400"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalDetails.email}`}
              aria-label="Email"
              className="glass glass-hover rounded-full p-3 text-zinc-400 transition-colors hover:text-accent-400"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}