import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AboutObjectives = () => {
  return (
    <section className='w-full'>
        <div className='w-full px-4 md:px-16 py-10'>
            <div className='w-full flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-14 py-5 md:py-10'>
                <div><Button className='text-secondary rounded-full bg-white hover:bg-secondary hover:text-white border border-secondary text-xs lg:text-sm lg:px-7'>About</Button></div>
                <div className='md:w-[75%]'>
                    <p className=' text-slate-700 font-light text-xs md:text-sm lg:text-base self-center'>
                    AbBC Therapies is developing a next-generation therapeutic platform that combines ADC tumor targeting with granzyme B immunotherapy into a single hybrid molecule. Our innovative TGI platform aims to deliver more effective and safer treatments, with seven products in development targeting oncology and ophthalmology. We are committed to transforming the treatment landscape for patients with cancer and other serious diseases.
                    </p>
                </div>
            </div>
            <div className='w-full flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-14  py-5 md:py-10'>
                <div><Button className='text-secondary rounded-full bg-white hover:bg-secondary hover:text-white border border-secondary text-xs lg:text-sm lg:px-7'>Mission</Button></div>
                <div className='md:w-[75%]'>
                    <p className=' text-slate-700 font-light text-xs md:text-sm lg:text-base self-center'>
                    Our core mission is to develop next-generation targeted therapeutics that combine the precision of ADCs with the potent killing mechanism of immunotherapies. We aim to overcome the limitations of current treatments, delivering effective and safe therapies for patients with cancer and other devastating diseases.
                    </p>
                </div>
            </div>
            <div className='w-full flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-14  py-5 md:py-10'>
                <div><Button className='text-secondary rounded-full bg-white hover:bg-secondary hover:text-white border border-secondary text-xs lg:text-sm lg:px-7'>Vision</Button></div>
                <div className='md:w-[75%]'>
                    <p className=' text-slate-700 font-light text-xs md:text-sm lg:text-base self-center'>
                    Our vision is to transform the treatment landscape for oncology and ophthalmology patients by advancing our innovative TGI platform. We strive to provide targeted therapies with improved efficacy and reduced side effects, ultimately improving patient outcomes and quality of life.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutObjectives;
