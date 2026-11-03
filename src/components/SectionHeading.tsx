type SectionHeadingProps = {
  index: string
  title: string
  description?: string
}

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-6 border-t border-line-soft pt-6 md:flex-row md:items-end md:justify-between md:gap-12">
      <div className="flex items-baseline gap-4 md:gap-6">
        <span className="text-[11px] text-muted">[{index}]</span>
        <h2 className="display text-[clamp(2.4rem,6vw,4.6rem)]">{title}</h2>
      </div>
      {description ? (
        <p className="max-w-sm text-[13px] leading-relaxed text-muted md:text-right">{description}</p>
      ) : null}
    </div>
  )
}
