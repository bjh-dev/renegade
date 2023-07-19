import { defineField, defineType } from "sanity";

export default defineType({
  name: "textWithImage",
  title: "Text With Image",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "imageSimple",
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "portableTextSimple",
    }),
  ],
});
