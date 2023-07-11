import { defineField, defineType } from "sanity";

export default defineType({
  name: "formBuilderField",
  title: "Form Builder Field",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Field Name",
      type: "string",
      description: "The name of the field",
    }),
    defineField({
      name: "label",
      title: "Field Label",
      type: "string",
      description: "The label to display for the field",
    }),
    defineField({
      name: "type",
      title: "Field Type",
      type: "string",
      description: "The type of field to display",
      options: {
        list: [
          { title: "Text", value: "text" },
          { title: "Email", value: "email" },
          { title: "Phone", value: "phone" },
          { title: "Number", value: "number" },
          { title: "Date", value: "date" },
          { title: "Time", value: "time" },
          { title: "Textarea", value: "textarea" },
          { title: "Select", value: "select" },
          { title: "Radio", value: "radio" },
          { title: "Checkbox", value: "checkbox" },
          { title: "File", value: "file" },
        ],
      },
    }),
    defineField({
      name: "options",
      title: "Field Options",
      type: "array",
      hidden: ({ parent }) =>
        parent?.type !== "select" && parent?.type !== "radio",
      of: [
        {
          type: "string",
        },
      ],
    }),
    defineField({
      name: "required",
      title: "Required",
      description: "Is this field required?",
      type: "boolean",
    }),
    defineField({
      name: "placeholder",
      title: "Placeholder",
      description: "Placeholder text for the field",
      type: "string",
    }),
    defineField({
      name: "helperText",
      title: "Helper Text",
      description: "Text to display below the field",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "label",
      subtitle: "name",
    },
  },
});
