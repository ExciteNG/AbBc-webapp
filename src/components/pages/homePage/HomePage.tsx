import React from 'react';
//HOME COMPONENTS
import Hero from './homeComponents/HeroSection';
import AboutSection from './homeComponents/AboutSection';
import TechnologySection from './homeComponents/TechnologySection';
import ProductSection from './homeComponents/ProductSection';
import OurTeam from './homeComponents/OurTeam';
import News from './homeComponents/News';

const HomePage = () => {
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
