import { useState } from 'react'
import {
  Mail,
  MapPin,
  Clock,
  Phone,
  Send,
  ArrowUpRight,
} from 'lucide-react'

const INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@anchorlbr.org',
    href: 'mailto:info@anchorlbr.org',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: "After Telecom Junction, Block A, Bernard's Farm, Paynesville, Liberia",
    href: 'https://maps.google.com/?q=Bernard%27s+Farm+Paynesville+Liberia',
  },
  {
    icon: Clock,
    label: 'Operating hours',
    value: 'Monday – Friday: 8:00 AM – 5:00 PM',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+231 (0) 777 295 719',
    href: 'tel:+231777295719',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const update = (field) => (e) => {
    setForm((current) => ({
      ...current,
      [field]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject =
      form.subject || `Message from ${form.name || 'the ANCHOR website'}`

    const body = `From: ${form.name} (${form.email})

${form.message}`

    window.location.href =
      `mailto:info@anchorlbr.org?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-sand/60 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-[0.18em] text-forest">
            08 — Contact
          </span>

          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            We’re here to listen.
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-ink/65">
            Whether you have a question about our work, want to explore a
            partnership, or simply want to reach out, we’d be glad to hear
            from you.
          </p>
        </div>

        {/* Content */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

          {/* Contact information */}
          <div className="flex flex-col justify-between">

            <div className="space-y-7">

              {INFO.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest text-paper">
                    <Icon size={18} />
                  </span>

                  <div className="min-w-0">

                    <div className="text-sm font-semibold text-forest">
                      {label}
                    </div>

                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={
                          href.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                        className="mt-1 block max-w-sm text-[15px] leading-6 text-ink/70 transition-colors hover:text-forest"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 max-w-sm text-[15px] leading-6 text-ink/70">
                        {value}
                      </p>
                    )}

                  </div>

                  {href && (
                    <ArrowUpRight
                      size={16}
                      className="ml-auto mt-1 shrink-0 text-ink/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-forest"
                    />
                  )}
                </div>
              ))}

            </div>

            {/* Small reassurance */}
            <div className="mt-12 rounded-3xl bg-forest p-7 text-paper lg:mt-16">
              <p className="font-display text-xl leading-snug">
                Your message is a first step toward connection.
              </p>

              <p className="mt-3 text-sm leading-6 text-paper/60">
                For emergencies or situations requiring immediate medical
                attention, please contact the appropriate emergency or
                healthcare service.
              </p>
            </div>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-forest/10 bg-paper p-7 shadow-[0_20px_60px_rgba(0,0,0,0.05)] sm:p-9 lg:p-11"
          >

            <div className="mb-8">
              <p className="font-display text-2xl font-semibold text-ink">
                Send us a message
              </p>

              <p className="mt-2 text-sm leading-6 text-ink/55">
                Fill out the form below and your email client will open with
                your message ready to send.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-ink"
                >
                  Your name
                </label>

                <input
                  id="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-2xl border border-forest/15 bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink/35 outline-none transition-all focus:border-forest focus:ring-4 focus:ring-forest/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-ink"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-forest/15 bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink/35 outline-none transition-all focus:border-forest focus:ring-4 focus:ring-forest/10"
                />
              </div>

              {/* Subject */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-ink"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={update('subject')}
                  placeholder="How can we help?"
                  className="mt-2 w-full rounded-2xl border border-forest/15 bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink/35 outline-none transition-all focus:border-forest focus:ring-4 focus:ring-forest/10"
                />
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-ink"
                >
                  Your message
                </label>

                <textarea
                  id="message"
                  rows={7}
                  required
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell us a little about what you'd like to talk about..."
                  className="mt-2 w-full resize-none rounded-2xl border border-forest/15 bg-white px-4 py-3.5 text-sm leading-6 text-ink placeholder:text-ink/35 outline-none transition-all focus:border-forest focus:ring-4 focus:ring-forest/10"
                />
              </div>

            </div>

            <div className="mt-7 flex flex-col gap-4 border-t border-ink/10 pt-7 sm:flex-row sm:items-center sm:justify-between">

              <p className="max-w-sm text-xs leading-5 text-ink/45">
                By sending this message, you are choosing to contact ANCHOR
                through your own email application.
              </p>

              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-paper transition-all hover:-translate-y-0.5 hover:bg-forest-light hover:shadow-lg"
              >
                Send message
                <Send size={15} />
              </button>

            </div>

          </form>

        </div>
      </div>
    </section>
  )
}