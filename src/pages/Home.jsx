import React from 'react'
import Hero from '../components/Hero';
import CoreValues from '../components/CoreValues';
import AboutPreview from '../components/AboutPreview';
import ServicesPreview from '../components/ServicesPreview';
import ProjectsPreview from '../components/ProjectsPreview';
import Team from '../components/Team';
import ContactCTA from '../components/ContactCTA';


export default function Home() {
  return (
    <section>
      <Hero/>
      <CoreValues/>
      <AboutPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <Team />
      <ContactCTA />
    </section>
  )
}
