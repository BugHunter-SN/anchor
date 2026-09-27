import { useState } from 'react'
import { Mail, MapPin, Clock, Phone, Send } from 'lucide-react'

const INFO = [
  { icon: Mail, label: 'Email', value: 'info@anchorlbr.org' },
  {
    icon: MapPin,
    label: 'Location',
    value: "After Telecom Junction, Block A, Bernard's Farm, Paynesville, Liberia",
  },
  { icon: Clock, label: 'Operating hours', value: 'Monday – Friday: 8:00 AM – 5:00 PM' },
  { icon: Phone, label: 'Phone', value: '+231 (0) 777 295 719' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend in this MVP: hand the message off to the visitor's own email
    // client instead of pretending there's a server to receive it. Swap this
    // for a Formspree/EmailJS endpoint later if you want submissions to land
    // directly in an inbox without opening the visitor's mail app.
    const subject = form.subject || `Message from ${form.name || 'the ANCHOR website'}`
    const body = `From: ${form.name} (${form.email})\n\n${form.message}`
    window.location.href = `mailto:info@anchorlbr.org?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="bg-sand/60 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Get in touch.</h2>
          <p className="mt-4 text-ink/70">
            Questions about our programs, partnership ideas, or just want to say hello &mdash;
            send us a message.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="space-y-6">
            {INFO.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest text-paper">
                  <Icon size={18} />
                </span>
                <div>
                  <div className="text-sm font-medium text-forest">{label}</div>
                  <p className="mt-0.5 max-w-xs text-ink/75">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-forest/15 bg-paper p-8 lg:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="text-sm font-medium text-ink">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update('name')}
                  className="mt-1.5 w-full rounded-xl border border-forest/20 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-forest"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="text-sm font-medium text-ink">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  className="mt-1.5 w-full rounded-xl border border-forest/20 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-forest"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="text-sm font-medium text-ink">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={update('subject')}
                  className="mt-1.5 w-full rounded-xl border border-forest/20 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-forest"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-ink">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={update('message')}
                  className="mt-1.5 w-full resize-none rounded-xl border border-forest/20 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-forest"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-forest-light"
            >
              Send message
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}