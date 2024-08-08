import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
// import { urlForImage } from "@/sanity/lib/image";

import { Metadata } from "next";
import NewsHero from "@/components/pages/news/Hero";
import NewsSection from "@/components/pages/news/News";
import { INews } from "@/lib/types";

async function getPosts() {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
  _id,
    title,
    titleImage,
    _createdAt,
    "slug": slug.current,
    "description": smallDescription,
}`;

  const data = await client.fetch(query);
  return data;
}

// const mockDataNews: INews[] = [
//   {
//     _createdAt: "July 24, 2024",
//     title: "Genetics Breakthrough",
//     description:
//       "Revolutionizes DNA Sequencing Technology for the DNA Engineering and improvement",
//     content:
//       "Revolutionizes DNA Sequencing Technology for the DNA Engineering and improvement",
//     titleImage: "/assets/newsImage.svg",
//   },
//   {
//     _createdAt: "July 24, 2024",
//     title: "Genetics Breakthrough",
//     description:
//       "Revolutionizes DNA Sequencing Technology for the DNA Engineering and improvement",
//     content:
//       "Revolutionizes DNA Sequencing Technology for the DNA Engineering and improvement",
//     titleImage: "/assets/newsImage.svg",
//   },
//   {
//     _createdAt: "July 24, 2024",
//     title: "Genetics Breakthrough",
//     description:
//       "Revolutionizes DNA Sequencing Technology for the DNA Engineering and improvement",
//     content:
//       "Revolutionizes DNA Sequencing Technology for the DNA Engineering and improvement",
//     titleImage: "/assets/newsImage.svg",
//   },
//   {
//     _createdAt: "July 24, 2024",
//     title: "Genetics Breakthrough",
//     description:
//       "Revolutionizes DNA Sequencing Technology for the DNA Engineering and improvement",
//     content:
//       "Revolutionizes DNA Sequencing Technology for the DNA Engineering and improvement",
//     titleImage: "/assets/newsImage.svg",
//   },
// ];

export default async function News() {
  const blogs = await getPosts();
  console.log("Blogs?News");
  console.log("Blogs: ", blogs);
  return (
    <section>
      <NewsHero />
      <NewsSection title="Latest news" newsData={blogs} />
      {/* <NewsSection title="Upcomming news" newsData={mockDataNews} /> */}
    </section>
  );
}

