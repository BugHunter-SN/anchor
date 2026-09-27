import { ClipboardCheck, Sprout, Users, Eye, KeyRound, Anchor } from 'lucide-react'

const VALUES = [
  {
    icon: ClipboardCheck,
    title: 'Accountability',
    copy: 'Holding ourselves answerable to the communities served and the partners who entrust resources to the Foundation.',
  },
  {
    icon: Sprout,
    title: 'Nurture',
    copy: 'Intentionally investing in human capital, including youth literacy, leadership, and local institutional capacity.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    copy: 'Working alongside local leadership, public institutions, and civil society rather than through top-down development.',
  },
  {
    icon: Eye,
    title: 'Honesty',
    copy: 'Maintaining transparency in financial reporting, program outcomes, and operational challenges.',
  },
  {
    icon: KeyRound,
    title: 'Ownership',
    copy: 'Designing interventions to be locally owned and sustainable beyond the life of any single project.',
  },
  {
    icon: Anchor,
    title: 'Resilience',
    copy: 'Building institutional and community systems capable of adapting to economic, environmental, and operational shocks.',
  },
]

export default function Values() {
  return (
    <section id="values" className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
      <div className="max-w-xl">
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          What ANCHOR stands for.
        </h2>
        <p className="mt-4 text-ink/70">
          Six values guide every program decision and every partnership we enter.
        </p>
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {VALUES.map(({ icon: Icon, title, copy }) => (
          <div key={title} className="border-t border-forest/15 pt-5">
            <Icon size={20} className="text-forest" strokeWidth={2} />
            <h3 className="mt-4 font-display text-lg font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  )
}