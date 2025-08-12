import React from 'react'
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section className="pt-20">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-sky-50 to-indigo-50 py-16 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Contact Us</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We’d love to hear from you. Send us a message and we’ll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Send a message</h2>
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full name</label>
                    <input id="name" name="name" type="text" required className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input id="email" name="email" type="email" required className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                  <input id="subject" name="subject" type="text" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows="6" required className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"></textarea>
                </div>
                <button type="submit" className="inline-flex items-center gap-2 bg-sky-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-sky-700 transition-colors">
                  <Send className="h-4 w-4" />
                  Send message
                </button>
              </form>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact details</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="font-medium text-slate-800">info@sipconsultancy.so</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-500">Phone</p>
                    <p className="font-medium text-slate-800">+252 61 000 0000</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-500">Office</p>
                    <p className="font-medium text-slate-800">Mogadishu, Somalia</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-500">Hours</p>
                    <p className="font-medium text-slate-800">Sun–Thu: 9:00–17:00</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-indigo-50 rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Prefer email?</h3>
              <p className="text-slate-600 mb-4">Write to us directly and we’ll get back within 2 business days.</p>
              <a href="mailto:info@sipconsultancy.so" className="text-sky-700 font-medium hover:underline">info@sipconsultancy.so</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
