import React from "react";
import Image from "next/image";
// import Link from "next/link";
// import Heroimage from "@/../public/assets/backgroundheroimage.svg";
import Heroimage from "@/../public/assets/techHeroImg.png";
// import { Button } from "@/components/ui/button";

const TechHero = () => {
  return (
    <div className="relative">
      <Image
        src={Heroimage}
        alt="heroImage"
        className="w-full object-cover h-[90vh]"
      />
      <div className="absolute top-0 w-full h-full flex items-center opasClass px-2 md:px-6 lg:px-10">
        <div className="space-y-2">
          <div className="space-y-3">
            <h1 className="text-white md:text-5xl font-bold lg:text-7xl">
              Technology
            </h1>
            {/* <h1 className='md:font-semibold text-white md:text-5xl lg:font-bold lg:text-7xl'>Targeted Therapeutics.</h1> */}
          </div>

          <div className="text-white px-2 md:text-base lg:text-lg lg:tracking-wider w-full max-w-[26rem]">
            <p>
              &quot;Our ADC platform harnesses the precision of antibodies to
              deliver granzyme-based cytotoxic agents directly to tumor cells,
              sparing healthy tissues and reducing side effects.&quot;
            </p>
            {/* <p>Granzyme Killing Into A Single Hybrid Molecule</p> */}
          </div>

          {/* <Button className="rounded-full bg-transparent border border-slate-100 hover:border-primary text-xs lg:text-sm">
            <Link href={"/"}> Learn More</Link>{" "}
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default TechHero;
