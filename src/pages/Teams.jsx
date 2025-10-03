import React from 'react'
import Team from '../components/Team'
import { useDarkMode } from '../contexts/DarkModeContext'

export default function Teams() {
  const { isDarkMode } = useDarkMode();
  return (
    <section className="pt-20">
      <Team isDarkMode={isDarkMode} />
    </section>
  )
}
