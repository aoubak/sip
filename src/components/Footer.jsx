import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'
import { useDarkMode } from '../contexts/DarkModeContext'

export default function Footer() {
  const { isDarkMode } = useDarkMode()
  const year = new Date().getFullYear()

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className={`relative border-t border-slate-700 transition-all duration-300 ${
      isDarkMode 
        ? 'bg-slate-900 text-slate-200' 
        : 'bg-slate-800 text-slate-200'
    }`}>
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#" className="inline-block font-extrabold text-2xl tracking-tight text-white">SIP.</a>
            <p className="mt-3 text-sm text-slate-300/90 max-w-sm">
              Somali Insight Consultancy partners with institutions and communities to deliver impact-driven solutions in environment, DRR, and social development.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-slate-300 hover:text-white transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-3 space-y-3 text-sm">
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 text-sky-400 mt-0.5" /><a href="mailto:info@example.com" className="hover:text-white">info@example.com</a></li>
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 text-sky-400 mt-0.5" /><a href="tel:+0000000000" className="hover:text-white">+00 000 0000</a></li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-sky-400 mt-0.5" /><span>Mogadishu, Somalia</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Follow</h4>
            <div className="mt-3 flex items-center gap-2">
              <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition"><Linkedin className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition"><Twitter className="h-4 w-4" /></a>
            </div>
            <a href="#contact" className="mt-4 inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700 transition">Book a consultation</a>
          </div>
        </div>

        <hr className="my-10 border-slate-800" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">© {year} Somali Insight Consultancy (SIP). All rights reserved.</p>
          <div className="text-xs text-slate-400 space-x-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
