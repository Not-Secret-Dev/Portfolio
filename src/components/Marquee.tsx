import type { CSSProperties, ReactNode } from 'react'

type MarqueeProps = {
  children: ReactNode
  duration?: number
  reverse?: boolean
  className?: string
}

/**
 * Infinite horizontal ticker. Renders the children twice and translates the
 * track by -50%, which keeps the seam invisible at any content width.
 */
export function Marquee({ children, duration = 30, reverse = false, className = '' }: MarqueeProps) {
  return (
    <div className={`marquee ${className}`.trim()}>
      <div
        className="marquee-track"
        data-reverse={String(reverse)}
        style={{ '--marquee-duration': `${duration}s` } as CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
