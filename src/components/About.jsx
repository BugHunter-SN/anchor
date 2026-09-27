import { Compass } from 'lucide-react'
import useCountUp from '../hooks/useCountUp'

const STATS = [
  { end: 12, suffix: '+', label: 'Years of service' },
  { end: 85, suffix: 'k+', label: 'Community members reached' },
  { end: 40, suffix: '+', label: 'Communities served' },
]

function Stat({ end, suffix, label }) {
  const [ref, value] = useCountUp(end)
  return (
    <div ref={ref} className="border-t border-ink/10 pt-4">
      <div className="font-display text-3xl font-semibold text-forest">
        {value}
        {suffix}
      </div>
      <p className="mt-1 text-sm text-ink/60">{label}</p>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-forest">
            <Compass size={16} />
            Vision &amp; mission
          </span>
          <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Liberian communities where mental health is prioritized.
          </h2>
          <p className="mt-6 max-w-md text-ink/70">
            <span className="font-semibold text-ink">Vision.</span> To see Liberian communities
            where mental health is prioritized, enabling individuals to access education, secure
            economic opportunity, and fulfill their God-given potential.
          </p>
          <p className="mt-4 max-w-md text-ink/70">
            <span className="font-semibold text-ink">Mission.</span> To strengthen community
            resilience through integrated mental health, practical education, and local capacity
            building that equips the next generation to thrive.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {STATS.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-moss via-forest to-forest-dark">
          <div className="absolute inset-0 flex items-end p-8">
            <p className="font-display text-xl leading-snug text-paper/90">
              &ldquo;They didn&rsquo;t bring a program and leave. They stayed, trained our
              people, and let us run it ourselves.&rdquo;
              <span className="mt-3 block text-sm font-body font-medium text-paper/60">
                &mdash; A community partner, local capacity-building visit
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}