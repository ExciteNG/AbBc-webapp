'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import microscopeImage from '@/../public/assets/microscopeview.svg';

const mockData = [
    {
        title:'Antibody Drug Conjugates/Immunotoxins',
        description:' One of the most successful and promising anti-cancer therapeutic  classes are antibodies inducing tumor cell depletion'
    },
    {
        title:'Targeted Granzyme B Platform',
        description:'Granzyme B targeted biological conjugates using existing  antibodies and other ligands improves the therapeutic outcomes  and circumvents manufacturing complexities.'
    },  
    
];

export const TechnologySection = () => {
    const [slide, setSlide] = useState<number>(1);
    
    function onSlide(evt:React.BaseSyntheticEvent){
        // console.log('onSlide', evt.currentTarget.id);
        if(evt.currentTarget.id === 'next'){
        setSlide(slide + 1)
        }else{
        setSlide(slide - 1)
        }
    };

  return (
    <section className='px-4 md:px-16 space-y-3 py-5'>
        <div className='text-start'>
            <Link href={'/technology'}>
               <Button className='text-secondary text-xs md:text-sm bg-white border border-secondary md:px-7 hover:bg-secondary hover:text-white rounded-full'>Technology</Button>
            </Link>
        </div>
        <div className='w-[90%] mx-auto md:relative md:pb-20'>
            <Image src={microscopeImage} alt='view on microscope' className='w-full object-cover' />
            <div className='w-full py-10 md:py-0 md:px-10 lg:px-24 md:absolute md:bottom-2'>
            <Carousel>
                <CarouselContent >
                 {Array.from(mockData).map((techData, item )=> {
                    // console.log(item)
                    // setSlide(item);
                    return(
                        <CarouselItem key={item}>
                            <div className='w-[290px] lg:w-[400px]'>
                               <Card className='rounded-3xl border border-slate-100'>
                                 <CardContent className=' h-[200px] md:h-[240px] lg:h-[340px] py-4 lg:py-14 bg-slate-100 rounded-3xl'>
                                    <div className='space-y-5 text-start'>
                                        <h3 className='text-primary text-sm md:text-base font-semibold'>{techData.title}</h3>
                                        <p className='text-slate-700 font-light text-xs md:text-sm lg:text-base'>
                                          {techData.description}
                                        </p>
                                        <div>
                                        <Link href={'/'}><Button className='text-secondary text-xs lg:text-sm bg-white border border-secondary md:px-7 hover:bg-secondary hover:text-white rounded-full'>Learn More</Button></Link>
                                        </div>   
                                    </div>
                                 </CardContent>
                               </Card>
                          </div>
                        </CarouselItem>
                    )
                 })}
                </CarouselContent>
                <div className='relative'>
                    <span id='next' onClick={onSlide}>
                       <CarouselNext  className='border border-secondary text-secondary hover:text-secondary translate-y-10'/>
                    </span>
                
                <div className='flex space-x-4 justify-end absolute right-[43px] -bottom-7 md:bottom-[30.3px]'>
                   {mockData.map((_,indx)=> {
                        
                     return  (
                     <div 
                     key={indx} 
                     className={`border border-secondary w-6 rounded-xl h-1 ${slide === (indx+1) && "bg-secondary"}`}
                     />)
                     } )}
                </div>
                <span id='prev' onClick={onSlide}>
                <CarouselPrevious  className={`border border-secondary text-secondary hover:text-secondary translate-y-10 
                    ${mockData.length === 2 && 'right-[120px]'}
                    ${mockData.length === 3 && 'right-[160px]'}
                    ${mockData.length === 4 && 'right-[200px]'}
                    ${mockData.length === 5 && 'right-[240px]'}
                    `}/>
                </span>
                
                </div>
                

                
               
            </Carousel>
        </div>
        </div>
        
    </section>
  )
}

export default TechnologySection;
