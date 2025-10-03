import React from 'react'
import { MapPin, Calendar, ArrowRight } from 'lucide-react'
import { images } from '../assets/images'
import { useDarkMode } from '../contexts/DarkModeContext'

export default function ProjectsPreview() {
  const { isDarkMode } = useDarkMode()
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
    <section id="projects" className={`relative transition-all duration-300 overflow-hidden ${
      isDarkMode 
        ? 'bg-gradient-to-b from-slate-900 to-slate-800' 
        : 'bg-gradient-to-b from-white to-sky-50/40'
    }`}>
      <div className={`pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full blur-3xl transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-600/40' : 'bg-sky-200/40'
      }`} />
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center">
          <span className={`border text-sm rounded-full px-4 py-1 transition-all duration-300 ${
            isDarkMode 
              ? 'bg-slate-700 border-slate-600 text-slate-300' 
              : 'bg-sky-200 border-sky-800 text-sky-800'
          }`}>
            Case Studies
          </span>
        </div>
        <div className="text-center mt-3 mb-10">
          <h2 className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>Recent Projects</h2>
          <p className={`max-w-2xl mx-auto mt-2 transition-colors duration-300 ${
            isDarkMode ? 'text-slate-300' : 'text-neutral-600'
          }`}>
            A snapshot of our work across disaster risk reduction, environmental management, and social development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`group overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                isDarkMode 
                  ? 'border-slate-700 bg-slate-800' 
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} photo`}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/30 via-slate-900/0 to-transparent" />
                <div className={`absolute top-3 left-3 inline-flex items-center rounded-full px-2 py-1 text-[11px] font-medium backdrop-blur transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-slate-800/90 text-slate-300 ring-1 ring-slate-600' 
                    : 'bg-white/90 text-slate-700 ring-1 ring-slate-200'
                }`}>
                  Case Study
                </div>
              </div>

              <div className="p-5">
                <h3 className={`text-base font-semibold transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>{p.title}</h3>
                <p className={`mt-1 text-sm leading-relaxed transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>{p.summary}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-slate-700 text-slate-300 ring-slate-600' 
                          : 'bg-sky-50 text-sky-700 ring-sky-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={`mt-5 flex items-center justify-between text-xs transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex items-center gap-1 transition-colors duration-300 ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      <MapPin className={`h-4 w-4 transition-colors duration-300 ${
                        isDarkMode ? 'text-sky-400' : 'text-sky-700'
                      }`} /> 
                      {p.location}
                    </span>
                    <span className={`inline-flex items-center gap-1 transition-colors duration-300 ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      <Calendar className={`h-4 w-4 transition-colors duration-300 ${
                        isDarkMode ? 'text-sky-400' : 'text-sky-700'
                      }`} /> 
                      {p.duration}
                    </span>
                  </div>
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-1 rounded-full border px-3 py-1.5 font-medium transition-all duration-300 ${
                      isDarkMode 
                        ? 'border-slate-600 bg-slate-700 text-slate-300 hover:bg-sky-600 hover:text-white hover:border-sky-600' 
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-sky-600 hover:text-white hover:border-sky-600'
                    }`}
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
            className={`inline-flex items-center gap-2 rounded-md border px-6 py-3 font-semibold transition-all duration-300 ${
              isDarkMode 
                ? 'border-slate-600 text-slate-300 hover:bg-sky-600 hover:text-white hover:border-sky-600' 
                : 'border-slate-300 text-slate-800 hover:bg-sky-600 hover:text-white hover:border-sky-600'
            }`}
          >
            See all case studies
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
