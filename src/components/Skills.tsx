import { skillGroups } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="toolkit" className="panel flex flex-col border-b border-line-soft">
      <div className="panel-inner">
        <SectionHeading
          index="04"
          title="Toolkit"
          description="The tools I'm working with, grouped by confidence."
        />

        <div className="mt-8 grid flex-1 gap-px border border-line-soft bg-line-soft sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.label}
              delay={index * 0.05}
              className={`h-full bg-paper ${
                skillGroups.length % 2 === 1 && index === skillGroups.length - 1
                  ? 'sm:col-span-2'
                  : ''
              }`}
            >
              <div className="flex h-full flex-col p-6 md:p-8 xl:justify-center">
                <div className="flex items-center justify-between">
                  <h3 className="text-[10px] uppercase tracking-[0.2em]">{group.label}</h3>
                  <span className="text-[10px] text-muted">{group.index}</span>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border border-line-soft px-3 py-1.5 text-[11px] uppercase tracking-[0.08em] text-muted transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-4 text-[11px] text-muted">
          Grouped by confidence, not rank — the fundamentals come first.
        </p>
      </div>
    </section>
  )
}
