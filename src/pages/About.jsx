import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../assets/images'
import { Target, Globe2, ShieldCheck, Users, Cpu, Map, BarChart3, CheckCircle2, Leaf } from 'lucide-react'

export default function About() {
 
  const introPoints = [
    'Environmental Management',
    'Resettlement Action Plans',
    'Occupational Health and Safety',
    'Disaster Risk Reduction',
    'Policy Development',
    'Climate Change Adaptation',
    'Capacity Building for public and private institutions',
    'Project Monitoring & Evaluation',
  ]

  const capabilities = [
    'Environmental Studies & Impact Assessments',
    'Community Consultation & Social Studies',
    'Socio-Economic Research',
    'Gender Development & Inclusion',
    'Monitoring & Evaluation',
    'Disaster Risk Reduction',
    'Feasibility Studies & Needs Assessments',
  ]

  const reasons = [
    '10+ years of proven experience across Somalia’s development sectors.',
    'Multidisciplinary experts with international and local project experience.',
    'Strong track record with international clients including UN agencies, NGOs, and development banks.',
    'Compliance with Somali tax regulations and legal requirements.',
  ]

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative isolate min-h-[42vh] flex items-center justify-center overflow-hidden pt-24">
        <img
          src={images.heroImg}
          alt="SIP team in the field"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">About Somali Insight Consultancy (SIP)</h1>
          <p className="mt-3 text-slate-200 text-base md:text-lg">
            Building safer and sustainable communities since 2015
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative bg-gradient-to-b from-white to-sky-50/40 py-8 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs font-medium text-sky-800 shadow-sm backdrop-blur">
                Who we are
              </div>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Somali Insight Consultancy (SIP) is a multi-disciplinary consulting firm established in 2015 with the primary focus of building safer and sustainable communities by providing sound, practical solutions in:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
                {introPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-sky-600 shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                SIP has earned a strong reputation as a trusted provider of sustainable environmental and disaster management solutions in Somalia, working alongside government institutions, development agencies, NGOs, and the private sector.
              </p>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="pointer-events-none absolute -top-6 -right-6 h-40 w-40 rounded-full bg-sky-200/40 blur-2xl" />
              
              <div className="relative bg-white/90 backdrop-blur rounded-2xl border border-slate-200 p-6 shadow-lg">
                <h3 className="text-base font-semibold text-slate-900 mb-4">At a glance</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-700 ring-1 ring-sky-200">
                      <Leaf className="h-4 w-4" />
                    </div>
                    <span>Established 2015</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-700 ring-1 ring-sky-200">
                      <Users className="h-4 w-4" />
                    </div>
                    <span>Multidisciplinary experts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-700 ring-1 ring-sky-200">
                      <Map className="h-4 w-4" />
                    </div>
                    <span>Nationwide operations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="relative bg-white py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Globe2 className="h-6 w-6 text-sky-700" />
                <h3 className="text-lg font-semibold text-slate-900">Vision</h3>
              </div>
              <p className="mt-2 text-slate-700 text-sm leading-relaxed">
                To be a leading high-level institutional consultancy firm in agricultural development, environmental science, and environmental & social compliance monitoring.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-sky-700" />
                <h3 className="text-lg font-semibold text-slate-900">Mission</h3>
              </div>
              <p className="mt-2 text-slate-700 text-sm leading-relaxed">
                To offer high-quality, cutting-edge consultancy services in environmental management and agriculture.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-semibold text-slate-900">Core Values</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Integrity','Professionalism','Teamwork','Adaptability','Gender Equity','Patriotism'].map((v) => (
                <span key={v} className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-200">
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative bg-gradient-to-b from-white to-sky-50/50 py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs font-medium text-sky-800 shadow-sm backdrop-blur">
            Our Approach
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3"><Users className="h-5 w-5 text-sky-700" /><h5 className="font-semibold text-slate-900">Tailored Expert Teams</h5></div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">We assemble expert teams for each project to ensure technical excellence, professionalism, and client-focused delivery.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3"><Cpu className="h-5 w-5 text-sky-700" /><h5 className="font-semibold text-slate-900">Advanced Tooling</h5></div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">We combine local knowledge with GIS, remote sensing, and statistical analysis to produce accurate, actionable results.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-sky-700" /><h5 className="font-semibold text-slate-900">Sustainable, On-time Delivery</h5></div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">We emphasize stakeholder engagement, sustainability, and delivery within time and budget constraints.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative bg-white py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end flex-wrap gap-3">
            <h3 className="text-2xl font-bold text-slate-900">Our Capabilities</h3>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap) => (
              <div key={cap} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-lg transition">
                <div className="flex items-start gap-3">
                  <BarChart3 className="h-5 w-5 text-sky-700" />
                  <p className="text-sm text-slate-800 leading-relaxed">{cap}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With SIP */}
      <section className="relative bg-gradient-to-b from-white to-sky-50/50 py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-slate-900">Why Work With SIP</h3>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {reasons.map((r) => (
              <li key={r} className="inline-flex items-start gap-2 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-700" />
                <span className="text-sm leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-white py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Partner with SIP Consultancy for sustainable and impactful development solutions.</h3>
          <div className="mt-6">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center rounded-md bg-sky-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
