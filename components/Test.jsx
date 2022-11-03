"use client";

import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import { Title } from "./Title";

const components = {
  Title,
};

const Test = ({ test }) => {
  console.log(test);
  return (
    <div>
      <MDXRemote {...test} components={components} />

      {test?.frontmatter?.image && (
        <Image
          src={test?.frontmatter?.image}
          blurDataURL={
            "https://firebasestorage.googleapis.com/v0/b/replay-chat-dd920.appspot.com/o/next-images%2Fbilly-huynh-W8KTS-mhFUE-unsplash.jpg?alt=media&token=c754dcd9-5bb6-422b-bba2-35b40f1b047f"
          }
          placeholder='blur'
          width={500}
          height={500}
          objectFit='cover'
        />
      )}
    </div>
  );
};

export default Test;
