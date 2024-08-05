import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import abbcLogo from '../../../public/assets/AbBC logo full color 1.svg'
import Xtwitter from '../../../public/assets/twittericon.svg';
import Linkedin from '../../../public/assets/ linkedinicon.svg';
import Facebook from "../../../public/assets/facebookicon.svg"

export const Footer = () => {
  return (
    <footer className=' bg-slate-50'>
        <section>
            <div className='px-3 md:px-10 lg:px-20 h-40'>
                <div className='h-2/3 flex items-center'>
                   <div className='w-fit '>
                      <Image src={abbcLogo} alt='abbc_logo' width={130} height={60} className='w-20 md:w-28'/>
                   </div>
                   <div className='hidden w-[50%] md:ml-[10%] lg:ml-[14%] md:flex md:justify-between'>
                       <div className='text-primary focus:font-semibold hover:font-medium cursor-pointer text-xs lg:text-sm'>Home</div>
                       <div className='text-primary focus:font-semibold hover:font-medium cursor-pointer text-xs lg:text-sm'>About</div>
                       <div className='text-primary focus:font-semibold hover:font-medium cursor-pointer text-xs lg:text-sm'>Technology</div>
                       <div className='text-primary focus:font-semibold hover:font-medium cursor-pointer text-xs lg:text-sm'>Product & PipeLine</div>
                       <div className='text-primary focus:font-semibold hover:font-medium cursor-pointer text-xs lg:text-sm'>News</div>
                   </div>
                </div>
                <div className='flex space-x-5 justify-center items-center'>
                    <Link href="#"><Image src={Xtwitter} alt='xIcon' className='w-5 md:w-fit'/></Link>
                    <Link href="#"><Image src={Linkedin} alt='Linkedinicon' className='w-5 md:w-fit'/></Link>
                    <Link href="#"><Image src={Facebook} alt='facebookicon' className='w-5 md:w-fit'/></Link>
                </div>
            </div>
            <div className='bg-primary py-5 px-5'>
                <p className='text-wrap text-xs lg:text-sm text-slate-100 text-center font-light'><Link href={'#'} className='underline'>Privacy Policy</Link>, <Link href={'#'} className='underline'>Terms Of Service</Link> &copy; 2024 AbBC Therapies. All Rights Reserved.</p>
            </div>
        </section>
    </footer>
  )
};

export default Footer;
