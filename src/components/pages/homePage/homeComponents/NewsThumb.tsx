import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  date: string;
  title: string;
  description: string;
  img: string;
};
const NewsThumb = ({ newsItem }: { newsItem: Props }) => {
  return (
    <div className="space-y-4">
      <div className="rounded-md">
        <Image src={newsItem.img} alt="news cover" className="w-full" />
      </div>
      <div className="border-l-2 border-secondary text-start pl-2">
        <p className="font-medium text-slate-700 text-sm">{newsItem.date}</p>
        <p className="font-medium text-slate-700 test-sm">{newsItem.title}</p>
        <p className="text-slate-700 font-light text-xs md:text-sm">
          {newsItem.description}
        </p>
      </div>
    </div>
  );
};

export default NewsThumb;
