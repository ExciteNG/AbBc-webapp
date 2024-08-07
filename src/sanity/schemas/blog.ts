import { Rule } from "sanity";

export const blog = {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title of blog article",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug of our blog article",
      options: { source: "title" },
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    { name: "titleImage", type: "image", title: "Title image" },
    {
      name: "smallDescription",
      type: "text",
      title: "Description of blog article",
      validation: (Rule: Rule) => Rule.max(200).error("Max 200 characters"),
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
      ],
    },
  ],
};
