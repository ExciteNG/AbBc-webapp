"use client";
import Image from "next/image";
import React, { useState } from "react";
import ManagementTeam from "../ManagementTeam";
import AdvisoryTeam from "../AdvisoryTeam";

const TeamPage = () => {
  const [managementTeam, setManagementTeam] = useState<boolean>(true);
  const [advisoryTeam, setAdvisoryTeam] = useState<boolean>(false);

  const toggleManagementTeam = () => {
    setManagementTeam(true);
    setAdvisoryTeam(false);
  };
  const toggleAdvisoryTeam = () => {
    setManagementTeam(false);
    setAdvisoryTeam(true);
  };
  return (
    <section className="mb-20">
      <div className="relative h-[601px] flex justify-start items-center">
        <Image
          src={"/assets/team-banner.svg"}
          layout="fill"
          alt="team banner"
          objectFit="cover"
          //   className="object-contain"
        />
        <div className="absolute pl-8 text-white">
          <h1 className="text-5xl font-bold mb-2 tracking-wider">Our Team </h1>
          <p className="w-[45%] capitalize">
            Our team consists of leading experts in biotechnology, oncology, and
            pharmacology, all committed to bringing innovative therapies to
            market.
          </p>
        </div>
      </div>
      <div className="mt-4 ml-8 flex gap-4">
        <button
          type="button"
          onClick={toggleManagementTeam}
          className={
            managementTeam
              ? "bg-[#456689] text-white px-2 py-2 rounded-md border-2"
              : "px-2 py-2 rounded-md border-2 text-[#456689]"
          }
          disabled={managementTeam}
        >
          Management Team
        </button>
        <button
          type="button"
          onClick={toggleAdvisoryTeam}
          className={
            advisoryTeam
              ? "bg-[#456689] text-white px-2 py-2 rounded-md border-2"
              : "px-2 py-2 rounded-md border-2 text-[#456689]"
          }
          disabled={advisoryTeam}
        >
          Advisory Team
        </button>
      </div>
      {managementTeam && <ManagementTeam />}
      {advisoryTeam && <AdvisoryTeam />}
    </section>
  );
};

export default TeamPage;
