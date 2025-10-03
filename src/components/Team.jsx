import React from 'react'
import { Linkedin, Twitter, Mail } from 'lucide-react'

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0]?.toUpperCase())
    .slice(0, 2)
    .join('')
}

const team = [
  {
    name: 'Abshir Ali Muse',
    role: 'Managing Director',
    bio:
      '15+ years of leadership spanning governance, environmental safeguards, and social development, guiding multi-stakeholder initiatives to measurable outcomes.',
    imgSrc: '',
    social: { linkedin: '#', twitter: '#', email: '#' },
  },
  {
    name: 'James Mwangi',
    role: 'Project Manager',
    bio:
      '10+ years leading ESIA, environmental audits, and large-scale infrastructure projects with a focus on quality assurance and compliance.',
    imgSrc: '',
    social: { linkedin: '#', twitter: '#', email: '#' },
  },
  {
    name: 'Mohamed Abdiaziz Cartan',
    role: 'Environmental & Social Safeguards Expert',
    bio:
      'Specializes in safeguards planning, monitoring, and capacity building to align projects with environmental and social standards.',
    imgSrc: '',
    social: { linkedin: '#', twitter: '#', email: '#' },
  },
  {
    name: 'Kaynadiid Mohamed Abdiaziz',
    role: 'Monitoring & Evaluation Expert',
    bio:
      'Designs robust MEL frameworks, indicators, and learning loops to drive adaptive, evidence-based decision-making.',
    imgSrc: '',
    social: { linkedin: '#', twitter: '#', email: '#' },
  },
  {
    name: 'Fatima Mohamed Hassan',
    role: 'Community Engagement & GBV Expert',
    bio:
      'Facilitates inclusive engagement and protection mainstreaming, ensuring safe participation and accountability.',
    imgSrc: '',
    social: { linkedin: '#', twitter: '#', email: '#' },
  },
  {
    name: 'Farhia Yasin Ali',
    role: 'Governance & Policy Expert',
    bio:
      'Advises on institutional strengthening, policy development, and good governance practices across sectors.',
    imgSrc: '',
    social: { linkedin: '#', twitter: '#', email: '#' },
  },
  {
    name: 'Mohamed Isse Samatar',
    role: 'Food Security & Livelihoods Expert',
    bio:
      'Leads programming on resilient livelihoods, market systems, and food security assessments.',
    imgSrc: '',
    social: { linkedin: '#', twitter: '#', email: '#' },
  },
  {
    name: 'Peter Luwangula',
    role: 'Data Analyst & Reporting Expert',
    bio:
      'Transforms complex datasets into actionable insights and clear reporting for program performance and learning.',
    imgSrc: '',
    social: { linkedin: '#', twitter: '#', email: '#' },
  },
]

export default function Team({ isDarkMode = false }) {
  return (
    <section id="team" className={`relative py-16 overflow-hidden
      ${isDarkMode ? 'bg-gradient-to-b from-slate-900 to-slate-800 text-white'
      : 'bg-gradient-to-b from-white to-sky-50/40 text-slate-900'}
    `}>
      <div className={`pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl
        ${isDarkMode ? 'bg-sky-500/10' : 'bg-sky-200/40'}
      `} />
      <div className="container mx-auto px-4 sm:px-6 ">
        <div className="flex justify-center">
          <span className={`border text-sm rounded-full px-4 py-1
            ${isDarkMode ? 'bg-slate-800/70 border-slate-700 text-slate-200'
            : 'bg-sky-200 border-sky-800 text-sky-800'}
          `}>
            Our Experts
          </span>
        </div>
        <div className="text-center mt-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Our Team</h2>
          <p className="max-w-2xl mx-auto mt-2">
            A multidisciplinary team committed to delivering impact with integrity, professionalism, and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {team.map((member) => (
            <article
              key={member.name}
              className={`group rounded-2xl border p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-0.5
                ${isDarkMode ? 'bg-slate-800/70 text-slate-200 border-slate-700 hover:bg-slate-800'
                : 'bg-white text-slate-900 border-slate-200'}
              `}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  {member.imgSrc ? (
                    <img
                      src={member.imgSrc}
                      alt={`${member.name} photo`}
                      className={`h-14 w-14 rounded-xl object-cover ring-1
                        ${isDarkMode ? 'ring-slate-600' : 'ring-slate-200'}
                      `}
                      loading="lazy"
                    />
                  ) : (
                    <div className={`h-14 w-14 rounded-xl bg-gradient-to-br from-sky-600 to-indigo-600 text-white flex items-center justify-center font-bold ring-1
                      ${isDarkMode ? 'ring-slate-600' : 'ring-sky-200'}
                    `}>
                      {getInitials(member.name)}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{member.name}</h3>
                  <p className="text-xs text-sky-700 font-medium mt-0.5">{member.role}</p>
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed">{member.bio}</p>

              <div className="mt-4 flex items-center gap-2">
                <a
                  href={member.social.linkedin}
                  aria-label={`${member.name} on LinkedIn`}
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full border transition
                    ${isDarkMode 
                      ? 'border-slate-600 text-slate-300 hover:bg-sky-600 hover:text-white hover:border-sky-600'
                      : 'border-slate-200 text-slate-700 hover:bg-sky-600 hover:text-white hover:border-sky-600'
                    }
                  `}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={member.social.twitter}
                  aria-label={`${member.name} on Twitter`}
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full border transition
                    ${isDarkMode 
                      ? 'border-slate-600 text-slate-300 hover:bg-sky-600 hover:text-white hover:border-sky-600'
                      : 'border-slate-200 text-slate-700 hover:bg-sky-600 hover:text-white hover:border-sky-600'
                    }
                  `}
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href={member.social.email}
                  aria-label={`Email ${member.name}`}
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full border transition
                    ${isDarkMode 
                      ? 'border-slate-600 text-slate-300 hover:bg-sky-600 hover:text-white hover:border-sky-600'
                      : 'border-slate-200 text-slate-700 hover:bg-sky-600 hover:text-white hover:border-sky-600'
                    }
                  `}
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
