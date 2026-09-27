import { Brain, BookOpen, Building2, Sprout } from 'lucide-react'

export default function Programs() {
  return (
    <section id="programs" className="bg-sand/60 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Three pillars, one Foundation.
          </h2>
          <p className="mt-4 text-ink/70">
            Every program traces back to the same mission &mdash; integrated mental health,
            practical education, and local capacity building.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-forest/15 bg-paper p-8 lg:col-span-2 lg:row-span-2 lg:p-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-paper">
              <Brain size={26} />
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
              Community mental health
            </h3>
            <p className="mt-3 max-w-md text-ink/70">
              Integrated mental health support delivered alongside trusted community structures,
              so care is accessible, culturally grounded, and sustained &mdash; not a one-time
              intervention.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-forest/10 pt-6 sm:max-w-sm">
              <div>
                <div className="font-display text-2xl font-semibold text-forest">Ongoing</div>
                <p className="text-sm text-ink/60">Community sessions</p>
              </div>
              <div>
                <div className="font-display text-2xl font-semibold text-forest">Local</div>
                <p className="text-sm text-ink/60">Trained facilitators</p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-forest/15 bg-paper p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20 text-forest">
              <BookOpen size={22} />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-ink">
              Practical education
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              Learning that connects directly to real economic opportunity, not just a
              certificate.
            </p>
          </article>

          <article className="rounded-3xl border border-forest/15 bg-paper p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20 text-forest">
              <Building2 size={22} />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-ink">
              Local capacity building
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              Strengthening local institutions and leadership so programs outlast any single
              project.
            </p>
          </article>

          <article className="rounded-3xl border border-forest/15 bg-paper p-8 lg:col-start-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20 text-forest">
              <Sprout size={22} />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-ink">
              Youth literacy &amp; leadership
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              Investing early in the next generation&rsquo;s literacy, confidence, and leadership.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}