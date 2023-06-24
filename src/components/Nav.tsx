/* This example requires Tailwind CSS v2.0+ */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navigation = [
  { name: `Home`, href: `/` },
  { name: `Memberships`, href: `/#memberships` },
  { name: `Classes`, href: `/#classes` },
  { name: `Contact`, href: `/#contact` },
];

const Nav = () => {
  return (
    <header>
      <nav className="container" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b py-6 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Renegade MMA</span>
              <Image
                className="h-auto w-20"
                src="/images/crest.svg"
                width={45}
                height={45}
                priority
                alt="Renegade BJJ"
              />
            </Link>
            <div className="ml-10 hidden space-x-8 font-medium lg:block">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link
              href="/#apply"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm border border-transparent bg-gray-800 px-4 py-2 text-sm text-white shadow-sm hover:bg-primary"
            >
              <span className="hidden md:inline">Apply for Membership</span>
              <span className="md:hidden">Memberships</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
