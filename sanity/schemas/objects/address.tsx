import { defineField, defineType } from "sanity";

export default defineType({
  name: "address",
  title: "Address",
  type: "object",
  fields: [
    defineField({
      name: "street",
      title: "Street",
      type: "string",
    }),
    defineField({
      name: "suburb",
      title: "Suburb",
      type: "string",
    }),
    defineField({
      name: "state",
      title: "State",
      type: "string",
      options: {
        list: [
          { title: "ACT", value: "ACT" },
          { title: "NSW", value: "NSW" },
          { title: "NT", value: "NT" },
          { title: "QLD", value: "QLD" },
          { title: "SA", value: "SA" },
          { title: "TAS", value: "TAS" },
          { title: "VIC", value: "VIC" },
        ],
      },
    }),
    defineField({
      name: "postcode",
      title: "Postcode",
      type: "string",
    }),
  ],
});
