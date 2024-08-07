'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import newsImage from '@/../public/assets/newsImage.svg';
import NewsThumb from './NewsThumb';

const mockDataNews = [
    {
        date:'July 24, 2024',
        title:'Genetics Breakthrough',
        description:"Revolutionizes DNA Sequencing Technology for the DNA Engineering and improvement",
        img: newsImage
    },
    {
        date:'July 24, 2024',
        title:'Genetics Breakthrough',
        description:"Revolutionizes DNA Sequencing Technology for the DNA Engineering and improvement",
        img: newsImage
    },
    {
        date:'July 24, 2024',
        title:'Genetics Breakthrough',
        description:"Revolutionizes DNA Sequencing Technology for the DNA Engineering and improvement",
        img: newsImage
    },
    {
        date:'July 24, 2024',
        title:'Genetics Breakthrough',
        description:"Revolutionizes DNA Sequencing Technology for the DNA Engineering and improvement",
        img: newsImage
    }
]

export const News = () => {
  const [news, setNews] = useState(mockDataNews);

  return (
    <section className='space-y-4 px-4 md:px-16 md:py-20 pb-14'>
        <div className='text-start'>
            <Link href={'/'}>
               <Button className='text-secondary text-xs bg-white md:text-sm border border-secondary md:px-7 hover:bg-secondary hover:text-white rounded-full'>News</Button>
            </Link>
        </div>
        <div className='grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-4 px-4'>
            {news.map((newItem, key )=> {
            return (
            <div key={key}>
                <NewsThumb newsItem={newItem}/>
            </div>)}
            )}
        </div>
    </section>
  )
};

export default News;
