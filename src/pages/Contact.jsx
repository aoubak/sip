import React from 'react'
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react'
import { useDarkMode } from '../contexts/DarkModeContext'

export default function Contact() {
  const { isDarkMode } = useDarkMode();
  return (
    <section className="pt-20">
      {/* Hero */}
      <div className={`relative py-16 overflow-hidden
        ${isDarkMode ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white'
        : 'bg-gradient-to-br from-sky-50 to-indigo-50 text-slate-900'}
      `}>
        <div className={`pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full blur-3xl
          ${isDarkMode ? 'bg-sky-500/10' : 'bg-sky-200/40'}
        `} />
        <div className={`pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full blur-3xl
          ${isDarkMode ? 'bg-indigo-500/10' : 'bg-indigo-200/40'}
        `} />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className={`py-16
        ${isDarkMode ? 'bg-slate-900 text-white'
        : 'bg-white text-slate-900'}
      `}>
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className={`rounded-2xl border shadow-sm p-6 sm:p-8
              ${isDarkMode ? 'bg-slate-800/70 text-slate-200 border-slate-700'
              : 'bg-white text-slate-900 border-slate-200'}
            `}>
              <h2 className="text-xl font-semibold mb-6">Send a message</h2>
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Full name</label>
                    <input id="name" name="name" type="text" required className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500
                      ${isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-slate-200 placeholder-slate-400'
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                      }
                    `} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input id="email" name="email" type="email" required className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500
                      ${isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-slate-200 placeholder-slate-400'
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                      }
                    `} />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <input id="subject" name="subject" type="text" className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500
                    ${isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-slate-200 placeholder-slate-400'
                      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                    }
                  `} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea id="message" name="message" rows="6" required className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500
                    ${isDarkMode 
                      ? 'bg-slate-700 border-slate-600 text-slate-200 placeholder-slate-400'
                      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                    }
                  `}></textarea>
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
            <div className={`rounded-2xl border shadow-sm p-6
              ${isDarkMode ? 'bg-slate-800/70 text-slate-200 border-slate-700'
              : 'bg-white text-slate-900 border-slate-200'}
            `}>
              <h3 className="text-lg font-semibold mb-4">Contact details</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full border
                    ${isDarkMode 
                      ? 'bg-sky-900/30 text-sky-300 border-sky-700'
                      : 'bg-sky-50 text-sky-700 border-sky-100'
                    }
                  `}>
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm">{isDarkMode ? 'text-slate-400' : 'text-slate-500'}</p>
                    <p className="font-medium">{isDarkMode ? 'text-slate-200' : 'text-slate-800'}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full border
                    ${isDarkMode 
                      ? 'bg-sky-900/30 text-sky-300 border-sky-700'
                      : 'bg-sky-50 text-sky-700 border-sky-100'
                    }
                  `}>
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm">{isDarkMode ? 'text-slate-400' : 'text-slate-500'}</p>
                    <p className="font-medium">{isDarkMode ? 'text-slate-200' : 'text-slate-800'}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full border
                    ${isDarkMode 
                      ? 'bg-sky-900/30 text-sky-300 border-sky-700'
                      : 'bg-sky-50 text-sky-700 border-sky-100'
                    }
                  `}>
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm">{isDarkMode ? 'text-slate-400' : 'text-slate-500'}</p>
                    <p className="font-medium">{isDarkMode ? 'text-slate-200' : 'text-slate-800'}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full border
                    ${isDarkMode 
                      ? 'bg-sky-900/30 text-sky-300 border-sky-700'
                      : 'bg-sky-50 text-sky-700 border-sky-100'
                    }
                  `}>
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm">{isDarkMode ? 'text-slate-400' : 'text-slate-500'}</p>
                    <p className="font-medium">{isDarkMode ? 'text-slate-200' : 'text-slate-800'}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className={`rounded-2xl border p-6
              ${isDarkMode 
                ? 'bg-gradient-to-br from-slate-800 to-slate-700 text-slate-200 border-slate-700'
                : 'bg-gradient-to-br from-sky-50 to-indigo-50 text-slate-900 border-slate-200'
              }
            `}>
              <h3 className="text-lg font-semibold mb-2">Prefer email?</h3>
              <p className="mb-4">Write to us directly and we'll get back within 2 business days.</p>
              <a href="mailto:info@sipconsultancy.so" className="text-sky-700 font-medium hover:underline">info@sipconsultancy.net</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
