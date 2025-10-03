import { Link, useLocation } from 'react-router-dom'
import React, { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useDarkMode } from '../contexts/DarkModeContext'

export default function Header() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const navItems = [
    { label: 'Home', type: 'route', to: '/' },
    { label: 'About', type: 'route', to: '/about' },
    { label: 'Services', type: 'route', to: '/services' },
    { label: 'Projects', type: 'route', to: '/projects' },
    { label: 'Team', type: 'route', to: '/team' },
    { label: 'Resources', type: 'route', to: '/resources' },
    { label: 'Contact', type: 'route', to: '/contact' },
  ]

  const closeMenu = () => setIsOpen(false)

  const linkBaseClass =
    'text-sm px-3 py-2 rounded-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500'
  const linkActiveClass = 'bg-sky-600 text-white'
  const linkInactiveClass = 'hover:bg-sky-600/90 hover:text-white text-white/90'

  return (
    <section className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isDarkMode 
        ? 'md:bg-slate-900/60 md:shadow-slate-900/20' 
        : 'md:bg-white/60 md:shadow-sm'
    } md:backdrop-blur-xl`}>
      <header className={`md:px-4 flex items-center shadow-md backdrop-blur justify-between px-4 py-3 transition-all duration-300 ${
        isDarkMode 
          ? 'bg-slate-800/65  md:shadow-none' 
          : 'bg-white/65 md:bg-transparent md:shadow-none'
      } md:backdrop-blur-none`}>
        <Link to="/" className={`font-extrabold text-2xl md:text-3xl tracking-tight transition-colors duration-300 ${
          isDarkMode ? 'text-blue-400' : 'text-sky-800'
        }`}>
          SIP.
        </Link>

        <nav className="hidden md:block">
          <ul className={`flex items-center gap-1 px-2 py-3 rounded-xl transition-all duration-300 ${
            isDarkMode ? 'bg-slate-700/95' : 'bg-sky-800/95'
          }`}>
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

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg bg-sky-100 hover:bg-sky-200 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors duration-200"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5 text-sky-800 dark:text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5 text-sky-800 dark:text-slate-300" />
          )}
        </button>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className={`md:hidden rounded-lg p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 transition-all duration-300 ${
            isDarkMode 
              ? 'text-slate-300 bg-slate-700/80 border border-slate-600/20' 
              : 'text-sky-800 bg-sky-100/80 border border-sky-800/20'
          }`}
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
        <div className={`mx-4 mb-3 rounded-xl border shadow-lg backdrop-blur transition-all duration-300 ${
          isDarkMode 
            ? 'border-slate-600 bg-slate-800/95' 
            : 'border-slate-200 bg-white/95'
        }`}>
          <nav>
            <ul className={`flex flex-col divide-y transition-all duration-300 ${
              isDarkMode ? 'divide-slate-600' : 'divide-slate-200'
            }`}>
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.type === 'route' ? (
                    <Link
                      to={item.to}
                      onClick={closeMenu}
                      className={`flex items-center justify-between px-4 py-3 transition-colors duration-300 ${
                        isDarkMode 
                          ? 'text-slate-300 hover:bg-slate-700' 
                          : 'text-slate-700 hover:bg-sky-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      {location.pathname === item.to && (
                        <span className={`ml-3 inline-flex items-center rounded px-2 py-0.5 text-xs font-medium transition-colors duration-300 ${
                          isDarkMode 
                            ? 'bg-blue-500/20 text-blue-300' 
                            : 'bg-sky-100 text-sky-700'
                        }`}>
                          Current
                        </span>
                      )}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className={`block px-4 py-3 transition-colors duration-300 ${
                        isDarkMode 
                          ? 'text-slate-300 hover:bg-slate-700' 
                          : 'text-slate-700 hover:bg-sky-50'
                      }`}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            
            {/* Mobile Dark Mode Toggle */}
            <div className="px-4 py-3 border-t border-slate-200 dark:border-slate-600">
              <button
                onClick={toggleDarkMode}
                className={`flex items-center justify-center w-full py-2 px-4 rounded-lg transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' 
                    : 'bg-sky-100 text-sky-700 hover:bg-sky-200'
                }`}
              >
                {isDarkMode ? (
                  <>
                    <Sun className="h-4 w-4 mr-2" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 mr-2" />
                    Dark Mode
                  </>
                )}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </section>
  )
}
