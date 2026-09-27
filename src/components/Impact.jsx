import useCountUp from '../hooks/useCountUp'

const NUMBERS = [
  { end: 85400, label: 'Community members reached', format: (v) => v.toLocaleString() },
  { end: 1200, label: 'Workshops & trainings delivered', format: (v) => v.toLocaleString() + '+' },
  { end: 320, label: 'Local partners & facilitators', format: (v) => String(v) },
  { end: 98, label: 'Program satisfaction', format: (v) => v + '%' },
]

function Number({ end, label, format }) {
  const [ref, value] = useCountUp(end, 1800)
  return (
    <div ref={ref}>
      <div className="font-display text-4xl font-semibold text-paper sm:text-5xl">
        {format(value)}
      </div>
      <p className="mt-2 text-sm text-paper/60">{label}</p>
    </div>
  )
}

export default function Impact() {
  return (
    <section id="impact" className="bg-forest-dark py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-lg">
          <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
            Real numbers. Real lives changed.
          </h2>
          <p className="mt-4 text-paper/65">
            Every figure below is a person our teams met, more than once.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {NUMBERS.map((n) => (
            <Number key={n.label} {...n} />
          ))}
        </div>
      </div>
    </section>
  )
}