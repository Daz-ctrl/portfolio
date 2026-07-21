import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { personalDetails } from './data/profile'
import { useReducedMotion } from './hooks/useReducedMotion'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import CertificationsSection from './components/CertificationsSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface NavLink {
  label: string
  href: string
}

const NAV_LINKS: NavLink[] = [
  { label: 'Hero', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

// ---------------------------------------------------------------------------
// MobileMenu
// ---------------------------------------------------------------------------

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-md md:hidden"
        >
          <nav className="flex h-full flex-col items-center justify-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
                className="text-2xl font-medium text-zinc-400 transition-colors hover:text-accent-400"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ---------------------------------------------------------------------------
// Navbar
// ---------------------------------------------------------------------------

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass border-b border-zinc-800/50 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          {/* Logo / name */}
          <a
            href="#hero"
            className="text-lg font-bold tracking-tight text-zinc-100 transition-colors hover:text-accent-400"
          >
            {personalDetails.name}
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-800/50 hover:text-zinc-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="rounded-lg p-2 text-zinc-400 transition-colors hover:text-zinc-100 md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}

// ---------------------------------------------------------------------------
// Section wrapper
// ---------------------------------------------------------------------------

function Section({
  id,
  children,
  className = '',
}: {
  id: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={`relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 ${className}`}
    >
      <div className="mx-auto max-w-4xl">{children}</div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// App
// ---------------------------------------------------------------------------

function App() {
  const reducedMotion = useReducedMotion()

  return (
    <MotionConfig reducedMotion={reducedMotion ? 'always' : 'never'}>
      <div className="relative min-h-screen bg-zinc-950 text-zinc-100">
        <ScrollProgress />
        <ScrollToTop />

        {/* Gradient mesh background */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          {/* Top-right warm glow */}
          <div className="absolute -top-20 right-0 h-[600px] w-[600px] rounded-full bg-accent-500/5 blur-[150px]" />
          {/* Bottom-left cool glow */}
          <div className="absolute -bottom-20 left-0 h-[500px] w-[500px] rounded-full bg-violet-500/5 blur-[150px]" />
          {/* Center subtle mesh */}
          <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/[0.02] blur-[200px]" />
        </div>

        <Navbar />

        {/* ----------------------------------------------------------------- */}
        {/* Hero */}
        {/* ----------------------------------------------------------------- */}
        <Hero personalDetails={personalDetails} />

        {/* ----------------------------------------------------------------- */}
        {/* About */}
        {/* ----------------------------------------------------------------- */}
        <Section id="about">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            About
          </motion.h2>
          <AboutSection summary={personalDetails.summary} />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-zinc-500"
          >
            {personalDetails.location}
          </motion.p>
        </Section>

        {/* ----------------------------------------------------------------- */}
        {/* Education */}
        {/* ----------------------------------------------------------------- */}
        <Section id="education">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Education
          </motion.h2>
          <EducationSection />
        </Section>

        {/* ----------------------------------------------------------------- */}
        {/* Experience */}
        {/* ----------------------------------------------------------------- */}
        <Section id="experience">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Experience
          </motion.h2>
          <ExperienceSection />
        </Section>

        {/* ----------------------------------------------------------------- */}
        {/* Projects */}
        {/* ----------------------------------------------------------------- */}
        <Section id="projects">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Projects
          </motion.h2>
          <ProjectsSection />
        </Section>

        {/* ----------------------------------------------------------------- */}
        {/* Certifications */}
        {/* ----------------------------------------------------------------- */}
        <Section id="certifications">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Certifications
          </motion.h2>
          <CertificationsSection />
        </Section>

        {/* ----------------------------------------------------------------- */}
        {/* Skills */}
        {/* ----------------------------------------------------------------- */}
        <Section id="skills">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Skills
          </motion.h2>
          <SkillsSection />
        </Section>

        {/* ----------------------------------------------------------------- */}
        {/* Contact */}
        {/* ----------------------------------------------------------------- */}
        <Section id="contact" className="pb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Contact
          </motion.h2>
          <ContactSection />
        </Section>

        {/* Footer */}
        <footer className="border-t border-zinc-800/50 py-8 text-center text-sm text-zinc-600">
          <p>© {new Date().getFullYear()} {personalDetails.name}. All rights reserved.</p>
        </footer>
      </div>
    </MotionConfig>
  )
}

export default App
