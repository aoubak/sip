import React from 'react'
import { MapPin, Calendar, ArrowRight } from 'lucide-react'
import { images } from '../assets/images'

export default function ProjectsPreview() {
  const projects = [
    {
      title: 'Drought Resilience Program',
      summary:
        'Designed climate risk adaptation measures and supported local capacity building for drought-prone districts.',
      location: 'Puntland',
      duration: '2023–2024',
      tags: ['DRR', 'Climate Adaptation'],
      image: images.heroImg,
    },
    {
      title: 'Urban Waste Management Pilot',
      summary:
        'Conducted environmental assessments and community consultations to pilot sustainable waste solutions.',
      location: 'Mogadishu',
      duration: '2022–2023',
      tags: ['Environment', 'Community'],
      image: images.heroImg,
    },
    {
      title: 'Livelihoods & Social Impact Study',
      summary:
        'Evaluated program outcomes, equity, and participation to inform future social development initiatives.',
      location: 'Jubaland',
      duration: '2024',
      tags: ['Research', 'Social Impact'],
      image: images.heroImg,
    },
  ]

  return (
    <section id="projects" className="relative bg-gradient-to-b from-white to-sky-50/40 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center">
          <span className="bg-sky-200 border text-sm border-sky-800 text-sky-800 rounded-full px-4 py-1">
            Case Studies
          </span>
        </div>
        <div className="text-center mt-3 mb-10">
          <h2 className="text-3xl md:text-4xl text-slate-900 font-bold">Recent Projects</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-2">
            A snapshot of our work across disaster risk reduction, environmental management, and social development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} photo`}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/30 via-slate-900/0 to-transparent" />
                <div className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/90 px-2 py-1 text-[11px] font-medium text-slate-700 ring-1 ring-slate-200 backdrop-blur">
                  Case Study
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{p.summary}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-medium text-sky-700 ring-1 ring-sky-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4 text-sky-700" /> {p.location}</span>
                    <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4 text-sky-700" /> {p.duration}</span>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-700 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition"
                    aria-label={`View details for ${p.title}`}
                  >
                    View
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-800 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition"
          >
            See all case studies
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
