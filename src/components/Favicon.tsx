const Favicon = () => {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="../../images/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="../../images/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="../../images/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="../../site.webmanifest" />
      <link
        rel="mask-icon"
        href="../../images/favicons/safari-pinned-tab.svg"
        color="#00845b"
      />
      <meta name="msapplication-TileColor" content="#00845b" />
      <meta name="theme-color" content="#ffffff"></meta>
    </>
  );
};

export default Favicon;
