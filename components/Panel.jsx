"use client";

import { useEffect, useState } from "react";
// import { Test } from "./Test";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import { Suspense, lazy } from "react";

// const Test = lazy(() => import('./Test'));
const Test = dynamic(() => import("./Test"), {
  suspense: true,
});

export default function Panel() {
  const [markdown, setMarkdown] = useState("# Markdown Preview");
  const [serializedMarkdown, setSerializedMarkdown] = useState(null);

  const getData = async () =>
    await serialize(markdown, { parseFrontmatter: true });

  useEffect(() => {
    getData().then((data) => setSerializedMarkdown(data));
  }, [markdown]);

  const container = {
    display: "grid",
    gridTemplateColumns: "40vw 40vw",
    justifyContent: "center",
    gap: "40px",
  };

  const divStyle = {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  };

  const inputStyle = {
    height: "50vh",
    padding: "10px",
  };

  console.log("serializedMarkdown", serializedMarkdown);

  return (
    <div style={container}>
      <div style={divStyle}>
        <div>Form</div>
        <textarea
          style={inputStyle}
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}></textarea>
      </div>
      <div style={divStyle}>
        <div>Preview</div>
        <Suspense fallback={`Loading...`}>
          <Test test={serializedMarkdown} />
        </Suspense>
      </div>
    </div>
  );
}
