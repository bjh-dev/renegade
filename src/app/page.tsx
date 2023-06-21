import Animation from "@/components/Animation";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { getHomePage, getSettings } from "@/lib/sanity.fetchers";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

export async function generateMetadata() {
  const metaData = await getHomePage();
  const settingsData = await getSettings();
  const [settings, meta] = await Promise.all([settingsData, metaData]);

  const openGraphImages = meta?.seo.image
    ? [
        {
          url: builder.image(meta.seo.image).width(800).height(600).url(),
          width: 800,
          height: 600,
          alt: meta.seo.image.alt,
        },
        {
          // Facebook recommended size
          url: builder.image(meta.seo.image).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: meta.seo.image.alt,
        },
        {
          // Square 1:1
          url: builder.image(meta.seo.image).width(600).height(600).url(),
          width: 600,
          height: 600,
          alt: meta.seo.image.alt,
        },
      ]
    : [];

  return {
    title: meta.seo.title || meta.title || "",
    description: meta.seo.description || meta.description || "",
    generator: "Next.js",
    applicationName: "Next.js",
    referrer: "origin-when-cross-origin",
    keywords: [],
    authors: [{ name: "Bryan Hickey", url: "https://www.bjh.dev/" }],
    alternates: {},
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: meta.seo.title || meta.title || "",
      description: meta.seo.description || meta.description || "",
      url:
        process.env.NODE_ENV === "production"
          ? `${settings.siteUrl}`
          : `http://localhost:3000/`,
      siteName: settings.title || "",
      images: openGraphImages || [],
      locale: "en-AU",
      type: "website",
    },
    // other: {
    // 	'fb:app_id': 412883455509207,
    // },
    themeColor: "#00845b",
    msTileColor: "#00845b",
    manifest: "/site.webmanifest.json",
  };
}
export default function Home() {
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center space-y-12">
      <div className="text-center text-primary">
        <Animation fade delay={0.5} duration={3}>
          <Image
            className="mx-auto my-6 h-auto w-64"
            src="/images/crest.svg"
            width={600}
            height={600}
            alt="Renegade BJJ"
          />
        </Animation>
        <Animation fade delay={1} duration={2}>
          <h1 className="text-6xl font-black tracking-tight">Renegade</h1>
        </Animation>

        <Animation fade slideInBottom delay={1} duration={1}>
          <h2 className="mt-2 font-sans text-2xl font-bold text-black">
            The Next Revolution
          </h2>
        </Animation>
        <Animation fade delay={2} duration={1}>
          <p className="mb-2 mt-6 text-gray-700">
            Membership applications are now open.
          </p>
          <p className="mb-2 text-gray-700">
            Enquire today at{" "}
            <a className="underline" href="mailto:info@renegadebjj.com.au">
              info@renegadebjj.com.au
            </a>
            .
          </p>
        </Animation>
      </div>
      <Animation fade delay={2} duration={1}>
        <div className="text-gray-400">
          <div className="mx-auto my-4 flex items-center justify-center space-x-6">
            <a
              href="https://www.facebook.com/RMMA3031/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-center transition-colors duration-300 ease-in-out hover:text-primary"
            >
              <FaFacebook className="mx-auto mb-2 h-9 w-8" />
            </a>
            <a
              href="https://www.instagram.com/renegade.bjj/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-center transition-colors duration-300 ease-in-out hover:text-primary"
            >
              <FaInstagram className="mx-auto mb-2 h-9 w-8" />
            </a>
          </div>
          <p className="text-sm text-gray-700">
            Follow us on social media for updates
          </p>
        </div>
      </Animation>
    </section>
  );
}
