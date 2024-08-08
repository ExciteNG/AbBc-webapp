import React from "react";
import TechHero from "./TechHero";
import TechPlatform from "./TechPlatform";
import Image from "next/image";
import videospace from "@/../public/assets/Video space.svg";
import News from "../homePage/homeComponents/News";

type Props = {};

export default function TechPage({}: Props) {
  return (
    <section>
      <TechHero />
      <p className="px-2 md:px-6 lg:px-10 my-8 text-[#475467]">
        At AbBC Therapies, we are pioneering a next-generation targeted
        therapeutic platform that combines the tumor-targeting precision of
        Antibody-Drug Conjugates (ADCs) with the potent killing mechanism of
        immune cells. Our innovative approach merges these technologies into a
        single, powerful hybrid molecule designed to improve efficacy and reduce
        side effects in cancer treatment.
      </p>
      <TechPlatform />

      <div className="py-16 px-4 md:px-10 w-full">
        {/* <video src="/"></video> */}
        <Image src={videospace} alt="videospace" className="w-fit mx-auto" />
      </div>

      <News /> 
    </section>
  );
}
