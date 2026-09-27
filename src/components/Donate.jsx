import { HandCoins } from 'lucide-react'

export default function Donate() {
  return (
    <section id="donate" className="bg-paper py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest/10 text-forest">
          <HandCoins size={26} />
        </span>
        <h2 className="mt-6 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Help us build resilient communities.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-ink/70">
          Your gift funds mental health programs, practical education, and local capacity
          building across the communities ANCHOR serves.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          
            <a href="#"
            className="rounded-full bg-forest px-8 py-3.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-forest-light"
          >
            Support ANCHOR
          </a>
          
            <a href="#"
            className="rounded-full border border-forest/25 px-8 py-3.5 text-sm font-semibold text-forest transition-colors hover:bg-forest/5"
          >
            Become a volunteer
          </a>
        </div>
      </div>
    </section>
  )
}