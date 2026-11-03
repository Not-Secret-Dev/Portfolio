import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from 'react'

const MARKS = Array.from({ length: 21 }, (_, index) => index * 5)
const LENS_HEIGHT = 120
const LENS_WIDTH = 56
const LENS_SCALE = 1.28
const SCALE_WIDTH = 36

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

function ScaleMarks() {
  return (
    <>
      <div className="absolute inset-y-0 right-0 w-px bg-line-soft" />

      <div
        className="absolute inset-y-0 right-0 w-1.5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to bottom, var(--line-soft) 0, var(--line-soft) 1px, transparent 1px, transparent 1%)',
        }}
      />

      {MARKS.map((mark) => (
        <div
          key={mark}
          className="absolute right-0 flex -translate-y-1/2 items-center justify-end gap-1"
          style={{ top: `${mark}%` }}
        >
          <span
            className={`text-[8px] leading-none tabular-nums ${
              mark % 10 === 0 ? 'text-ink' : 'text-muted'
            }`}
          >
            {mark}
          </span>
          <span
            className={`h-px ${mark % 10 === 0 ? 'w-3 bg-line' : 'w-1.5 bg-line-soft'}`}
          />
        </div>
      ))}
    </>
  )
}

/**
 * Full-height measuring-rule scrollbar. Hover to reveal a magnified rectangular
 * lens, click/drag to scrub, and use arrow/page keys when focused.
 */
export function ScrollRuler() {
  const { scrollYProgress } = useScroll()
  const markerTop = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const [percent, setPercent] = useState(0)
  const [hoverRatio, setHoverRatio] = useState<number | null>(null)
  const [dragging, setDragging] = useState(false)
  const [trackHeight, setTrackHeight] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const next = Math.round(value * 100)
    setPercent((current) => (current === next ? current : next))
  })

  useEffect(() => {
    const element = trackRef.current
    if (!element) return

    const observer = new ResizeObserver(([entry]) => {
      setTrackHeight(entry.contentRect.height)
    })
    observer.observe(element)
    setTrackHeight(element.getBoundingClientRect().height)
    return () => observer.disconnect()
  }, [])

  const ratioFrom = (clientY: number) => {
    const rect = trackRef.current?.getBoundingClientRect()
    if (!rect || rect.height === 0) return 0
    return clamp((clientY - rect.top) / rect.height, 0, 1)
  }

  const scrollToRatio = (ratio: number) => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    window.scrollTo({ top: Math.round(clamp(ratio, 0, 1) * max), behavior: 'instant' })
  }

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    const ratio = ratioFrom(event.clientY)
    setDragging(true)
    setHoverRatio(ratio)
    scrollToRatio(ratio)
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const ratio = ratioFrom(event.clientY)
    setHoverRatio(ratio)
    if (dragging) scrollToRatio(ratio)
  }

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    setDragging(false)
    const rect = trackRef.current?.getBoundingClientRect()
    const stillOnRuler =
      rect !== undefined && event.clientY >= rect.top && event.clientY <= rect.bottom
    if (!stillOnRuler) setHoverRatio(null)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const page = window.innerHeight * 0.85
    switch (event.key) {
      case 'ArrowDown':
        window.scrollBy({ top: 90, behavior: 'smooth' })
        break
      case 'ArrowUp':
        window.scrollBy({ top: -90, behavior: 'smooth' })
        break
      case 'PageDown':
        window.scrollBy({ top: page, behavior: 'smooth' })
        break
      case 'PageUp':
        window.scrollBy({ top: -page, behavior: 'smooth' })
        break
      case 'Home':
        window.scrollTo({ top: 0, behavior: 'smooth' })
        break
      case 'End':
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
        break
      default:
        return
    }
    event.preventDefault()
  }

  const lensRatio = hoverRatio ?? 0
  const lensCenter = clamp(
    lensRatio * trackHeight,
    LENS_HEIGHT / 2,
    Math.max(trackHeight - LENS_HEIGHT / 2, LENS_HEIGHT / 2),
  )
  const lensTop = lensCenter - LENS_HEIGHT / 2
  const magnifiedTop = LENS_HEIGHT / 2 - lensCenter * LENS_SCALE
  const magnifiedLeft = (LENS_WIDTH - SCALE_WIDTH * LENS_SCALE) / 2

  return (
    <div
      id="scroll-ruler"
      className="fixed top-20 right-0 bottom-0 z-40 hidden w-16 border-l border-line-soft bg-paper xl:block"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-3 right-4 text-right"
      >
        <span className="block text-[7px] uppercase tracking-[0.3em] text-muted">Scroll</span>
        <span className="block text-[11px] leading-tight font-bold text-ink tabular-nums">
          {String(percent).padStart(2, '0')}%
        </span>
      </div>

      <div
        ref={trackRef}
        role="scrollbar"
        aria-controls="main"
        aria-orientation="vertical"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        aria-valuetext={`${percent}% scrolled`}
        aria-label="Page scroll position"
        title="Drag to scroll"
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        onPointerEnter={(event) => setHoverRatio(ratioFrom(event.clientY))}
        onPointerLeave={() => {
          if (!dragging) setHoverRatio(null)
        }}
        onKeyDown={handleKeyDown}
        className="absolute top-12 right-0 bottom-6 left-0 cursor-grab touch-none select-none outline-none focus-visible:bg-surface/70 focus-visible:ring-1 focus-visible:ring-ink focus-visible:ring-inset active:cursor-grabbing"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-4 w-9"
        >
          <ScaleMarks />

          <motion.div
            className="absolute right-0 z-10 flex -translate-y-1/2 items-center gap-1"
            style={{ top: markerTop }}
          >
            <span className="h-0.5 w-4 bg-ink" />
            <span className="size-1.5 rounded-full bg-ink" />
          </motion.div>
        </div>

        {hoverRatio !== null && trackHeight > 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="pointer-events-none absolute right-1 z-20 overflow-hidden border border-line bg-surface shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
            style={{ top: lensTop, width: LENS_WIDTH, height: LENS_HEIGHT }}
          >
            <div
              className="absolute"
              style={{
                top: magnifiedTop,
                left: magnifiedLeft,
                width: SCALE_WIDTH,
                height: trackHeight,
                transform: `scale(${LENS_SCALE})`,
                transformOrigin: 'top left',
              }}
            >
              <ScaleMarks />
            </div>
            <div className="absolute inset-x-0 top-1/2 h-px bg-ink/40" />
          </motion.div>
        ) : null}
      </div>
    </div>
  )
}
