'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import abbcLogo from '../../../public/assets/AbBC logo full color 1.svg';
import { usePathname } from 'next/navigation';
import { RxHamburgerMenu } from "react-icons/rx";
import { Menubar, MenubarMenu, MenubarContent, MenubarItem, MenubarTrigger, MenubarSeparator, MenubarSub, MenubarSubContent } from '../ui/menubar';


export const Header = () => {
    const pathName = usePathname();

  return (
    <header className='w-full'>
        <nav className='bg-slate-50 w-full px-2 md:px-6 lg:px-10 py-3 flex justify-between items-center'>
            <div>
              <Link href={'/'}>
                  <Image src={abbcLogo} alt='abbc_logo' width={130} height={60} className='w-20 md:w-28'/>
              </Link>
            </div>
            <div className='hidden w-[60%] md:flex md:justify-between'>
                <div className={`text-primary text-xs md:text-sm lg:text-base ${pathName === '/' && 'font-semibold'} hover:font-semibold cursor-pointer navItem`}>
                    <Link href="/">Home</Link></div>
                <div className={`text-primary text-xs md:text-sm lg:text-base ${pathName === '/about' && 'font-semibold'} hover:font-semibold cursor-pointer navItem`}>
                    <Link href="/about">About</Link></div>
                <div className={`text-primary text-xs md:text-sm lg:text-base ${pathName === '/technology' && 'font-semibold'} hover:font-semibold cursor-pointer navItemT`}>
                    <Link href="/technology">Technology</Link></div>
                <div className={`text-primary text-xs md:text-sm lg:text-base ${pathName === 'product_pl' && 'font-semibold'} hover:font-semibold cursor-pointer navItemP`}>
                    <Link href="/product_pl">Product & Pipeline</Link></div>
                <div className={`text-primary text-xs md:text-sm lg:text-base ${pathName === 'news' && 'font-semibold'} hover:font-semibold cursor-pointer navItem`}>
                    <Link href="/news">News</Link></div>
            </div>
            <div className='hidden md:block'>
                <Button className='bg-primary'><Link href={'/contact'}>Contact</Link></Button>
            </div>
            <div className='md:hidden mr-1'>
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>
                            <RxHamburgerMenu className='text-primary' size={32}/>
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem className='font-semibold text-primary'>
                                <Link href="/">Home</Link>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem className='font-semibold text-primary'>
                                <Link href="/about">About</Link>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem className='font-semibold text-primary'>
                                <Link href="/technology">Technology</Link>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem className='font-semibold text-primary'>
                                <Link href="/product_pl">Pipeline & Products</Link>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem className='font-semibold text-primary'>
                                <Link href="/news">News</Link>
                            </MenubarItem>
                            <MenubarSeparator />
                                <MenubarSub>
                                        <MenubarItem className=''>
                                            <Button className='mx-auto'><Link href={'/contact'}>Contact Us</Link></Button>
                                        </MenubarItem>

                                </MenubarSub>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </nav>
    </header>
  );
};

export default Header;

