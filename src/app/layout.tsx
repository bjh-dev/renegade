import Favicon from "@/components/Favicon";
import "./globals.css";
import localFont from "next/font/local";

const gotham = localFont({
  src: [
    {
      path: "../../public/font/GothamPro-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../../public/font/GothamPro-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/font/GothamPro-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/font/GothamPro-BoldItalic.woff2",
      weight: "bold",
      style: "italic",
    },
    {
      path: "../../public/font/GothamPro.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--gotham",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Favicon />
      </head>
      <body
        className={`flex h-screen w-screen flex-col bg-gray-200 ${gotham.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
