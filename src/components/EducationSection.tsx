import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/profile'

// ---------------------------------------------------------------------------
// Timeline item reveal
// ---------------------------------------------------------------------------
const timelineItem = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

// ---------------------------------------------------------------------------
// EducationSection
// ---------------------------------------------------------------------------
export default function EducationSection(): JSX.Element {
  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-zinc-800" />

      <div className="space-y-10">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            variants={timelineItem}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="relative flex gap-4 sm:gap-6"
          >
            {/* Timeline dot */}
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-800 ring-4 ring-zinc-950">
              <GraduationCap size={16} className="text-accent-400" />
            </div>

            {/* Content card */}
            <div className="glass rounded-xl p-4 flex-1 min-w-0 sm:p-5">
              <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-semibold break-words sm:text-lg">{edu.degree}</h3>
                <span className="text-sm text-zinc-500">{edu.duration}</span>
              </div>
              <p className="text-accent-400 break-words">{edu.institution}</p>
              {edu.score && (
                <p className="mt-2 text-sm text-zinc-500">{edu.score}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}