import React from "react";

import { slugifyPhoneNumber } from "@/lib/helpers";

const Contact = (props: any) => {
  const { siteTitle, address, phone, email, googleMapsLink } = props;

  return (
    <div id="contact" className="bg-black text-white py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="mb-12 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              Contact
            </h2>
          </div>
          <div className="col-span-1 md:col-span-1 md:col-start-1 lg:col-span-1 lg:col-start-2">
            <address
              itemScope
              itemType="https://schema.org/LocalBusiness"
              className="not-italic"
            >
              <div className="sr-only" itemProp="name">
                {siteTitle}
              </div>
              <div
                itemScope
                itemProp="address"
                itemType="https://schema.org/PostalAddress"
              >
                <p itemProp="streetAddress">{address.street}</p>
                <p>
                  <span itemProp="addressLocality">{address.suburb}</span>{" "}
                  <span itemProp="addressRegion">{address.state}</span>
                </p>
                <p itemProp="postalCode">{address.postcode}</p>
              </div>
              <p className="mt-6">
                <a
                  className="underline hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={googleMapsLink}
                >
                  Google Map
                </a>
              </p>
            </address>
          </div>
          <div className="col-span-1 md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-3">
            <address className="not-italic">
              <p className="">
                <a
                  itemProp="telephone"
                  className="underline hover:text-primary"
                  href={slugifyPhoneNumber(phone)}
                >
                  {phone}
                </a>
              </p>
              <p className="">
                <a
                  itemProp="email"
                  className="underline hover:text-primary"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
