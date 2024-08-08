// ./src/sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == 'blog'] | order(_createdAt desc) {
  _id,
    title,
    titleImage,
    _createdAt,
    "slug": slug.current,
    "description": smallDescription,
}`;

// export const POST_QUERY = groq`*[_type == "blog" && slug.current == $slug][0]{
//   title, body, mainImage
// }`;
