import { Mail, Phone } from 'lucide-react'

const EXPLORE = [
  { label: 'About Us', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Our Impact', href: '#impact' },
  { label: 'Our Team', href: '#team' },
]

const INVOLVED = [
  { label: 'Volunteer', href: '#' },
  { label: 'Partner with us', href: '#' },
  { label: 'Fundraise', href: '#' },
  { label: 'Careers', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-forest-dark px-6 pb-8 pt-16 text-paper/80">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <a href="#home" className="flex items-center gap-2.5 text-paper">
            <img
              src="/images/logo-small.jpg"
              alt="ANCHOR logo"
              className="h-9 w-9 object-contain"
            />
            <span className="font-display text-lg font-semibold">ANCHOR</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
            Advancing Nurturing Communities for Health Outcomes &amp; Resilience &mdash; strengthening
            community resilience through mental health, education, and local capacity building.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-paper">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {EXPLORE.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-paper/65 transition-colors hover:text-paper">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-paper">Get involved</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {INVOLVED.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-paper/65 transition-colors hover:text-paper">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-paper">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              
              <a href="mailto:info@anchorlbr.org"
                className="flex items-center gap-2 text-paper/65 transition-colors hover:text-paper"
              >
                <Mail size={15} /> info@anchorlbr.org
              </a>
            </li>
            <li>
              
              <a href="tel:+231777295719"
                className="flex items-center gap-2 text-paper/65 transition-colors hover:text-paper"
              >
                <Phone size={15} /> +231 (0) 777 295 719
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-paper/10 pt-6 text-center text-xs text-paper/45">
        © {new Date().getFullYear()} ANCHOR. All rights reserved. Registered charity.
      </div>
    </footer>
  )
}