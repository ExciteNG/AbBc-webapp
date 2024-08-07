import React from "react";
import Image from "next/image";
import Link from "next/link";
import { INews } from "@/lib/types";

type Props = {
  newsItem: INews;
};

export const NewsCard = ({ newsItem }: Props) => {
  return (
    <div className="space-y-4">
      <div className="relative w-full h-60 rounded-md overflow-hidden">
        <Image
          src={newsItem.titleImage}
          alt="news cover"
          layout="fill"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="border-l-2 border-secondary text-start pl-2">
        <p className="font-medium text-slate-700 text-sm">
          {newsItem._createdAt}
        </p>
        <p className="font-medium text-slate-700 test-sm">{newsItem.title}</p>
        <p className="text-slate-700 font-light text-xs md:text-sm">
          {newsItem.description}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
