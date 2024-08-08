import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import moleculeImage from '@/../public/assets/moleculeimage.svg';

const AboutSection = () => {
  return (
    <>
    <section className='py-10 bg-slate-100 '>
        <div className='flex flex-col space-y-4 md:flex-row md:justify-evenly md:items-center md:space-y-0 w-full md:h-[20vh] px-8 md:px-2'>
        <div className='self-start'>
            <Link href={'/about'}>
            <Button className='text-secondary rounded-full bg-white hover:bg-secondary hover:text-white border border-secondary text-xs lg:text-sm lg:px-7'>About</Button>
            </Link>
        </div>
        <div className=' md:w-[70%] text-slate-700 font-light text-xs md:text-sm lg:text-base self-center'>
            <p className=' text-justify'>AbBC Therapies is developing a next-generation therapeutic platform that combines ADC tumor targeting with granzyme B immunotherapy into a single hybrid molecule. Our innovative TGI platform aims to deliver more effective and safer treatments, with seven products in development targeting oncology and ophthalmology. We are committed to transforming the treatment landscape for patients with cancer and other serious diseases.

            </p>
        </div>
        <div className='self-end'>
            <Link href={'/'}>
            <Button className='text-secondary rounded-full bg-white hover:bg-secondary hover:text-white border border-secondary text-xs lg:text-sm lg:px-7' >Learn More</Button>
            </Link>
        </div>
        </div>
    </section>
    <section className=' bg-white w-full'>
        <div className='w-[90%] lg:w-[80%] py-10 flex flex-col-reverse space-y-reverse space-y-6  md:space-y-0 md:flex-row md:space-x-5 lg:space-x-0 items-center mx-auto'>
            <div className='md:w-2/4 space-y-6 text-slate-700 font-light text-xs md:text-sm lg:text-base'>
                <p>Our core mission is to develop next-generation targeted therapeutics that combine the precision of ADCs with the potent killing mechanism of immunotherapies. We aim to overcome the limitations of current treatments, delivering effective and safe therapies for patients with cancer and other devastating diseases.</p>
                <p>
                Our vision is to transform the treatment landscape for oncology and ophthalmology patients by advancing our innovative TGI platform. We strive to provide targeted therapies with improved efficacy and reduced side effects, ultimately improving patient outcomes and quality of life.
                </p>
            </div>
            <div className='md:w-1/2'>
                <Image src={moleculeImage} alt='molecule image' className='w-full md:w-fit md:float-end' />
            </div>
        </div>
    </section>
    </>
  )
};

export default AboutSection;
