import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-200 py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="mb-12 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              Contact
            </h2>
          </div>
          <div className="col-span-1 md:col-span-1 md:col-start-1 lg:col-span-1 lg:col-start-2">
            <address className="not-italic text-gray-800">
              <p className="">92 Parsons Street</p>
              <p className="">Kensington VIC</p>
              <p className="">3031</p>
              <p className="mt-6">
                <a
                  className="underline hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://goo.gl/maps/n3Da6yoHwQe7nAod7"
                >
                  Google Map
                </a>
              </p>
            </address>
          </div>
          <div className="col-span-1 md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-3">
            <address className="not-italic text-gray-800">
              <p className="">
                <a
                  className="underline hover:text-primary"
                  href="tel:+6139482787"
                >
                  (03) 9482 1787
                </a>
              </p>
              <p className="">
                <a
                  className="underline hover:text-primary"
                  href="mailto:info@renegadebjj.com.au"
                >
                  info@renegadebjj.com.au
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
