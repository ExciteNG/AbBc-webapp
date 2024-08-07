import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ourTeam from "@/../public/assets/ourteam.svg"

export const OurTeam = () => {
  return (
    <section className='w-full px-4 md:px-10 py-10'>
      <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row justify-center items-center md:space-x-16 lg:space-x-32'>
        <div>
          <Image src={ourTeam} alt='ourteam' className='w-fit'/>
        </div>
        <div className='text-start space-y-2'>
          <h1 className='text-secondary'>Meet Our Team</h1>
          <p className='text-slate-700 font-light text-xs md:text-sm lg:text-base'>We built a team with deep expertise in AbBC Therapeutical</p>
          <Button className='text-secondary text-xs bg-white md:text-sm border border-secondary md:px-7 hover:bg-secondary hover:text-white rounded-full'>
          <Link href={'/team'}>Our Team</Link>
          </Button>
        </div>
      </div>
    </section>
  )
};

export default OurTeam;
