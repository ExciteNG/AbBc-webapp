import React from 'react';
import AboutHero from './aboutComponents/AboutHero';
import OurTeam from '../homePage/homeComponents/OurTeam';
import AboutObjectives from './aboutComponents/AboutObjectives';

export const AboutPage = () => {
  return (
    <section>
        <AboutHero />
        <AboutObjectives />
        <OurTeam />
    </section>
  )
};

export default AboutPage;
