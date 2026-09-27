import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#programs', label: 'Programs' },
  { href: '#impact', label: 'Our Impact' },
  { href: '#team', label: 'Our Team' },
  { href: '#contact', label: 'Contact' },

]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-forest-dark/95 backdrop-blur shadow-lg shadow-black/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5 text-paper">
          <img
            src="/images/logo-small.jpg"
            alt="ANCHOR logo"
            className="h-9 w-9 object-contain"
          />
          <span className="leading-none">
            <span className="block font-display text-lg font-semibold tracking-tight">ANCHOR</span>
            {/* <span className="hidden text-[11px] font-medium text-paper/55 sm:block">
              Advancing Nurturing Communities for Health Outcomes &amp; Resilience
            </span> */}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            
            <a key={link.href}
              href={link.href}
              className="text-sm font-medium text-paper/85 transition-colors hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
          
            <a href="#donate"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-forest-dark transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
          >
            Donate
          </a>
        </nav>

        <button
          className="text-paper md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-paper/10 bg-forest-dark px-6 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-4">
            {LINKS.map((link) => (
              
              <a key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-paper/90"
              >
                {link.label}
              </a>
            ))}
            
            <a href="#donate"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold px-5 py-2.5 text-center text-sm font-semibold text-forest-dark"
            >
              Donate
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}