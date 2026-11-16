import { about, profile, stats } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section
      id="about"
      className="panel relative flex flex-col border-b border-line-soft"
    >
      <div className="panel-inner">
        <SectionHeading
          index="01"
          title="About"
          description="Who's behind the terminal — and what I actually optimize for."
        />

        <div className="mt-8 grid flex-1 gap-8 lg:grid-cols-[minmax(0,0.7fr)_1.3fr] lg:items-center lg:gap-12">
          <Reveal className="relative">
            <div className="relative w-full max-w-[290px]">
              <div
                className="absolute top-3 left-3 h-full w-full border border-line-soft"
                aria-hidden="true"
              />
              <figure className="relative border border-line-soft bg-white p-2.5">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F0F0F0]">
                  <picture className="block h-full w-full">
                    <source srcSet="/images/portrait.webp" type="image/webp" />
                    <img
                      src="/images/portrait.png"
                      alt="Portrait of Aayan Mumtaz"
                      width={460}
                      height={460}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top grayscale transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </picture>
                </div>
                <figcaption className="flex items-center justify-between px-1 pt-2.5 pb-0.5 text-[8px] uppercase tracking-[0.18em] text-[#707070]">
                  <span>{profile.name}</span>
                  <span>Lahore, PK</span>
                </figcaption>
              </figure>
            </div>
            <p className="mt-6 text-[9px] uppercase tracking-[0.2em] text-muted">
              31.5204° N / 74.3587° E
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-[32ch] text-lg leading-snug md:text-xl">{about.intro}</p>
            <div className="mt-5 max-w-[62ch] space-y-4 text-[13px] leading-relaxed text-muted">
              {about.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Entry-level', 'Frontend', 'Go', 'C', 'Always learning'].map((tag) => (
                <span
                  key={tag}
                  className="border border-line-soft px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <div className="grid grid-cols-2 gap-px border border-line-soft bg-line-soft md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-paper px-5 py-4 md:px-6">
                <span className="display text-3xl md:text-4xl">{stat.value}</span>
                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
