import { ArrowUp } from 'lucide-react'
import { navItems, profile } from '../data/content'
import { GitHubIcon } from './GitHubIcon'
import { Marquee } from './Marquee'
import { ThemeToggle } from './ThemeToggle'

export function Footer() {
  return (
    <footer className="relative overflow-hidden xl:pr-16">
      <div className="border-b border-line-soft py-6">
        <Marquee duration={46} reverse>
          {['AAYAN MUMTAZ', 'FULL-STACK', 'SYSTEMS', 'LAHORE, PK'].map((word, index) => (
            <span key={word} className="flex items-center">
              <span
                className={`display px-8 text-[clamp(2rem,5vw,3.75rem)] ${
                  index % 2 === 1 ? 'text-outline' : ''
                }`}
              >
                {word}
              </span>
              <span className="text-line" aria-hidden="true">
                —
              </span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-5 py-10 md:px-10 md:py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <p className="text-[11px] uppercase tracking-[0.2em]">{profile.name}</p>
            <p className="mt-3 text-[12px] leading-relaxed text-muted">
              Full-stack & systems engineer. Interfaces up top, allocators and sockets underneath.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="grid size-9 place-items-center border border-line-soft transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                <GitHubIcon className="size-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send an email"
                className="grid size-9 place-items-center border border-line-soft transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                <span aria-hidden="true" className="text-[11px]">
                  @
                </span>
              </a>
              <ThemeToggle />
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="link-underline w-fit text-[10px] uppercase tracking-[0.18em] text-muted hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line-soft pt-5 text-[9px] uppercase tracking-[0.14em] text-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 {profile.name} — built with React, TypeScript, Three.js & Tailwind.</p>
          <a href="#top" className="link-underline flex w-fit items-center gap-2 hover:text-ink">
            Back to top
            <ArrowUp className="size-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
