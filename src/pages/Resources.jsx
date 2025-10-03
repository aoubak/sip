import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, BookOpen, Wrench, ArrowRight, Download } from 'lucide-react'
import { useDarkMode } from '../contexts/DarkModeContext'

export default function Resources() {
  const { isDarkMode } = useDarkMode();
  const resourceCategories = [
    {
      title: 'Policy & Governance Documents',
      icon: <FileText className="h-8 w-8 text-sky-600" />,
      description: 'Essential policies and governance frameworks for sustainable development.',
      items: [
        {
          name: 'Safeguarding Policy',
          description: 'Outlines SIP\'s commitment to preventing and responding to all forms of harassment, exploitation, and abuse.',
          type: 'PDF',
          link: '#'
        },
        {
          name: 'Agricultural Cooperatives Policy – Somalia',
          description: 'Framework for the formation, management, and development of agricultural cooperatives.',
          type: 'PDF',
          link: '#'
        },
        {
          name: 'Disaster Risk Management Policy – 6 Districts in Puntland',
          description: 'Localized policies to strengthen disaster preparedness and response.',
          type: 'PDF',
          link: '#'
        }
      ]
    },
    {
      title: 'Research & Technical Reports',
      icon: <BookOpen className="h-8 w-8 text-sky-600" />,
      description: 'Comprehensive research findings and technical assessments.',
      items: [
        {
          name: 'Baseline Socio-Economic Survey Reports',
          description: 'Data on livelihoods, income, education, and cultural practices in project areas.',
          type: 'PDF',
          link: '#'
        },
        {
          name: 'Environmental Impact Assessment Reports',
          description: 'Assessments conducted for infrastructure, agriculture, and community development projects.',
          type: 'PDF',
          link: '#'
        },
        {
          name: 'Climate Risk & Vulnerability Assessments',
          description: 'Analysis of climate hazards and recommended adaptation strategies.',
          type: 'PDF',
          link: '#'
        }
      ]
    },
    {
      title: 'Tools & Templates',
      icon: <Wrench className="h-8 w-8 text-sky-600" />,
      description: 'Practical tools and templates for development projects.',
      items: [
        {
          name: 'Community Involvement Plan Template',
          description: 'Guideline for engaging communities in development projects.',
          type: 'DOC/PDF',
          link: '#'
        },
        {
          name: 'Monitoring & Evaluation Framework Template',
          description: 'Indicators and data collection tools for project tracking.',
          type: 'DOC/PDF',
          link: '#'
        }
      ]
    }
  ]

  return (
    <section className="pt-20">
      {/* Hero Section */}
      <div className={`relative py-20 overflow-hidden
        ${isDarkMode ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white'
        : 'bg-gradient-to-br from-sky-50 to-indigo-50 text-slate-900'}
      `}>
        <div className={`pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full blur-3xl
          ${isDarkMode ? 'bg-sky-500/10' : 'bg-sky-200/40'}
        `} />
        <div className={`pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full blur-3xl
          ${isDarkMode ? 'bg-indigo-500/10' : 'bg-indigo-200/40'}
        `} />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Resources & Publications
            </h1>
            <p className="text-xl leading-relaxed">
              Reports, policies, and tools that reflect our commitment to sustainable development.
            </p>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className={`py-16
        ${isDarkMode ? 'bg-slate-900 text-white'
        : 'bg-white text-slate-900'}
      `}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg leading-relaxed">
              SIP Consultancy believes in transparency and knowledge-sharing. 
              We make available selected documents, publications, and policies to support stakeholders, 
              partners, and the public in advancing sustainable development and environmental management in Somalia.
            </p>
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      <div className={`py-16
        ${isDarkMode ? 'bg-slate-800 text-white'
        : 'bg-slate-50 text-slate-900'}
      `}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <div key={index} className={`rounded-2xl p-8 shadow-sm border hover:shadow-lg transition-shadow
                ${isDarkMode ? 'bg-slate-800/70 text-slate-200 border-slate-700 hover:bg-slate-800'
                : 'bg-white text-slate-900 border-slate-200'}
              `}>
                <div className="flex items-center gap-4 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <p className="mb-6">{category.description}</p>
                
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className={`border rounded-lg p-4 hover:border-sky-300 transition-colors
                      ${isDarkMode ? 'border-slate-700 hover:border-sky-400' : 'border-slate-200'}
                    `}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h4 className="font-semibold mb-2">{item.name}</h4>
                          <p className="text-sm mb-3">{item.description}</p>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                            ${isDarkMode ? 'bg-sky-900/50 text-sky-300' : 'bg-sky-100 text-sky-800'}
                          `}>
                            {item.type}
                          </span>
                        </div>
                        <a
                          href={item.link}
                          className={`inline-flex items-center justify-center w-10 h-10 rounded-full border transition-colors
                            ${isDarkMode 
                              ? 'border-slate-600 text-slate-300 hover:bg-sky-600 hover:text-white hover:border-sky-600'
                              : 'border-slate-200 text-slate-600 hover:bg-sky-600 hover:text-white hover:border-sky-600'
                            }
                          `}
                          aria-label={`Download ${item.name}`}
                        >
                          <Download className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className={`py-20
        ${isDarkMode ? 'bg-slate-900 text-white'
        : 'bg-white text-slate-900'}
      `}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Looking for a specific report or template?
            </h2>
            <p className="text-lg mb-8">
              Contact us to request more information about our resources and publications.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-sky-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
