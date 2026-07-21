import { motion } from 'framer-motion'

// ---------------------------------------------------------------------------
// AboutSection
// ---------------------------------------------------------------------------
export default function AboutSection({ summary }: { summary: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="space-y-4 text-base leading-relaxed text-zinc-400 break-words sm:text-lg"
    >
      <p>{summary}</p>
    </motion.div>
  )
}