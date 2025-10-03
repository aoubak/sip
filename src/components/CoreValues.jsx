import React from 'react'
import { ShieldCheck, Briefcase, Users, RefreshCw, Equal, Flag } from 'lucide-react'
import { useDarkMode } from '../contexts/DarkModeContext'

export default function CoreValues() {
  const { isDarkMode } = useDarkMode()
  const coreValues = [
    {
      title: 'Integrity',
      description: 'We uphold transparency, ethics, and accountability in every engagement.',
      Icon: ShieldCheck,
    },
    {
      title: 'Professionalism',
      description: 'We deliver with diligence, quality, and respect for all stakeholders.',
      Icon: Briefcase,
    },
    {
      title: 'Teamwork',
      description: 'We collaborate closely with partners and communities to amplify impact.',
      Icon: Users,
    },
    {
      title: 'Adaptability',
      description: 'We respond to changing contexts with agility and practical solutions.',
      Icon: RefreshCw,
    },
    {
      title: 'Gender Equity',
      description: 'We embed inclusivity and equitable participation across our work.',
      Icon: Equal,
    },
    {
      title: 'Patriotism',
      description: 'We are committed to progress and sustainable development for our communities.',
      Icon: Flag,
    },
  ]

  return (
    <section id="values" className={`relative transition-all duration-300 py-16 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-slate-900 to-slate-800' 
        : 'bg-gradient-to-b from-white to-sky-50/40'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium shadow-sm backdrop-blur transition-all duration-300 ${
            isDarkMode 
              ? 'border-slate-600 bg-slate-800/70 text-slate-300' 
              : 'border-sky-200 bg-white/70 text-sky-800'
          }`}>
            <span className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
              isDarkMode ? 'bg-slate-400' : 'bg-sky-500'
            }`} />
            Core Values
          </div>
          <h2 className={`mt-4 text-2xl sm:text-3xl font-bold tracking-tight transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            What we stand for
          </h2>
          <p className={`mt-3 max-w-2xl transition-colors duration-300 ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            These principles guide how we work with our partners, deliver our services, and create lasting community impact.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreValues.map(({ title, description, Icon }) => (
            <div
              key={title}
              className={`group relative overflow-hidden rounded-xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                isDarkMode 
                  ? 'border-slate-700 bg-slate-800' 
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex h-12 w-12 p-3 items-center justify-center rounded-lg ring-1 transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-slate-700 text-sky-400 ring-slate-600' 
                    : 'bg-sky-50 text-sky-700 ring-sky-200'
                }`}>
                  <Icon className="h-6 w-6 " aria-hidden="true" />
                </div>
                <div>
                  <h3 className={`text-base font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>{title}</h3>
                  <p className={`mt-1 text-sm leading-relaxed transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>{description}</p>
                </div>
              </div>

              <div className={`pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-80 ${
                isDarkMode ? 'bg-slate-700' : 'bg-sky-100'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
