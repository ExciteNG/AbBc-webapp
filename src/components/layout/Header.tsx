import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import abbcLogo from "../../../public/assets/AbBC logo full color 1.svg";

export const Header = () => {
  return (
    <header className="w-screen">
      <nav className="bg-slate-50 w-full px-2 md:px-6 lg:px-10 py-3 flex justify-between items-center">
        <div>
          <Image
            src={abbcLogo}
            alt="abbc_logo"
            width={130}
            height={60}
            className="w-20 md:w-28"
          />
        </div>
        <div className="hidden w-[60%] md:flex md:justify-between">
          <div className="text-primary text-xs md:text-sm lg:text-base focus:font-semibold hover:font-semibold cursor-pointer">
            <Link href="/">Home</Link>
          </div>
          <div className="text-primary text-xs md:text-sm lg:text-base focus:font-semibold hover:font-semibold cursor-pointer">
            <Link href="/about">About</Link>
          </div>
          <div className="text-primary text-xs md:text-sm lg:text-base focus:font-semibold hover:font-semibold cursor-pointer">
            <Link href="/technology">Technology</Link>
          </div>
          <div className="text-primary text-xs md:text-sm lg:text-base focus:font-semibold hover:font-semibold cursor-pointer">
            <Link href="/product_pl">Product & Pipeline</Link>
          </div>
          <div className="text-primary text-xs md:text-sm lg:text-base focus:font-semibold hover:font-semibold cursor-pointer">
            <Link href="/news">News</Link>
          </div>
        </div>
        <div>
          <Button className="bg-primary">
            <Link href={"/contact"}>Contact</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

