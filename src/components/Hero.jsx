import { useEffect, useState } from 'react'
import { ArrowUpRight, HeartHandshake } from 'lucide-react'
import HeroCanvas from './HeroCanvas'

const SLIDES = [
  {
    eyebrow: 'Mental health',
    title: 'Mental health, rooted in community.',
    copy: 'We work to make mental health support a normal, accessible part of Liberian community life \u2014 not an afterthought.',
    cta: { label: 'Support our mission', href: '#donate' },
  },
  {
    eyebrow: 'Practical education',
    title: 'Education that opens real opportunity.',
    copy: 'Practical learning and literacy programs that help individuals secure economic opportunity and build a future they choose.',
    cta: { label: 'See our programs', href: '#programs' },
  },
  {
    eyebrow: 'Local capacity building',
    title: 'Built by the community, for the community.',
    copy: 'We invest in local leadership and institutions, so every program stays owned and sustainable long after we\u2019ve stepped back.',
    cta: { label: 'Our core values', href: '#values' },
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % SLIDES.length), 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-forest-dark">
      <div className="absolute inset-0">
        <HeroCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/40 via-forest-dark/55 to-forest-dark" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 pb-20">
        <div className="max-w-2xl">
          {SLIDES.map((slide, i) => (
            <div
              key={slide.title}
              className={`transition-all duration-700 ease-out ${
                i === active
                  ? 'relative opacity-100 translate-y-0'
                  : 'absolute inset-0 opacity-0 translate-y-3 pointer-events-none'
              }`}
              aria-hidden={i !== active}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-paper/10 px-4 py-1.5 text-sm font-medium text-gold-light">
                <HeartHandshake size={15} />
                {slide.eyebrow}
              </span>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] text-paper sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/80">{slide.copy}</p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                
                  <a href={slide.cta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest-dark transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
                >
                  {slide.cta.label}
                  <ArrowUpRight size={16} />
                </a>
                
                 <a href="#programs"
                  className="text-sm font-semibold text-paper/85 underline decoration-paper/30 underline-offset-4 transition-colors hover:text-paper"
                >
                  Our programs
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 flex items-center gap-3">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.title}
              onClick={() => setActive(i)}
              aria-label={`Show slide: ${slide.title}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? 'w-10 bg-gold' : 'w-4 bg-paper/30 hover:bg-paper/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}