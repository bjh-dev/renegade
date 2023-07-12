import { FaCog } from "react-icons/fa";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Site Settings",
  type: "document",
  icon: FaCog,
  groups: [
    {
      name: "general",
      title: "General Settings",
      default: true,
    },
    {
      name: "contact",
      title: "Contact & Social Settings",
    },
  ],
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      group: "general",
    }),
    defineField({
      name: "siteUrl",
      title: "Site URL",
      type: "url",
      group: "general",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "googleMapsLink",
      title: "Google Maps Link",
      type: "url",
      group: "contact",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "address",
      group: "contact",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      group: "contact",
      of: [
        {
          name: "socialLink",
          type: "object",
          fields: [
            {
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "Facebook", value: "facebook" },
                  { title: "Instagram", value: "instagram" },
                  { title: "YouTube", value: "youtube" },
                ],
              },
            },
            {
              name: "url",
              title: "URL Link",
              type: "url",
            },
          ],
        },
      ],
    }),
  ],
});
