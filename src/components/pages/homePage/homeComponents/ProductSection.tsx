import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import videospace from "@/../public/assets/Video space.svg"
import { Button } from '@/components/ui/button';

export const ProductSection = () => {
  return (
    <section className='py-10'>
        <div className='bg-slate-100 px-4 flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-evenly md:items-center py-10 md:h-40'>
            <div className='-mt-2 self-start'>
              <Link href={'/product_pl'}>
              <Button className='text-xs lg:text-sm text-secondary bg-white border border-secondary hover:text-white rounded-full hover:bg-secondary lg:px-7'>Product</Button>
              </Link>
            </div>
            <div className='md:w-[70%] text-slate-700 font-light text-xs md:text-sm lg:text-base'>
                <p>
                    We excel on bioprocessing and manufacturing, enabling streamlined and scalable production of biopharmaceuticals, vaccines and other biological products.
                </p>
            </div>
            <div className='self-end'>
            <Link href={'/'}><Button className=' text-xs lg:text-sm text-secondary bg-white border border-secondary hover:text-white rounded-full hover:bg-secondary lg:px-7'>Learn More</Button></Link>
            </div>
        </div>
        <div className='py-16 px-4 md:px-10 w-full'>
            {/* <video src="/"></video> */}
            <Image src={videospace} alt='videospace' className='w-fit mx-auto'/>
        </div>
    </section>
  )
};

export default ProductSection;
