import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
// import { urlForImage } from "@/sanity/lib/image";

import { Metadata } from "next";

async function getPosts() {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
  _id,
    title,
    smallDescription,
    _createdAt,
    "currentSlug": slug.current,
    titleImage
}`;

  const data = await client.fetch(query);
  return data;
}

export default function News() {
  const blogs = getPosts();
  console.log("Blogs: ", blogs);
  return <section>news </section>;
}

