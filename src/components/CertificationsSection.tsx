import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data/profile'
import type { Certification } from '../data/profile'

// ---------------------------------------------------------------------------
// Stagger config
// ---------------------------------------------------------------------------
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

// ---------------------------------------------------------------------------
// Issuer accent tones — subtle color coding per organization
// ---------------------------------------------------------------------------
type IssuerTone = {
  badge: string
  icon: string
  bar: string
}

function getIssuerTone(issuer: string): IssuerTone {
  switch (issuer) {
    case 'Oracle':
      return {
        badge: 'bg-amber-500/10 text-amber-400 ring-amber-500/20',
        icon: 'text-amber-400',
        bar: 'from-amber-500 to-amber-300',
      }
    case 'Cisco':
      return {
        badge: 'bg-sky-500/10 text-sky-400 ring-sky-500/20',
        icon: 'text-sky-400',
        bar: 'from-sky-500 to-sky-300',
      }
    case 'Microsoft':
      return {
        badge: 'bg-blue-500/10 text-blue-400 ring-blue-500/20',
        icon: 'text-blue-400',
        bar: 'from-blue-500 to-blue-300',
      }
    case 'IIT Bombay':
      return {
        badge: 'bg-rose-500/10 text-rose-400 ring-rose-500/20',
        icon: 'text-rose-400',
        bar: 'from-rose-500 to-rose-300',
      }
    case 'Anthropic':
      return {
        badge: 'bg-violet-500/10 text-violet-400 ring-violet-500/20',
        icon: 'text-violet-400',
        bar: 'from-violet-500 to-violet-300',
      }
    default:
      return {
        badge: 'bg-accent-500/10 text-accent-400 ring-accent-500/20',
        icon: 'text-accent-400',
        bar: 'from-accent-500 to-accent-300',
      }
  }
}

// ---------------------------------------------------------------------------
// CertCard
// ---------------------------------------------------------------------------
function CertCard({
  cert,
  index,
}: {
  cert: Certification
  index: number
}) {
  const tone = getIssuerTone(cert.issuer)

  return (
    <motion.div
      variants={cardItem}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group glass relative overflow-hidden rounded-xl p-4 transition-all duration-300 hover:border-accent-500/30 hover:glow-border sm:p-5"
    >
      {/* Top accent bar */}
      <div
        className={`absolute left-0 top-0 h-1 w-0 rounded-r-full bg-gradient-to-r ${tone.bar} transition-all duration-500 group-hover:w-8`}
      />

      {/* Icon + title */}
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 ring-1 ring-accent-500/20 transition-colors group-hover:bg-accent-500/20">
          <Award size={18} className={`transition-colors ${tone.icon}`} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold leading-snug text-zinc-100 transition-colors group-hover:text-accent-400 break-words">
            {cert.name}
          </h3>
        </div>
      </div>

      {/* Footer: issuer badge + index */}
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ${tone.badge}`}
        >
          {cert.issuer}
        </span>
        <span className="font-mono text-xs text-zinc-600">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// CertificationsSection
// ---------------------------------------------------------------------------
export default function CertificationsSection(): JSX.Element {
  if (certifications.length === 0) {
    return (
      <p className="text-center text-zinc-500">No certifications listed yet.</p>
    )
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {certifications.map((cert, i) => (
        <CertCard
          key={`${cert.name}-${i}`}
          cert={cert}
          index={i}
        />
      ))}
    </motion.div>
  )
}