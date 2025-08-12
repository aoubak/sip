import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolledY = window.scrollY || document.documentElement.scrollTop
      setIsVisible(scrolledY > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={[
        'fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full',
        'h-12 w-12 shadow-lg border border-sky-200 text-white',
        'bg-gradient-to-br from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700',
        'transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      ].join(' ')}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
