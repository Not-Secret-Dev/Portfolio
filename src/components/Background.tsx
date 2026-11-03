import { Download } from 'lucide-react'
import { education, languages, principles, profile } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Background() {
  return (
    <section id="background" className="panel flex flex-col border-b border-line-soft">
      <div className="panel-inner">
        <SectionHeading
          index="05"
          title="Background"
          description="Credentials, languages, and the non-code half of the picture."
        />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted">Education</p>
            <div className="mt-5 border-t border-line-soft">
              {education.map((entry) => (
                <div
                  key={entry.credential}
                  className="grid gap-2 border-b border-line-soft py-6 sm:grid-cols-[92px_1fr] sm:gap-6"
                >
                  <span className="text-[11px] text-muted">{entry.period}</span>
                  <div>
                    <h3 className="text-[15px]">{entry.credential}</h3>
                    <p className="mt-1.5 text-[12px] text-muted">{entry.institution}</p>
                    <p className="mt-1.5 text-[9px] uppercase tracking-[0.18em] text-muted">
                      {entry.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted">Languages</p>
              <div className="mt-5 space-y-5 border-t border-line-soft pt-6">
                {languages.map((language) => (
                  <div key={language.name}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-[13px]">{language.name}</span>
                      <span className="text-[10px] uppercase tracking-[0.12em] text-muted">
                        {language.level}
                      </span>
                    </div>
                    <div className="mt-2 h-1 w-full bg-line-soft">
                      <div className="h-full bg-ink" style={{ width: `${language.meter}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="border border-line-soft p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                  One-page version
                </p>
                <p className="mt-2 text-[12px] leading-relaxed">
                  The same story, condensed to a single printed page.
                </p>
                <a
                  href={profile.cv}
                  download
                  className="mt-4 inline-flex items-center gap-2 bg-ink px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] text-paper transition-opacity hover:opacity-85"
                >
                  Download CV
                  <Download className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-auto pt-8">
          <div className="flex items-center justify-between border-t border-line-soft pt-5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted">
              Operating principles
            </p>
            <span className="text-[9px] uppercase tracking-[0.18em] text-muted">How I work</span>
          </div>
          <div className="mt-4 grid gap-px border border-line-soft bg-line-soft md:grid-cols-3">
            {principles.map((principle, index) => (
              <div key={principle.title} className="bg-paper p-5">
                <span className="text-[9px] text-muted">0{index + 1}</span>
                <h3 className="mt-2 text-[12px]">{principle.title}</h3>
                <p className="mt-1.5 text-[11px] leading-relaxed text-muted">{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
