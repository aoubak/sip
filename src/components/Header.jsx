import { Link, useLocation } from 'react-router-dom'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', type: 'route', to: '/' },
    { label: 'About', type: 'route', to: '/about' },
    { label: 'Services', type: 'hash', href: '#services' },
    { label: 'Projects', type: 'hash', href: '#projects' },
    { label: 'Team', type: 'hash', href: '#team' },
    { label: 'Resources', type: 'hash', href: '#resources' },
    { label: 'Contact', type: 'hash', href: '#contact' },
  ]

  const closeMenu = () => setIsOpen(false)

  const linkBaseClass =
    'text-sm px-3 py-2 rounded-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500'
  const linkActiveClass = 'bg-sky-600 text-white'
  const linkInactiveClass = 'hover:bg-sky-600/90 hover:text-white text-white/90'

  return (
    <section className="fixed top-0 left-0 w-full z-50 md:bg-white/60 md:shadow-sm md:backdrop-blur-xl  ">
      <header className="container mx-auto flex items-center shadow-md backdrop-blur bg-white/65 md:bg-transparent md:shadow-none md:backdrop-blur-none justify-between px-4 py-3">
        <Link to="/" className="font-extrabold text-2xl md:text-3xl tracking-tight text-sky-800">
          SIP.
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 bg-sky-800/95 px-2 py-3 rounded-xl">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.type === 'route' ? (
                  <Link
                    to={item.to}
                    className={[
                      linkBaseClass,
                      location.pathname === item.to ? linkActiveClass : linkInactiveClass,
                    ].join(' ')}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className={[linkBaseClass, linkInactiveClass].join(' ')}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="md:hidden text-sky-800 bg-sky-100/80 border border-sky-800/20 rounded-lg p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          onClick={() => setIsOpen((s) => !s)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={[
          'md:hidden origin-top transition-transform duration-200 ease-out',
          isOpen ? 'scale-y-100' : 'scale-y-0',
        ].join(' ')}
      >
        <div className="mx-4 mb-3 rounded-xl border border-slate-200 bg-white/95 shadow-lg backdrop-blur">
          <nav>
            <ul className="flex flex-col divide-y divide-slate-200">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.type === 'route' ? (
                    <Link
                      to={item.to}
                      onClick={closeMenu}
                      className="flex items-center justify-between px-4 py-3 text-slate-700 hover:bg-sky-50"
                    >
                      <span>{item.label}</span>
                      {location.pathname === item.to && (
                        <span className="ml-3 inline-flex items-center rounded bg-sky-100 px-2 py-0.5 text-xs font-medium text-sky-700">
                          Current
                        </span>
                      )}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="block px-4 py-3 text-slate-700 hover:bg-sky-50"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}
