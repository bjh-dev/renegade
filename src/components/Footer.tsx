import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import Contact from "@/components/Contact";
import Aoc from "@/components/Aoc";

const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <Contact />
      <div className="container border-t-2 border-solid border-gray-300">
        <div className="grid grid-cols-1 place-items-start py-24 md:grid-cols-4 md:place-items-end">
          <div className="col-span-1 md:col-span-2">
            <Aoc />
          </div>
          <div className="cols-span-1 md:col-start-4">
            <div className="mt-8 flex space-x-6">
              <a
                href="https://www.facebook.com/RMMA3031/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-500 hover:text-primary"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/renegade.mma/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-500 hover:text-primary"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram size={24} />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Renegade Fitness &amp;
              Lifestyles. All rights reserved.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              <Link
                className="underline hover:text-primary"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
