import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import aboutHero from "@/../public/assets/aboutHero.svg"

export const AboutHero = () => {
  return (
    <section>
       <div className='relative'>
           <Image src={aboutHero} alt='about image' className='w-full'/>
           <div className='absolute top-0 w-full h-full flex items-center'>
               <h1 className='md:font-semibold md:text-5xl lg:font-bold text-white w-60 ml-6 md:w-80 lg:ml-20 lg:text-7xl'>About, Mission & Vision</h1>
           </div>
       </div>
      
    </section>
  )
};

export default AboutHero;
