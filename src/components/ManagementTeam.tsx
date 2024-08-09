import { managementTeamMembers } from "@/lib/teamMembers";
import React from "react";
import Image from "next/image";

const ManagementTeam = () => {
  return (
    <div className="mt-4 px-8 text-center">
      <p className="text-[#3F51F4] text-xs">The team</p>
      <h2 className="text-4xl font-bold mt-2 mb-6 ">
        Meet Our Management Team
      </h2>
      <div className=" mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {managementTeamMembers.map((member) => {
          return (
            <article key={member.id}>
              <div>
                <Image
                  src={member.img}
                  alt={member.fullName}
                  className="w-full"
                />
              </div>
              <div className="text-left">
                <h4 className="font-bold mt-4">{member.fullName}</h4>
                <p className="text-[#3F51F4] text-sm mt-1">{member.role}</p>
                <p className="text-xs mt-4 text-[#475467]">
                  {member.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default ManagementTeam;
