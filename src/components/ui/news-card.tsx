import React from "react";
import Image from "next/image";
import Link from "next/link";
import { INews } from "@/lib/types";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  newsItem: INews;
};

export const NewsCard = ({ newsItem }: Props) => {
  return (
    <Link href={`/news/${newsItem.slug}`} className="space-y-4">
      <div className="relative w-full h-48 rounded-md overflow-hidden">
        <Image
          alt="news cover"
          layout="fill"
          src={urlFor(newsItem.titleImage).url()}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="border-l-2 border-secondary text-start pl-2">
        <p className="font-medium text-slate-700 text-sm">
          {newsItem._createdAt}
        </p>
        <p className="font-medium text-slate-700 test-sm">{newsItem.title}</p>
        <p className="line-clamp-3 text-slate-700 font-light text-xs md:text-sm">
          {newsItem.description}
        </p>
      </div>
    </Link>
  );
};

export default NewsCard;
