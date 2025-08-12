
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CoreValues from './components/CoreValues';
import AboutPreview from './components/AboutPreview';
import ServicesPreview from './components/ServicesPreview';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
      
    </>
  )
}

export default App
