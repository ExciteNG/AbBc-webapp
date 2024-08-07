import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Heroimage from '@/../public/assets/backgroundheroimage.svg';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <div className="relative">
      <Image src={Heroimage} alt='heroImage' className='w-full object-cover h-[90vh]'/>
      <div className='absolute top-0 w-full h-full justify-center flex items-center opasClass'>
        <div className='space-y-6'>
          <div className='space-y-3'>
            <h1 className='md:font-semibold text-white md:text-5xl lg:font-bold lg:text-7xl'>Pioneering Next-Generation</h1>
            <h1 className='md:font-semibold text-white md:text-5xl lg:font-bold lg:text-7xl'>Targeted Therapeutics.</h1>
          </div>
          
           <div className='text-white px-2 text-xs md:text-sm lg:tracking-wider'>
              <p>Developing Next-Gen ADC Products That Combine Antibody Targeting With Immune Cell</p>
              <p>Granzyme Killing Into A Single Hybrid Molecule</p>
           </div>
           
           
           <Button className='rounded-full bg-transparent border border-slate-100 hover:border-primary text-xs lg:text-sm'>
           <Link href={'/'}> Learn More</Link> </Button>
          
        </div>
      </div>  
    </div>
  )
};

export default Hero;
