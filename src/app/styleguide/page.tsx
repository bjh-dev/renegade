const Styleguide = () => {
  return (
    <section className="styleguide">
      <header className="bg-primary py-12 text-white">
        <div className="max-w-prose mx-auto text-center">
          <h1>
            <span className="block uppercase text-6xl font-bold tracking-widest">
              Renegade
            </span>
            <span className="mt-4 block uppercase text-2xl">Styleguide</span>
          </h1>
        </div>
      </header>
      <section className="max-w-prose mx-auto py-12 border-b border-black">
        <h2 className="font-bold text-2xl">Introduction</h2>
        <p className="text-lg">
          This styleguide is a resource for anyone working with the Renegade
          brand identity. It’s designed to help you understand our visual
          identity and how to use it correctly. If you have any questions,
          please{" "}
          <a href="mailto:info@renegadebjj.com.au?subject=Renegade Stylguide Enquiry">
            contact us
          </a>
          .
        </p>
        <p>
          Our Style is simple, clean and minimalist. Don’t use two words when
          one will do. Leave plenty of white space around text and brand
          elements. Never be cheesy, corny or derogatory. Keep the focus on the
          audience and what we offer.
        </p>
      </section>
      <section className="max-w-prose mx-auto py-12 border-b border-black">
        <h2 className="font-bold text-2xl">Typography</h2>
      </section>
      <section className="max-w-prose mx-auto py-12 border-b border-black">
        <h2 className="font-bold text-2xl">Logo</h2>
      </section>
    </section>
  );
};

export default Styleguide;
