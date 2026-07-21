import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'
import { personalDetails } from '../data/profile'

// ---------------------------------------------------------------------------
// Stagger config
// ---------------------------------------------------------------------------
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

// ---------------------------------------------------------------------------
// ContactSection
// ---------------------------------------------------------------------------
export default function ContactSection(): JSX.Element {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
    >
      {/* LinkedIn */}
      <motion.a
        variants={item}
        href={personalDetails.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.98 }}
className="group glass flex w-full items-center justify-center gap-3 rounded-xl px-6 py-3 font-medium text-zinc-200 transition-all duration-300 hover:border-accent-500/30 hover:shadow-[0_0_25px_rgba(13,148,136,0.15)] sm:w-auto sm:px-8 sm:py-4"
      >
        <Linkedin size={20} className="text-accent-400 transition-transform group-hover:scale-110" />
        Connect via LinkedIn
      </motion.a>

      {/* Gmail */}
      <motion.div
        variants={item}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalDetails.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group glass flex w-full items-center justify-center gap-3 rounded-xl px-6 py-3 font-medium text-zinc-200 transition-all duration-300 hover:border-accent-500/30 hover:shadow-[0_0_25px_rgba(13,148,136,0.15)] sm:w-auto sm:px-8 sm:py-4"
        >
          <Mail size={20} className="text-accent-400 transition-transform group-hover:scale-110" />
          Connect via Gmail
        </a>
      </motion.div>
    </motion.div>
  )
}