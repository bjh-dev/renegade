import { defineField, defineType } from "sanity";

export default defineType({
  name: "formBuilder",
  title: "Form Builder",
  type: "object",
  fields: [
    defineField({
      name: "formId",
      title: "Form ID",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Form Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Form Description",
      type: "portableTextSimple",
    }),
    defineField({
      name: "fields",
      title: "Form Fields",
      type: "array",
      of: [
        {
          type: "formBuilderField",
        },
      ],
    }),
    defineField({
      name: "submitText",
      title: "Submit Button Text",
      type: "string",
    }),
    defineField({
      name: "successMessage",
      title: "Success Message",
      type: "portableTextSimple",
    }),
    defineField({
      name: "errorMessage",
      title: "Error Message",
      type: "portableTextSimple",
    }),
  ],
});
