import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Download, MapPin } from 'lucide-react'
import { lazy, Suspense } from 'react'
import { useFinePointer } from '../hooks/useFinePointer'
import { marqueeStack, profile } from '../data/content'
import { GitHubIcon } from './GitHubIcon'
import { Marquee } from './Marquee'
import { SceneBoundary } from './SceneBoundary'

const Scene = lazy(() => import('./Scene').then((module) => ({ default: module.Scene })))

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

function ScenePlaceholder() {
  return (
    <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
      <div className="relative aspect-square w-[68%] max-w-[380px]">
        {[0, 12, 24, 36].map((inset) => (
          <div
            key={inset}
            className="absolute rounded-full border border-line-soft"
            style={{ inset: `${inset}%` }}
          />
        ))}
        <div className="absolute inset-[44%] border border-line" />
      </div>
    </div>
  )
}

export function Hero() {
  const reduceMotion = useReducedMotion()
  const finePointer = useFinePointer()

  const fade = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  })

  return (
    <section id="top" className="relative flex flex-col overflow-hidden border-b border-line-soft lg:h-svh">
      <div className="blueprint pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-5 md:px-10">
        <div className="grid flex-1 gap-8 pt-28 pb-8 md:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-4 lg:pt-24 lg:pb-4">
          <div className="relative z-10">
            <motion.div
              {...fade(0.05)}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.22em] text-muted"
            >
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-ink blink" aria-hidden="true" />
                Portfolio — 2026
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="size-3" aria-hidden="true" />
                {profile.location}
              </span>
            </motion.div>

            <h1 className="display mt-6 text-[clamp(3.7rem,12vw,9.5rem)]">
              <motion.span {...fade(0.12)} className="block">
                {profile.firstName}
              </motion.span>
              <motion.span {...fade(0.2)} className="text-outline block">
                {profile.lastName}
              </motion.span>
            </h1>

            <motion.p
              {...fade(0.28)}
              className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] uppercase tracking-[0.24em] text-muted"
            >
              <span>Full-stack engineer</span>
              <span className="text-line" aria-hidden="true">
                /
              </span>
              <span>Systems programmer</span>
            </motion.p>

            <motion.p
              {...fade(0.36)}
              className="mt-6 max-w-[48ch] text-[14px] leading-relaxed text-muted md:text-[15px]"
            >
              I build the interface and the machinery underneath it — React and React Native for
              products people touch, C and sockets for when the abstraction needs to move out of the
              way.
            </motion.p>

            <motion.div {...fade(0.44)} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-[10px] uppercase tracking-[0.2em] text-paper transition-opacity duration-300 hover:opacity-85"
              >
                See the work
                <ArrowDown className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
              </a>
              <a
                href={profile.cv}
                download
                className="inline-flex items-center gap-3 border border-ink px-6 py-3.5 text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-ink hover:text-paper"
              >
                Download CV
                <Download className="size-3.5" aria-hidden="true" />
              </a>
            </motion.div>

            <motion.div {...fade(0.52)} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="link-underline flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-muted hover:text-ink"
              >
                <GitHubIcon className="size-3.5" />
                @{profile.githubHandle}
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="link-underline text-[10px] uppercase tracking-[0.16em] text-muted hover:text-ink"
              >
                {profile.email}
              </a>
              <span className="text-[10px] uppercase tracking-[0.16em] text-muted">
                {profile.availability}
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease: EASE }}
            className="relative h-[46vh] min-h-[320px] w-full sm:h-[52vh] lg:h-[70vh] lg:min-h-[480px]"
          >
            {finePointer ? (
              <SceneBoundary fallback={<ScenePlaceholder />}>
                <Suspense fallback={<ScenePlaceholder />}>
                  <Scene />
                </Suspense>
              </SceneBoundary>
            ) : (
              <ScenePlaceholder />
            )}

            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <span className="absolute top-0 left-0 size-3 border-t border-l border-line" />
              <span className="absolute top-0 right-0 size-3 border-t border-r border-line" />
              <span className="absolute bottom-0 left-0 size-3 border-b border-l border-line" />
              <span className="absolute right-0 bottom-0 size-3 border-r border-b border-line" />
              <span className="absolute top-0 left-6 text-[9px] uppercase tracking-[0.24em] text-muted">
                Fig. 01 — Wireframe
              </span>
              <span className="absolute bottom-0 left-6 text-[9px] uppercase tracking-[0.24em] text-muted">
                {finePointer ? 'Drag to rotate' : 'Static wireframe'}
              </span>
              {finePointer ? (
                <span className="absolute right-6 bottom-0 text-[9px] uppercase tracking-[0.24em] text-muted">
                  WebGL
                </span>
              ) : null}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative border-t border-line-soft bg-ink text-paper">
        <Marquee duration={40} className="py-3.5">
          {marqueeStack.map((item) => (
            <span key={item} className="flex items-center">
              <span className="px-6 text-[10px] uppercase tracking-[0.24em] md:text-[11px]">
                {item}
              </span>
              <span className="text-paper/35" aria-hidden="true">
                /
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
