import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      image: image(),
      // .refine((img) => img.width < 1200, {
      //   message: "La imagen debe ser menor de 1200px",
      // })

      // relacion
      // author: z.string(),
      author: reference("author"),

      // relacion
      tags: z.array(z.string()),

      // boolean
      isDraft: z.boolean().default(false),
    }),
});

const authorCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image(),
    }),
});

export const collections = {
  blog: blogCollection,
  author: authorCollection,
};
