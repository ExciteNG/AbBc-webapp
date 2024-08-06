import React from 'react';
//HOME COMPONENTS
import Hero from './homeSections/HeroSection';
import AboutSection from './homeSections/AboutSection';
import TechnologySection from './homeSections/TechnologySection';
import ProductSection from './homeSections/ProductSection';
import OurTeam from './homeSections/OurTeam';
import News from './homeSections/News';

export const HomePage = () => {
  return (
    <section className='text-center'>
      <Hero />
      <AboutSection />
      <TechnologySection />
      <ProductSection />
      <OurTeam />
      <News />
    </section>
  )
}

export default HomePage;
