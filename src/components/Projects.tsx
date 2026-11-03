import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { useEffect, useRef, useState, type MouseEvent, type PointerEvent } from 'react'
import { profile, projects, type Project } from '../data/content'
import { GitHubIcon } from './GitHubIcon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="gallery-card group relative flex w-[86vw] max-w-[620px] shrink-0 snap-center flex-col justify-between border border-line-soft bg-paper p-6 transition-colors duration-500 hover:border-ink hover:bg-ink hover:text-paper sm:w-[540px] lg:w-[600px] md:p-8">
      <div>
        <div className="flex items-start justify-between gap-6">
          <span className="border border-line-soft px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-muted transition-colors duration-500 group-hover:border-paper/25 group-hover:text-paper/60">
            {project.category}
          </span>
          <span
            aria-hidden="true"
            data-index={project.index}
            className="display block text-[4rem] leading-none text-ink/10 transition-colors duration-500 before:content-[attr(data-index)] group-hover:text-paper/15 md:text-[5rem]"
          />
        </div>

        <h3 className="mt-6 text-[clamp(1.8rem,3.6vw,2.6rem)]">{project.title}</h3>
        <p className="mt-1.5 text-[12.5px] text-muted transition-colors duration-500 group-hover:text-paper/60">
          {project.subtitle}
        </p>
        <p className="mt-4 max-w-[54ch] text-[12.5px] leading-relaxed text-muted transition-colors duration-500 group-hover:text-paper/75">
          {project.blurb}
        </p>

        <ul className="mt-4 space-y-2">
          {project.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex max-w-[56ch] gap-3 text-[12px] leading-relaxed text-muted transition-colors duration-500 group-hover:text-paper/75"
            >
              <span
                aria-hidden="true"
                className="mt-px text-ink transition-colors duration-500 group-hover:text-paper"
              >
                +
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line-soft pt-4 transition-colors duration-500 group-hover:border-paper/20">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="border border-line-soft px-2 py-1 text-[9px] uppercase tracking-[0.1em] text-muted transition-colors duration-500 group-hover:border-paper/20 group-hover:text-paper/60"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} — see Aayan Mumtaz's GitHub profile`}
          className="flex items-center gap-2 text-[9px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink group-hover:text-paper/60 group-hover:hover:text-paper"
        >
          <GitHubIcon className="size-4" />
          GitHub
        </a>
      </div>
    </article>
  )
}

export function Projects() {
  const trackRef = useRef<HTMLDivElement>(null)
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: false })
  const [dragging, setDragging] = useState(false)
  const [progress, setProgress] = useState(0)
  const scrollTarget = useRef(0)
  const lastArrowClick = useRef(0)

  const updateProgress = () => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setProgress(max > 0 ? Math.min(1, Math.max(0, el.scrollLeft / max)) : 0)
  }

  useEffect(() => {
    updateProgress()
    window.addEventListener('resize', updateProgress)
    return () => window.removeEventListener('resize', updateProgress)
  }, [])

  useEffect(() => {
    if (!dragging) return

    const onMove = (event: globalThis.PointerEvent) => {
      const el = trackRef.current
      if (!el || !drag.current.active) return
      const delta = event.clientX - drag.current.startX
      if (Math.abs(delta) > 4) drag.current.moved = true
      el.scrollLeft = drag.current.startLeft - delta
    }

    const stopDragging = () => {
      drag.current.active = false
      setDragging(false)
      window.setTimeout(() => {
        drag.current.moved = false
      }, 0)
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', stopDragging)
    window.addEventListener('pointercancel', stopDragging)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', stopDragging)
      window.removeEventListener('pointercancel', stopDragging)
    }
  }, [dragging])

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return
    const el = trackRef.current
    if (!el) return
    drag.current = {
      active: true,
      startX: event.clientX,
      startLeft: el.scrollLeft,
      moved: false,
    }
    setDragging(true)
  }

  const onClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (drag.current.moved) {
      event.preventDefault()
      event.stopPropagation()
    }
  }

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current
    if (!el) return

    // Accumulate rapid arrow clicks instead of letting smooth-scroll coalesce them.
    const now = Date.now()
    const base = now - lastArrowClick.current < 600 ? scrollTarget.current : el.scrollLeft
    const max = el.scrollWidth - el.clientWidth
    const next = Math.min(max, Math.max(0, base + direction * el.clientWidth * 0.78))

    scrollTarget.current = next
    lastArrowClick.current = now
    el.scrollTo({ left: next, behavior: 'smooth' })
  }

  const activeIndex = Math.min(
    projects.length,
    Math.max(1, Math.round(progress * (projects.length - 1)) + 1),
  )
  const canGoBack = progress > 0.01
  const canGoForward = progress < 0.99

  return (
    <section id="work" className="panel flex flex-col overflow-hidden border-b border-line-soft">
      <div className="panel-top">
        <SectionHeading
          index="03"
          title="Selected work"
          description="Four builds that exercise different parts of the stack — mobile, memory, networking, interface."
        />

        <Reveal className="mt-6 flex flex-wrap items-center justify-between gap-5">
          <p className="text-[9px] uppercase tracking-[0.22em] text-muted">
            Drag, swipe, or use the arrows
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
              {String(activeIndex).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
            <div className="relative h-px w-24 bg-line-soft md:w-36">
              <div
                className="absolute inset-y-0 left-0 bg-ink transition-[width] duration-150"
                style={{ width: `${Math.max(4, progress * 100)}%` }}
              />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={!canGoBack}
                aria-label="Previous project"
                className="grid size-9 place-items-center border border-line-soft transition-colors hover:border-ink hover:bg-ink hover:text-paper disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-line-soft disabled:hover:bg-transparent disabled:hover:text-ink"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={!canGoForward}
                aria-label="Next project"
                className="grid size-9 place-items-center border border-line-soft transition-colors hover:border-ink hover:bg-ink hover:text-paper disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-line-soft disabled:hover:bg-transparent disabled:hover:text-ink"
              >
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-5 flex min-h-0 flex-1 flex-col">
        <div
          ref={trackRef}
          role="region"
          aria-label="Project gallery"
          tabIndex={0}
          onScroll={updateProgress}
          onPointerDown={onPointerDown}
          onClickCapture={onClickCapture}
          onDragStart={(event) => event.preventDefault()}
          onKeyDown={(event) => {
            if (event.key === 'ArrowRight') {
              event.preventDefault()
              scrollByCard(1)
            }
            if (event.key === 'ArrowLeft') {
              event.preventDefault()
              scrollByCard(-1)
            }
          }}
          className={`no-scrollbar gallery-track flex flex-1 items-stretch gap-4 overflow-x-auto px-5 pb-6 md:gap-6 md:px-10 xl:mr-3 ${
            dragging ? 'is-dragging' : ''
          }`}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="gallery-card group flex w-[70vw] max-w-[360px] shrink-0 snap-center flex-col justify-between border border-dashed border-line p-6 transition-colors duration-500 hover:bg-ink hover:text-paper md:p-8"
          >
            <span className="text-[9px] uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-paper/60">
              More
            </span>
            <div>
              <GitHubIcon className="size-8" />
              <p className="display mt-5 text-3xl">The rest of the shelf</p>
              <p className="mt-3 max-w-[28ch] text-[12px] leading-relaxed text-muted transition-colors group-hover:text-paper/75">
                Experiments, coursework, and half-finished ideas live on GitHub.
              </p>
            </div>
            <span className="mt-8 flex items-center gap-2 text-[9px] uppercase tracking-[0.16em]">
              @{profile.githubHandle}
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
