import React from 'react'
import { Mail, Phone, Calendar } from 'lucide-react'
import { useDarkMode } from '../contexts/DarkModeContext'

export default function ContactCTA() {
  const { isDarkMode } = useDarkMode()
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name') || ''
    const email = formData.get('email') || ''
    const organization = formData.get('organization') || ''
    const message = formData.get('message') || ''

    const subject = encodeURIComponent('Consultation Request - SIP')
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\n\nMessage:\n${message}`
    )

    // TODO: Replace with your real inbox address
    const to = 'info@example.com'
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className={`relative overflow-hidden transition-all duration-300 py-16 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-slate-900 to-slate-800' 
        : 'bg-gradient-to-b from-sky-50 to-white'
    }`}>
      <div className={`pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-600/30' : 'bg-sky-300/30'
      }`} />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium shadow-sm backdrop-blur transition-all duration-300 ${
            isDarkMode 
              ? 'border-slate-600 bg-slate-800/70 text-slate-300' 
              : 'border-sky-200 bg-white/70 text-sky-800'
          }`}>
            Book a consultation
          </span>
          <h2 className={`mt-4 text-3xl md:text-4xl font-bold transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>Let’s work together</h2>
          <p className={`mt-2 max-w-2xl mx-auto transition-colors duration-300 ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Tell us briefly about your needs. We’ll get back to you to schedule a discovery call.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 ${
            isDarkMode 
              ? 'border-slate-700 bg-slate-800' 
              : 'border-slate-200 bg-white'
          }`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>Full name</label>
                <input id="name" name="name" type="text" required className="mt-1 w-full outline-0 p-2 border  rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>Email</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border p-2 outline-0 border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="organization" className={`block text-sm font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>Organization</label>
                <input id="organization" name="organization" type="text" className="mt-1 w-full rounded-md border p-2 outline-0 border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={`block text-sm font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>Message</label>
                <textarea id="message" name="message" rows="5" required className="mt-1 w-full rounded-md border p-2 outline-0 border-slate-300 focus:border-sky-500 focus:ring-sky-500" />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2">
                <Mail className="h-4 w-4" /> Send request
              </button>
              <a href="#services" className={`inline-flex items-center gap-2 rounded-md border px-6 py-3 font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                isDarkMode 
                  ? 'border-slate-600 bg-slate-700 text-slate-300 hover:bg-sky-600 hover:text-white hover:border-sky-600' 
                  : 'border-slate-200 bg-white text-sky-700 hover:bg-sky-50'
              }`}>
                Learn more
              </a>
            </div>
          </form>

          <div className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 ${
            isDarkMode 
              ? 'border-slate-700 bg-slate-800' 
              : 'border-slate-200 bg-white'
          }`}>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ring-1 transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-slate-700 text-slate-300 ring-slate-600' 
                    : 'bg-sky-50 text-sky-700 ring-sky-200'
                }`}><Mail className="h-5 w-5" /></div>
                <div>
                  <p className={`text-sm font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>Email us</p>
                  <a href="mailto:info@example.com" className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-sky-400' : 'text-sky-700'
                  }`}>info@example.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ring-1 transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-slate-700 text-slate-300 ring-slate-600' 
                    : 'bg-sky-50 text-sky-700 ring-sky-200'
                }`}><Phone className="h-5 w-5" /></div>
                <div>
                  <p className={`text-sm font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>Call</p>
                  <a href="tel:+0000000000" className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-sky-400' : 'text-sky-700'
                  }`}>+00 000 0000</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ring-1 transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-slate-700 text-slate-300 ring-slate-600' 
                    : 'bg-sky-50 text-sky-700 ring-sky-200'
                }`}><Calendar className="h-5 w-5" /></div>
                <div>
                  <p className={`text-sm font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>Availability</p>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>Mon–Fri, 9:00–17:00 EAT</p>
                </div>
              </div>
            </div>

            <div className={`mt-6 rounded-xl p-4 ring-1 transition-all duration-300 ${
              isDarkMode 
                ? 'bg-slate-800/50 ring-slate-600' 
                : 'bg-sky-50 ring-sky-100'
            }`}>
              <p className={`text-sm transition-colors duration-300 ${
                isDarkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                Prefer a scheduled call? Email us a few time slots that work for you and we’ll confirm a meeting invite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
