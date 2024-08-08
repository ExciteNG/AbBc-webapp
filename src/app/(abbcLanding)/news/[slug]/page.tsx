import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { INews } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
// import PortableText from "@portabletext/react"

async function getData(slug: string) {
  const query = `*[_type == 'blog' && slug.current == '${slug}'] {
  _id,
    title,
    titleImage,
    content,
    _createdAt,
    "slug": slug.current,
    "description": smallDescription,
}[0]`;

  const data = await client.fetch(query);
  return data as INews;
}

const NewsSlug = async ({ params }: { params: { slug: string } }) => {
  const blog = await getData(params.slug);
  // console.log(blog);
  return (
    <div className="space-y-5">
      <div className="relative w-full h-[60dvh] bg-primary bg-cover bg-center">
        <div className="w-full h-full px-5 md:px-10 flex flex-col justify-center gap-2 text-white">
          <h1 className="font-extrabold text-4xl md:text-6xl">
            {/* Geneticus Breakthrough Revolutionizes DNA Sequencing Technology. */}

            {blog.title}
          </h1>
        </div>
      </div>

      <MaxWidthWrapper className="container mx-auto prose prose-lg p-4">
        {blog.content ? <PortableText value={blog.content} /> : null}

        {blog.titleImage ? (
          <Image
            priority
            src={urlFor(blog.titleImage).width(300).height(300).url()}
            alt="news-image"
            width={300}
            height={300}
            className="float-right m-0 w-1/3 ml-4 rounded-lg"
          />
        ) : null}
      </MaxWidthWrapper>

      {/* <MaxWidthWrapper className="prose prose-xl prose-li:marker:text-primary">
        <PortableText value={blog.content} />
      </MaxWidthWrapper> */}
    </div>
  );
};

export default NewsSlug;
