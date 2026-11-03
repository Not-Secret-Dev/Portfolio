import { experience } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section
      id="experience"
      className="panel flex flex-col border-b border-line-soft"
    >
      <div className="panel-inner">
        <SectionHeading
          index="02"
          title="Experience"
          description="Two roles, two very different definitions of “it's broken”."
        />

        <div className="mt-8 flex flex-1 flex-col">
          {experience.map((job, index) => (
            <Reveal key={job.company} delay={index * 0.08} className="flex flex-1 flex-col">
              <article className="grid flex-1 content-center gap-4 border-t border-line-soft py-7 md:grid-cols-[200px_1fr] md:items-center md:gap-10 md:py-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-muted">
                    {String(index + 1).padStart(2, '0')} / {job.detail}
                  </p>
                  <p className="mt-2.5 text-[11px] uppercase tracking-[0.14em]">
                    {job.period}
                  </p>
                  <p className="mt-1 text-[11px] text-muted">{job.location}</p>
                </div>

                <div>
                  <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                    <h3 className="text-[clamp(1.45rem,3.2vw,2.4rem)]">{job.company}</h3>
                    <span className="border border-line-soft px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] text-muted">
                      {job.role}
                    </span>
                  </div>

                  <ul className="mt-5 max-w-[68ch] space-y-2.5">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-[13px] leading-relaxed text-muted">
                        <span aria-hidden="true" className="mt-px text-ink">
                          —
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-line-soft px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
