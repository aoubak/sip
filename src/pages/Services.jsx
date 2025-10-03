import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../assets/images'
import { Leaf, Users, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react'
import { useDarkMode } from '../contexts/DarkModeContext'

export default function Services() {
  const { isDarkMode } = useDarkMode();
  const serviceCategories = [
    {
      icon: Leaf,
      title: 'Environmental Services',
      color: 'emerald',
      services: [
        {
          name: 'Environmental Impact Assessment (EIA) & Strategic Environmental Assessment (SEA)',
          description: 'Identifying and evaluating potential impacts on the environment, biodiversity, and communities.',
          features: ['Impact prediction', 'Ecological studies', 'Mitigation measures']
        },
        {
          name: 'Environmental Planning, Permitting & Auditing',
          description: 'Risk assessments, audits, and development of environmental and social policies.'
        },
        {
          name: 'Climate Risk & Vulnerability Assessments',
          description: 'Analysis and adaptation strategies to strengthen climate resilience.'
        },
        {
          name: 'Environmental Monitoring & Management',
          description: 'Continuous monitoring to ensure compliance with environmental regulations.'
        }
      ]
    },
    {
      icon: Users,
      title: 'Social & Community Services',
      color: 'blue',
      services: [
        {
          name: 'Social & Resettlement Studies',
          description: 'Assessing impacts of land use and resource changes on local communities.'
        },
        {
          name: 'Community Consultation & Involvement Plans',
          description: 'Designing engagement strategies to involve stakeholders in decision-making.'
        },
        {
          name: 'Stakeholder Engagement & Public Participation',
          description: 'Facilitation of inclusive project planning processes.'
        },
        {
          name: 'Gender Development & Inclusion Studies',
          description: 'Promoting women\'s empowerment and social inclusion in development.'
        }
      ]
    },
    {
      icon: BarChart3,
      title: 'Research & Development',
      color: 'purple',
      services: [
        {
          name: 'Socio-Economic Studies',
          description: 'Baseline surveys, impact evaluations, and livelihood security assessments.'
        },
        {
          name: 'Monitoring & Evaluation (M&E)',
          description: 'Designing and implementing frameworks for project performance tracking.'
        },
        {
          name: 'Feasibility Studies & Needs Assessments',
          description: 'Identifying technical, financial, and social viability for development projects.'
        },
        {
          name: 'Disaster Risk Reduction & Anticipatory Action',
          description: 'Designing early warning systems, vulnerability mapping, and preparedness plans.'
        }
      ]
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      emerald: {
        light: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
        dark: 'bg-emerald-900/30 text-emerald-300 ring-emerald-700'
      },
      blue: {
        light: 'bg-blue-50 text-blue-700 ring-blue-200',
        dark: 'bg-blue-900/30 text-blue-300 ring-blue-700'
      },
      purple: {
        light: 'bg-purple-50 text-purple-700 ring-purple-200',
        dark: 'bg-purple-900/30 text-purple-300 ring-purple-700'
      }
    }
    return isDarkMode ? colors[color]?.dark || colors.emerald.dark : colors[color]?.light || colors.emerald.light
  }

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative isolate min-h-[42vh] flex items-center justify-center overflow-hidden pt-24">
        <img
          src={images.heroImg}
          alt="Field assessment and environmental study in progress"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">Our Core Services</h1>
          <p className="mt-3 text-slate-200 text-base md:text-lg max-w-3xl mx-auto">
            Delivering expert solutions in environmental, social, and research consultancy
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className={`relative py-12 sm:py-16
        ${isDarkMode ? 'bg-gradient-to-b from-slate-900 to-slate-800 text-white'
        : 'bg-gradient-to-b from-white to-sky-50/40 text-slate-900'}
      `}>
        <div className={`pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl
          ${isDarkMode ? 'bg-sky-500/10' : 'bg-sky-200/30'}
        `} />
        <div className={`pointer-events-none absolute -bottom-24 right-24 h-[28rem] w-[28rem] rounded-full blur-3xl
          ${isDarkMode ? 'bg-indigo-500/10' : 'bg-indigo-200/30'}
        `} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="container mx-auto text-left mb-12">
            <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium shadow-sm backdrop-blur mb-6
              ${isDarkMode ? 'bg-slate-800/70 text-slate-200 border-slate-700'
              : 'bg-white/70 text-sky-800 border-sky-200'}
            `}>
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
              Our Expertise
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Delivering Impactful Solutions
            </h2>
            <p className="leading-relaxed text-lg sm:text-xl mb-4">
              At SIP Consultancy, we provide high-quality consultancy services designed to create sustainable, inclusive, and impactful development outcomes.
            </p>
            <div>
            <p className="text-left leading-relaxed text-base sm:text-lg">
              Our multidisciplinary team delivers technical expertise across environmental, social, economic, and governance sectors in Somalia and the wider region.
            </p>
          </div>
            
          </div>

          {/* Enhanced Service Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className={`group relative overflow-hidden rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1
              ${isDarkMode ? 'bg-slate-800/70 text-slate-200 border-slate-700 hover:bg-slate-800'
              : 'bg-white text-slate-900 border-slate-200'}
            `}>
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                ${isDarkMode ? 'bg-gradient-to-br from-emerald-500/10 to-transparent'
                : 'bg-gradient-to-br from-emerald-50/50 to-transparent'}
              `} />
              <div className="relative">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 mb-4 group-hover:scale-110 transition-transform duration-300
                  ${isDarkMode ? 'bg-emerald-900/30 text-emerald-300 ring-emerald-700'
                  : 'bg-emerald-50 text-emerald-700 ring-emerald-200'}
                `}>
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Environmental Excellence</h3>
                <p className="text-sm leading-relaxed">
                  Comprehensive environmental assessments, climate resilience, and sustainable development solutions.
                </p>
              </div>
            </div>

            <div className={`group relative overflow-hidden rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1
              ${isDarkMode ? 'bg-slate-800/70 text-slate-200 border-slate-700 hover:bg-slate-800'
              : 'bg-white text-slate-900 border-slate-200'}
            `}>
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                ${isDarkMode ? 'bg-gradient-to-br from-blue-500/10 to-transparent'
                : 'bg-gradient-to-br from-blue-50/50 to-transparent'}
              `} />
              <div className="relative">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 mb-4 group-hover:scale-110 transition-transform duration-300
                  ${isDarkMode ? 'bg-blue-900/30 text-blue-300 ring-blue-700'
                  : 'bg-blue-50 text-blue-700 ring-blue-200'}
                `}>
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Community Impact</h3>
                <p className="text-sm leading-relaxed">
                  Inclusive stakeholder engagement, gender development, and community-centered approaches.
                </p>
              </div>
            </div>

            <div className={`group relative overflow-hidden rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1
              ${isDarkMode ? 'bg-slate-800/70 text-slate-200 border-slate-700 hover:bg-slate-800'
              : 'bg-white text-slate-900 border-slate-200'}
            `}>
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                ${isDarkMode ? 'bg-gradient-to-br from-purple-500/10 to-transparent'
                : 'bg-gradient-to-br from-purple-50/50 to-transparent'}
              `} />
              <div className="relative">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 mb-4 group-hover:scale-110 transition-transform duration-300
                  ${isDarkMode ? 'bg-purple-900/30 text-purple-300 ring-purple-700'
                  : 'bg-purple-50 text-purple-700 ring-purple-200'}
                `}>
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Research & Innovation</h3>
                <p className="text-sm leading-relaxed">
                  Data-driven insights, monitoring frameworks, and evidence-based development strategies.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Service Categories */}
      <section className={`relative py-12 sm:py-16
        ${isDarkMode ? 'bg-slate-900 text-white'
        : 'bg-white text-slate-900'}
      `}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <div key={category.title} className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${getColorClasses(category.color)}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold">{category.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className={`group rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5
                      ${isDarkMode ? 'bg-slate-800/70 text-slate-200 border-slate-700 hover:bg-slate-800'
                      : 'bg-white text-slate-900 border-slate-200'}
                    `}>
                      <h3 className="text-lg font-semibold mb-3">{service.name}</h3>
                      <p className="leading-relaxed mb-4">{service.description}</p>
                      
                      {service.features && (
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
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
              Let's work together to deliver sustainable development solutions.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 transition"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className={`inline-flex items-center gap-2 rounded-md border px-6 py-3 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 transition
                  ${isDarkMode ? 'border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700'
                  : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'}
                `}
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
