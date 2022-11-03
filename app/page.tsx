import PocketBase from "pocketbase";
import { serialize } from "next-mdx-remote/serialize";
import Test  from "../components/Test";
import codeFrontmatter from "remark-code-frontmatter";

async function getData() {
  const client = new PocketBase("http://127.0.0.1:8090");
  const resultList = await client.records.getList("templates");

  return resultList?.items || [];
}

export default async function HomePage() {
  const res = await getData();
  const mdxSource = await serialize(res?.[0]?.mdx, {
    mdxOptions: {
      remarkPlugins: [codeFrontmatter],
      rehypePlugins: [],
    },
    parseFrontmatter: true,
  });

  console.log(mdxSource);

  return (
    <div>
      <Test test={mdxSource} />
    </div>
  );
}
