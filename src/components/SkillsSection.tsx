import { motion } from 'framer-motion'
import { skills } from '../data/profile'
import type { SkillCategory } from '../data/profile'

// ---------------------------------------------------------------------------
// Stagger config for categories
// ---------------------------------------------------------------------------
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const categoryItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

// ---------------------------------------------------------------------------
// Stagger config for tag cloud inside each category
// ---------------------------------------------------------------------------
const tagContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
}

const tagItem = {
  hidden: { opacity: 0, scale: 0.7, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

// ---------------------------------------------------------------------------
// SkillCategoryCard
// ---------------------------------------------------------------------------
function SkillCategoryCard({
  category,
}: {
  category: SkillCategory
}) {
  return (
    <motion.div
      variants={categoryItem}
      className="glass rounded-xl p-4 transition-all duration-300 hover:border-accent-500/20 hover:glow-border sm:p-6"
    >
      {/* Category header */}
      <h3 className="mb-5 text-lg font-semibold text-accent-400">
        {category.category}
      </h3>

      {/* Animated tag cloud */}
      <motion.div
        variants={tagContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="flex flex-wrap gap-2"
      >
        {category.items.map((skill) => (
          <motion.span
            key={skill}
            variants={tagItem}
            whileHover={{
              scale: 1.1,
              backgroundColor: 'rgba(6, 182, 212, 0.25)',
              color: '#22d3ee',
              transition: { type: 'spring', stiffness: 400, damping: 15 },
            }}
            className="cursor-default rounded-full bg-accent-500/10 px-3 py-1.5 text-sm font-medium text-accent-400 transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// SkillsSection
// ---------------------------------------------------------------------------
export default function SkillsSection(): JSX.Element {
  if (skills.length === 0) {
    return (
      <p className="text-center text-zinc-500">No skills listed yet.</p>
    )
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {skills.map((cat) => (
        <SkillCategoryCard key={cat.category} category={cat} />
      ))}
    </motion.div>
  )
}