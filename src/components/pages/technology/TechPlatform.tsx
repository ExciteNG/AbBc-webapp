import Link from 'next/link'
import React from 'react'

type Props = {}

export default function TechPlatform({}: Props) {
  return (
    <section className='px-2 md:px-6 lg:px-10 my-8 text-[#475467]'>
      <h2 className='font-semibold text-lg mb-4'>Targeted Therapeutic Platform</h2>
      <p>Our ADC technology harnesses the specificity of antibodies to deliver cytotoxic agents directly to tumor cells. By conjugating antibodies with granzyme molecules, we ensure that the therapeutic agent is delivered precisely where it&apos;s needed, minimizing damage to healthy tissues and enhancing treatment effectiveness.</p>
      <div className="my-12 w-full flex flex-col gap-6">
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="flex-1 min-h-[20rem] bg-[#D9D9D9]"></div>
          <div className="flex-1 flex gap-2 flex-col">
            <h3 className="text-lg font-semibold">Antibody Drug Conjugates/Immunotoxins</h3>
            <Link href="">Learn More</Link>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="flex-1 min-h-[20rem] bg-[#D9D9D9]"></div>
          <div className="flex-1 flex gap-2 flex-col">
            <h3 className="text-lg font-semibold">Targeted Granzyme B Platform:  A Class Beyond Cytotoxic Agents</h3>
            <Link href="">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  )
}