import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../assets/images'
import { Building2, Calendar, BriefcaseBusiness, DollarSign, ArrowRight } from 'lucide-react'
import { useDarkMode } from '../contexts/DarkModeContext'

export default function Projects() {
  const { isDarkMode } = useDarkMode();
  const projects = [
    {
      title: 'Environmental & Social Risk Monitoring – Garowe Municipality (SURPII)',
      client: 'Garowe Municipality / UNOPS',
      duration: 'Nov 2023 – Dec 2024',
      role: 'Subcontractor',
      value: '$130,600',
      description:
        'Provided ongoing monitoring support for environmental and social risk management under the Somali Urban Resilience Project.',
    },
    {
      title: 'TVET Centers Capacity Assessment for Green Skills',
      client: 'Save the Children International',
      duration: 'Aug 2025 – Oct 2025',
      role: 'Prime Contractor',
      value: '$26,000',
      description:
        'Assessed capacity of Technical Vocational Education Training centers in renewable energy and agriculture.',
    },
    {
      title: 'National Disability Strategy & Action Plan',
      client: 'DT Global IRiS',
      duration: 'June 2023 – Dec 2023',
      role: 'Prime Contractor',
      value: '$34,300',
      description:
        'Developed a national-level strategy and action plan to promote inclusion and accessibility.',
    },
    {
      title: 'Agricultural Cooperatives Policy & Mapping',
      client: 'DT Global IRiS (via IDV)',
      duration: 'July 2023 – Jan 2024',
      role: 'Subcontractor',
      value: '$52,100',
      description:
        'Drafted, finalized, and disseminated the Agricultural Cooperatives Policy and conducted cooperative mapping in Somalia.',
    },
    {
      title: 'Disaster Risk Management Policy – 6 Districts in Puntland',
      client: 'Ministry of Interior, Puntland',
      duration: 'May 2023 – Aug 2023',
      role: 'Prime Contractor',
      value: '$30,000',
      description:
        'Developed district-level DRM policies for Garowe, Gardo, Galdogob, Galkacyo, Bosaso, and Burtinle.',
    },
    {
      title: 'Endline Assessment – Hunger Response Project (HUREP)',
      client: 'NIS Foundation',
      duration: 'Mar 2023 – Nov 2023',
      role: 'Prime Contractor',
      value: '$60,300',
      description:
        'Conducted final project evaluation to assess hunger response outcomes.',
    },
  ]

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative isolate min-h-[42vh] flex items-center justify-center overflow-hidden pt-24">
        <img
          src={images.heroImg}
          alt="Montage of fieldwork and assessments"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">Our Projects & Case Studies</h1>
          <p className="mt-3 text-slate-200 text-base md:text-lg max-w-3xl mx-auto">
            Proven experience delivering sustainable, high-impact solutions across Somalia
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className={`relative py-12 sm:py-16
        ${isDarkMode ? 'bg-gradient-to-b from-slate-900 to-slate-800 text-white'
        : 'bg-gradient-to-b from-white to-sky-50/40 text-slate-900'}
      `}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium shadow-sm backdrop-blur mb-6
              ${isDarkMode ? 'bg-slate-800/70 text-slate-200 border-slate-700'
              : 'bg-white/70 text-sky-800 border-sky-200'}
            `}>
              Since 2015
            </div>
            <p className="leading-relaxed text-lg sm:text-xl">
              Since 2015, SIP Consultancy has delivered over 40 high-quality projects for governments, NGOs, UN agencies, and development partners.
            </p>
            <p className="mt-4 leading-relaxed text-base sm:text-lg">
              Our projects span environmental management, social development, policy formulation, disaster risk reduction, and capacity building. Below is a selection of our most notable assignments.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={`relative py-12 sm:py-16
        ${isDarkMode ? 'bg-slate-900 text-white'
        : 'bg-white text-slate-900'}
      `}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article
                key={p.title}
                className={`group rounded-2xl border p-6 shadow-sm hover:shadow-lg transition hover:-translate-y-0.5 flex flex-col h-full
                  ${isDarkMode ? 'bg-slate-800/70 text-slate-200 border-slate-700 hover:bg-slate-800'
                  : 'bg-white text-slate-900 border-slate-200'}
                `}
              >
                <div className='mb-3'>
                    {/* image of project */}
                    <img src={images.heroImg} alt={p.title} className="w-full h-40 object-cover rounded-lg" />
                </div>
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{p.description}</p>

                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-sky-700" />
                    <dt className="font-medium">Client:</dt>
                    <dd className="ml-1">{p.client}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-sky-700" />
                    <dt className="font-medium">Duration:</dt>
                    <dd className="ml-1">{p.duration}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <BriefcaseBusiness className="h-4 w-4 text-sky-700" />
                    <dt className="font-medium">Role:</dt>
                    <dd className="ml-1">{p.role}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-sky-700" />
                    <dt className="font-medium">Value:</dt>
                    <dd className="ml-1">{p.value}</dd>
                  </div>
                </dl>

                <div className="mt-auto pt-5">
                  <Link
                    to="/#contact"
                    className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-semibold transition
                      ${isDarkMode 
                        ? 'border-slate-600 bg-slate-700 text-slate-300 hover:bg-sky-600 hover:text-white hover:border-sky-600'
                        : 'border-slate-300 bg-white text-slate-700 hover:bg-sky-600 hover:text-white hover:border-sky-600'
                      }
                    `}
                    aria-label={`Contact us about ${p.title}`}
                  >
                    Contact about this project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`relative py-12 sm:py-16
        ${isDarkMode ? 'bg-gradient-to-b from-slate-800 to-slate-900 text-white'
        : 'bg-gradient-to-b from-sky-50 to-white text-slate-900'}
      `}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Partner with us to achieve measurable and sustainable development impact.
            </h2>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 transition"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
