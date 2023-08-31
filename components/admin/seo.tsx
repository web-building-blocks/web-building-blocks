import React from "react";

function Seo() {
  return (
    <>
      <link rel="icon" type="image/x-icon" href="/static/favicon.png" />
      <meta name="og:title" content="Blocks - University of Sydney" />
      <meta
        name="og:description"
        content="Blocks | University of Sydney Design System | Capstone Project COMP5703"
      />
      <meta
        name="og:keywords"
        content="Blocks,Design,UI,University,Sydney,Software,Engineering"
      />
      <meta name="og:robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="og:language" content="English" />
      <meta name="og:revisit-after" content="50 days" />
      <meta name="og:author" content="Richard Lee" />
    </>
  );
}

export default Seo;
