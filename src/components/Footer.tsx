import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

type SocialLinkType = {
  _key: string;
  platform: string;
  url: string;
};

type FooterProps = {
  socialLinks: SocialLinkType[];
};
import Aoc from "@/components/Aoc";
import Contact from "@/components/Contact";

const Footer = (props: FooterProps) => {
  const { socialLinks } = props;
  return (
    <footer className="bg-gray-300 text-black">
      <Contact {...props} />
      <div className="container border-t-2 border-solid border-gray-300">
        <div className="grid grid-cols-1 place-items-start py-24 md:grid-cols-4 md:place-items-end">
          <div className="col-span-1 md:col-span-2">
            <Aoc />
          </div>
          <div className="cols-span-1 md:col-start-4">
            <div className="mt-8 flex space-x-6">
              {socialLinks.map((link: SocialLinkType) => (
                <a
                  key={link._key}
                  href={link.url}
                  rel="noreferrer"
                  target="_blank"
                  className="hover:text-primary"
                >
                  <span className="sr-only">{link.platform}</span>
                  {link.platform === "facebook" && <FaFacebook size={24} />}
                  {link.platform === "instagram" && <FaInstagram size={24} />}
                  {link.platform === "youtube" && <FaYoutube size={24} />}
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm">
              &copy; {new Date().getFullYear()} Renegade Fitness &amp;
              Lifestyles. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
