import {
  ArrowRight,
  Compass,
  HeartHandshake,
  Users,
  ShieldCheck,
  HandHeart,
} from 'lucide-react'

import useCountUp from '../hooks/useCountUp'

const STATS = [
  { end: 2025, suffix: '', label: 'Year established' },
  { end: 50, suffix: '+', label: 'Lives directly impacted' },
  { end: 11, suffix: '', label: 'Youth in recovery' },
  { end: 7, suffix: '', label: 'Families supported' },
]

function Stat({ end, suffix, label }) {
  const [ref, value] = useCountUp(end)

  return (
    <div ref={ref} className="border-t border-ink/10 pt-4">
      <div className="font-display text-3xl font-semibold text-forest">
        {value}
        {suffix}
      </div>

      <p className="mt-1 max-w-[140px] text-sm leading-relaxed text-ink/60">
        {label}
      </p>
    </div>
  )
}

export default function About() {
  return (
    <main className="overflow-hidden bg-paper text-ink">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24"
      >
        <div className="grid items-end gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-forest">
              <Compass size={16} />
              About ANCHOR
            </span>

            <h1 className="mt-6 max-w-2xl font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Building resilient communities where everyone has the{' '}
              <span className="text-moss">support and opportunity to thrive.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-ink/65">
              ANCHOR — Advancing Nurturing Communities for Health Outcomes &
              Resilience — works to strengthen community-led health and social
              support networks across Liberia.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src="/images/banner.jpg"
              alt="Community members participating in an ANCHOR community activity"
              className="h-[420px] w-full object-cover lg:h-[560px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-7 text-paper lg:p-10">
              <p className="max-w-md font-display text-2xl leading-snug">
                Sustainable change begins within the community itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR STORY
      ====================================================== */}
      <section className="bg-forest text-paper">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-28">
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-paper/50">
              01 — Our story
            </span>

            <h2 className="mt-5 max-w-md font-display text-4xl font-semibold leading-tight sm:text-5xl">
              From caring for caregivers to building resilient communities.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-xl leading-9 text-paper/80">
              Established in 2025, ANCHOR was born from a passion for finding
              local solutions to recurring health and social issues faced by
              communities in Liberia.
            </p>

            <p className="mt-6 leading-8 text-paper/60">
              What began as{' '}
              <span className="font-semibold text-paper">
                “Caring for the Caregivers”
              </span>{' '}
              in 2022 evolved into a comprehensive health and social impact
              organization.
            </p>

            <p className="mt-6 leading-8 text-paper/60">
              Today, ANCHOR focuses on strengthening community-led health and
              social support networks that improve wellbeing, build resilience,
              and expand opportunities for individuals, families, and
              communities.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISION + MISSION
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-forest">
              <Compass size={16} />
              Vision &amp; Mission
            </span>

            <h2 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              A healthy, resilient community where everyone can thrive.
            </h2>

            <div className="mt-10 space-y-8">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-moss">
                  Our vision
                </p>

                <p className="max-w-xl text-lg leading-8 text-ink/65">
                  A healthy, resilient community where everyone has the
                  support and opportunity to thrive.
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-moss">
                  Our mission
                </p>

                <p className="max-w-xl text-lg leading-8 text-ink/65">
                  To build and sustain community-led health and social support
                  networks that improve wellbeing, strengthen resilience, and
                  expand opportunities for all.
                </p>
              </div>
            </div>
          </div>

          {/* REAL ANCHOR STATS */}
          <div className="self-end rounded-[2rem] bg-moss/10 p-8 lg:p-10">
            <p className="max-w-sm text-sm leading-6 text-ink/60">
              ANCHOR is building its work through direct engagement with
              individuals, families, and communities in Liberia.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-2">
              {STATS.map((stat) => (
                <Stat key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY IT MATTERS
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[2rem] bg-moss/10 lg:grid-cols-2">
          <div className="min-h-[420px]">
            <img
              src="/images/black-man-talks-about-his-mental-health.jpg"
              alt="A person participating in a mental health conversation"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>

          <div className="flex items-center p-10 lg:p-16">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-forest">
                02 — Why it matters
              </span>

              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                Health and wellbeing are community concerns.
              </h2>

              <p className="mt-6 text-lg leading-8 text-ink/65">
                ANCHOR works at the intersection of health, mental wellbeing,
                social support, recovery, and community resilience.
              </p>

              <p className="mt-5 text-lg leading-8 text-ink/65">
                Through awareness, support, education, and community
                engagement, we create spaces where people can access
                information, build practical skills, and connect with
                supportive networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR APPROACH
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-[0.18em] text-forest">
            03 — Our approach
          </span>

          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            People remain at the heart of our interventions.
          </h2>

          <p className="mt-6 text-lg leading-8 text-ink/65">
            ANCHOR stands for an inclusive and community-driven approach. We
            believe sustainable change becomes stronger when communities are
            actively involved in identifying needs, shaping solutions, and
            building the capacity to sustain them.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-ink/10 md:grid-cols-3">
          <div className="bg-paper p-8 lg:p-10">
            <Users className="text-forest" size={28} />

            <h3 className="mt-8 font-display text-2xl font-semibold">
              Community-driven
            </h3>

            <p className="mt-4 leading-7 text-ink/60">
              We place people and communities at the heart of our
              interventions and work toward solutions that respond to local
              realities.
            </p>
          </div>

          <div className="bg-paper p-8 lg:p-10">
            <HeartHandshake className="text-forest" size={28} />

            <h3 className="mt-8 font-display text-2xl font-semibold">
              Inclusive
            </h3>

            <p className="mt-4 leading-7 text-ink/60">
              We create supportive environments that encourage participation,
              connection, learning, and access to practical support.
            </p>
          </div>

          <div className="bg-paper p-8 lg:p-10">
            <ShieldCheck className="text-forest" size={28} />

            <h3 className="mt-8 font-display text-2xl font-semibold">
              Sustainable
            </h3>

            <p className="mt-4 leading-7 text-ink/60">
              We focus on strengthening people, relationships, and local
              support networks so positive change can continue beyond a single
              intervention.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMMUNITY FIRST
      ====================================================== */}
      <section className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative min-h-[560px] overflow-hidden rounded-[2rem]">
          <img
            src="/images/medium-shot-people-chatting-meeting.jpg"
            alt="People participating in a community discussion"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="relative flex min-h-[560px] items-end p-8 lg:p-14">
            <div className="max-w-2xl text-paper">
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-paper/60">
                04 — Community first
              </span>

              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                Sustainable change starts within the community.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-paper/75">
                Our programs bring together community awareness, recovery
                support, family engagement, health promotion, and practical
                capacity building to respond to real needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE DO / BELIEVE
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="/images/man-trying-console-afro-american-female-patient.jpg"
              alt="A supportive conversation between a caregiver and community member"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <div>
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-forest">
              05 — What we believe
            </span>

            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Everyone deserves support, dignity, and an opportunity to thrive.
            </h2>

            <p className="mt-6 text-lg leading-8 text-ink/65">
              Our work recognizes that health and wellbeing are influenced by
              the environments in which people live, the relationships they
              have, and the support available to them.
            </p>

            <p className="mt-5 text-lg leading-8 text-ink/65">
              That is why ANCHOR combines health promotion, mental health
              awareness, recovery support, family engagement, and community
              capacity building.
            </p>

            <div className="mt-10 flex items-start gap-4 border-t border-ink/10 pt-8">
              <HandHeart
                size={24}
                className="mt-1 shrink-0 text-forest"
              />

              <p className="text-base leading-7 text-ink/60">
                We believe communities are stronger when people have the
                knowledge, relationships, and support needed to respond to
                challenges together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PARTNERSHIP
      ====================================================== */}
      <section className="bg-moss/10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-forest">
              06 — Working together
            </span>

            <h2 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Building healthier communities requires collaboration.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/65">
              ANCHOR works toward stronger community support networks through
              engagement with individuals, families, caregivers, community
              groups, churches, health professionals, and other local
              partners.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-paper transition hover:bg-forest-dark"
            >
              Work with ANCHOR
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="/images/bnr1.jpg"
              alt="People connecting and supporting one another"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="bg-forest text-paper">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:py-32">
          <span className="text-sm font-medium uppercase tracking-[0.18em] text-paper/50">
            07 — Be part of the work
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Healthier communities begin with people who care enough to act.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-paper/65">
            Whether you are looking for support, want to contribute, or want
            to work with us, there is a place to connect with the ANCHOR
            community.
          </p>

          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-paper px-7 py-4 text-sm font-semibold text-forest transition hover:bg-paper/90"
          >
            Connect with ANCHOR
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </main>
  )
}

