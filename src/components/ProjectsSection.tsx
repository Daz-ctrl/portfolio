import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { projects } from '../data/profile'
import type { Project } from '../data/profile'

// ---------------------------------------------------------------------------
// Stagger config
// ---------------------------------------------------------------------------
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

// ---------------------------------------------------------------------------
// ProjectCard
// ---------------------------------------------------------------------------
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={cardItem}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group glass rounded-xl p-4 transition-all duration-300 hover:glow-border hover:border-accent-500/30 sm:p-6"
    >
      {/* Project name */}
      <h3 className="mb-2 text-base font-semibold text-zinc-100 transition-colors group-hover:text-accent-400 break-words sm:text-lg">
        {project.name}
      </h3>

      {/* Summary */}
      <p className="mb-4 text-sm leading-relaxed text-zinc-400 break-words">
        {project.summary}
      </p>

      {/* Tech stack tags */}
      {project.tech && (
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.split(',').map((t) => (
            <span
              key={t.trim()}
              className="rounded-full bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-400 transition-colors group-hover:bg-accent-500/20"
            >
              {t.trim()}
            </span>
          ))}
        </div>
      )}

      {/* GitHub link */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-accent-400"
        >
          <Github size={16} />
          <span>View on GitHub</span>
        </a>
      )}
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// ProjectsSection
// ---------------------------------------------------------------------------
export default function ProjectsSection(): JSX.Element {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </motion.div>
  )
}