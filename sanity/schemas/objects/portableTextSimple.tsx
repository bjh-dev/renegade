import { LinkIcon } from "@sanity/icons";
import { defineType } from "sanity";

const SmallStyle = (props: any) => (
  <span style={{ fontSize: "0.85rem" }}>{props.children}</span>
);

export default defineType({
  title: "Text",
  name: "portableTextSimple",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Small", value: "small", component: SmallStyle },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "External link",
            icon: LinkIcon,
            options: {
              modal: { type: "dialog" },
            },
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ["http", "https", "mailto", "tel"],
                  }),
              },
              {
                title: "Open in new tab",
                name: "blank",
                description: "Read https://css-tricks.com/use-target_blank/",
                type: "boolean",
              },
            ],
          },
          {
            name: "internalLink",
            type: "object",
            title: "Internal link",
            icon: LinkIcon,
            options: {
              modal: { type: "dialog" },
            },
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "Reference",
                to: [
                  { type: "home" },
                  // other types you may want to link to
                ],
              },
            ],
          },
        ],
      },
    },
  ],
});
