import { defineField, defineType } from "sanity";

export default defineType({
  name: "membershipForm",
  title: "Membership Form",
  type: "object",
  fields: [
    defineField({
      name: "applicationForm",
      title: "Application Form",
      type: "formBuilder",
    }),
  ],
});
