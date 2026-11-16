import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, profile } from '../data/content'
import { GitHubIcon } from './GitHubIcon'
import { LinkedInIcon } from './LinkedInIcon'
import { ThemeToggle } from './ThemeToggle'

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.2, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors duration-300 ${
        scrolled || menuOpen ? 'border-line-soft bg-paper' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-5 md:h-20 md:px-10 xl:pr-16">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center bg-ink text-[11px] font-bold tracking-tight text-paper transition-colors duration-300 group-hover:bg-transparent group-hover:text-ink group-hover:shadow-[inset_0_0_0_1px_var(--ink)]">
            AM
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-[11px] uppercase tracking-[0.2em]">{profile.name}</span>
            <span className="block text-[10px] text-muted">{profile.discipline}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = active === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`link-underline flex items-baseline gap-1.5 text-[11px] uppercase tracking-[0.16em] transition-colors ${
                  isActive ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                <span className="text-[9px] text-muted">{item.index}</span>
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.cv}
            download
            className="hidden h-10 items-center gap-2 border border-ink px-4 text-[10px] uppercase tracking-[0.18em] transition-colors duration-300 hover:bg-ink hover:text-paper sm:flex"
          >
            Download CV
            <Download className="size-3.5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="grid size-10 place-items-center border border-line-soft transition-colors hover:border-ink xl:hidden"
          >
            {menuOpen ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between overflow-y-auto border-t border-line-soft bg-paper px-5 pt-8 pb-10 xl:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className="group flex items-center justify-between border-b border-line-soft py-4"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-[10px] text-muted">{item.index}</span>
                    <span className="display text-4xl transition-colors group-hover:text-muted">
                      {item.label}
                    </span>
                  </span>
                  <span aria-hidden="true" className="text-muted">
                    ↗
                  </span>
                </a>
              ))}
            </nav>

            <div className="mt-10 space-y-6">
              <a
                href={profile.cv}
                download
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 bg-ink px-4 py-3.5 text-[11px] uppercase tracking-[0.18em] text-paper"
              >
                Download CV
                <Download className="size-3.5" aria-hidden="true" />
              </a>

              <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] uppercase tracking-[0.14em] text-muted">
                <a href={`mailto:${profile.email}`} className="link-underline">
                  {profile.email}
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline flex items-center gap-2"
                >
                  <GitHubIcon className="size-3.5" />
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline flex items-center gap-2"
                >
                  <LinkedInIcon className="size-3.5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
