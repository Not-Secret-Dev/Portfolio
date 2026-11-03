import { ArrowUpRight, Check, Copy, Globe, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useEffect, useRef, useState, type ChangeEvent, type ComponentType, type FormEvent } from 'react'
import { profile } from '../data/content'
import { GitHubIcon } from './GitHubIcon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type FieldErrors = {
  name?: string
  email?: string
  message?: string
}

type ContactRow = {
  label: string
  value: string
  href?: string
  icon: ComponentType<{ className?: string }>
  copy?: boolean
  external?: boolean
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const contactRows: ContactRow[] = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    copy: true,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    icon: Phone,
  },
  {
    label: 'Based in',
    value: profile.location,
    icon: MapPin,
  },
  {
    label: 'GitHub',
    value: `@${profile.githubHandle}`,
    href: profile.github,
    icon: GitHubIcon,
    external: true,
  },
  {
    label: 'Current site',
    value: profile.siteLabel,
    href: profile.site,
    icon: Globe,
    external: true,
  },
]

export function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<'idle' | 'ready'>('idle')
  const [mailtoHref, setMailtoHref] = useState('')
  const [plainMessage, setPlainMessage] = useState('')
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedMessage, setCopiedMessage] = useState(false)

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (!copiedEmail) return
    const timer = window.setTimeout(() => setCopiedEmail(false), 2000)
    return () => window.clearTimeout(timer)
  }, [copiedEmail])

  useEffect(() => {
    if (!copiedMessage) return
    const timer = window.setTimeout(() => setCopiedMessage(false), 2000)
    return () => window.clearTimeout(timer)
  }, [copiedMessage])

  const copyText = async (text: string, done: (value: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(text)
      done(true)
    } catch {
      done(false)
    }
  }

  const updateField =
    (field: keyof typeof values) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
      if (errors[field]) {
        setErrors((current) => ({ ...current, [field]: undefined }))
      }
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const name = values.name.trim()
    const email = values.email.trim()
    const message = values.message.trim()

    const nextErrors: FieldErrors = {}
    if (name.length < 2) nextErrors.name = 'Please add your name.'
    if (!EMAIL_PATTERN.test(email)) nextErrors.email = 'Please add a valid email address.'
    if (message.length < 10) nextErrors.message = 'Please write a few more words.'

    setErrors(nextErrors)

    if (nextErrors.name) {
      nameRef.current?.focus()
      return
    }
    if (nextErrors.email) {
      emailRef.current?.focus()
      return
    }
    if (nextErrors.message) {
      messageRef.current?.focus()
      return
    }

    const subject = `Portfolio contact — ${name}`
    const body = `Hi Aayan,\r\n\r\n${message}\r\n\r\n—\r\n${name}\r\n${email}`
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setMailtoHref(href)
    setPlainMessage(`Subject: ${subject}\r\n\r\n${body}`)
    setStatus('ready')

    try {
      window.location.href = href
    } catch {
      /* the ready panel offers a manual link if the handler fails */
    }
  }

  const resetForm = () => {
    setStatus('idle')
  }

  return (
    <section id="contact" className="panel flex flex-col border-b border-line-soft">
      <div className="panel-inner">
        <SectionHeading
          index="06"
          title="Contact"
          description="Open to junior roles, internships, and interesting systems problems."
        />

        <div className="mt-8 grid flex-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <h3 className="display max-w-[16ch] text-[clamp(1.9rem,4vw,3.2rem)]">
              Let's build something that holds.
            </h3>
            <p className="mt-4 max-w-[48ch] text-[13px] leading-relaxed text-muted">
              Whether it's a web platform, an offline-first mobile tool, or something that has to
              survive a flaky network — send the problem and the constraints. I'll reply from
              Lahore, usually within a day.
            </p>

            <div className="mt-6 divide-y divide-line-soft border-y border-line-soft">
              {contactRows.map((row) => {
                const Icon = row.icon
                const content = (
                  <>
                    <span
                      aria-hidden="true"
                      className={`grid size-8 shrink-0 place-items-center border border-line-soft ${
                        row.href
                          ? 'transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-paper'
                          : ''
                      }`}
                    >
                      <Icon className="size-3.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[8px] uppercase tracking-[0.2em] text-muted">
                        {row.label}
                      </span>
                      <span
                        className={`block text-[12.5px] underline-offset-4 ${
                          row.href ? 'truncate group-hover:underline' : ''
                        }`}
                      >
                        {row.value}
                      </span>
                    </span>
                  </>
                )

                return (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-4 py-3.5"
                  >
                    {row.href ? (
                      <a
                        href={row.href}
                        target={row.external ? '_blank' : undefined}
                        rel={row.external ? 'noreferrer' : undefined}
                        className="group flex min-w-0 items-center gap-3.5"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex min-w-0 items-center gap-3.5">{content}</div>
                    )}

                    {row.copy ? (
                      <button
                        type="button"
                        onClick={() => copyText(profile.email, setCopiedEmail)}
                        aria-label={copiedEmail ? 'Email copied' : 'Copy email address'}
                        title={copiedEmail ? 'Copied' : 'Copy email'}
                        className="grid size-8 shrink-0 place-items-center border border-line-soft transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                      >
                        {copiedEmail ? (
                          <Check className="size-3.5" aria-hidden="true" />
                        ) : (
                          <Copy className="size-3.5" aria-hidden="true" />
                        )}
                      </button>
                    ) : null}
                  </div>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div aria-live="polite">
              {status === 'ready' ? (
                <div className="border border-line-soft p-6">
                  <div className="flex items-start gap-3">
                    <span className="grid size-8 shrink-0 place-items-center bg-ink text-paper">
                      <Check className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[13px] font-bold">Ready to send</p>
                      <p className="mt-1 text-[11px] leading-relaxed text-muted">
                        Your mail app should be opening with this message addressed to{' '}
                        {profile.email}. Press send there.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-2">
                    <a
                      href={mailtoHref}
                      className="flex items-center justify-center gap-2 bg-ink px-4 py-3 text-[10px] uppercase tracking-[0.18em] text-paper transition-opacity hover:opacity-85"
                    >
                      Open email app
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      onClick={() => copyText(plainMessage, setCopiedMessage)}
                      className="flex items-center justify-center gap-2 border border-line-soft px-4 py-3 text-[10px] uppercase tracking-[0.18em] text-muted transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                    >
                      {copiedMessage ? 'Copied' : 'Copy message'}
                      {copiedMessage ? (
                        <Check className="size-3.5" aria-hidden="true" />
                      ) : (
                        <Copy className="size-3.5" aria-hidden="true" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
                    >
                      Edit message
                    </button>
                  </div>

                  <p className="mt-3 text-[10px] leading-relaxed text-muted">
                    If nothing opened, copy the message and send it to {profile.email}.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  aria-describedby="contact-form-note"
                  noValidate
                  className="border border-line-soft p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em]">Send a message</span>
                    <span className="border border-dashed border-line px-2 py-1 text-[8px] uppercase tracking-[0.14em] text-muted">
                      Opens mail app
                    </span>
                  </div>

                  <fieldset className="mt-5 space-y-3">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-[9px] uppercase tracking-[0.18em] text-muted"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        ref={nameRef}
                        name="name"
                        type="text"
                        autoComplete="name"
                        maxLength={80}
                        placeholder="Your name"
                        value={values.name}
                        onChange={updateField('name')}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        className={`field mt-1.5 ${errors.name ? 'border-ink' : ''}`}
                      />
                      {errors.name ? (
                        <p id="contact-name-error" className="mt-1 text-[10px] text-ink">
                          — {errors.name}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-[9px] uppercase tracking-[0.18em] text-muted"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        ref={emailRef}
                        name="email"
                        type="email"
                        autoComplete="email"
                        maxLength={120}
                        placeholder="you@example.com"
                        value={values.email}
                        onChange={updateField('email')}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        className={`field mt-1.5 ${errors.email ? 'border-ink' : ''}`}
                      />
                      {errors.email ? (
                        <p id="contact-email-error" className="mt-1 text-[10px] text-ink">
                          — {errors.email}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-[9px] uppercase tracking-[0.18em] text-muted"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        ref={messageRef}
                        name="message"
                        rows={3}
                        maxLength={2000}
                        placeholder="Role, project, or the problem you're stuck on…"
                        value={values.message}
                        onChange={updateField('message')}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'contact-message-error' : undefined}
                        className={`field mt-1.5 resize-none ${errors.message ? 'border-ink' : ''}`}
                      />
                      {errors.message ? (
                        <p id="contact-message-error" className="mt-1 text-[10px] text-ink">
                          — {errors.message}
                        </p>
                      ) : null}
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 bg-ink px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-paper transition-opacity hover:opacity-85"
                    >
                      Send message
                      <Send className="size-3.5" aria-hidden="true" />
                    </button>
                  </fieldset>

                  <p id="contact-form-note" className="mt-3 text-[10px] leading-relaxed text-muted">
                    Opens your mail app with the message ready to send. Nothing leaves this page
                    until you press send there.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
