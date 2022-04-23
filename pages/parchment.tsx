/*   ===== BLOG =====   */

// import { PageLayout, PageTitle, Section } from "components/";
import PageLayout from "@components/layout/PageLayout";
import PageTitle from "@components/shared/PageTitle";
import Section from "@components/shared/Section";

import { getPosts } from "../lib/_hashnode";
import { GetStaticProps } from "next";
import { IPost } from "../interfaces";
import Link from "next/link";

interface IPosts {
  posts: IPost[];
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPosts();
  const posts = data.user.publication.posts;

  return {
    props: { posts },
  };
};

const title = "Parchment";
const subtitle =
  "My parchment is where I write down the things I am working on. Figure out spells ans potions.";

export default function parchment({ posts }: IPosts) {
  return (
    <PageLayout pageMeta={{ title: "Parchment" }}>
      <PageTitle title={title} subtitle={subtitle} icons={false} />
      <Section>
        {/* <h2 className="mb-4 font-headingAlt text-2xl font-semibold text-gray-100 md:text-3xl ">
          My quill has been busy
        </h2> */}
        <div className=" grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((post: IPost) => (
            <Link href={post.slug} passHref>
              <a
                key={post.title}
                className="flex flex-col justify-between rounded-md bg-neutral-900 p-4 text-gray-300 shadow-xl"
              >
                <h3 className="cursor-pointer text-lg font-semibold text-gray-100 transition duration-300 hover:text-gray-400">
                  {post.title}
                </h3>
                <p className=" text-elipsis prose prose-sm mt-2 text-gray-400">
                  {post.brief}
                </p>

                <div className="mt-4 first-letter:flex">
                  <p className="text-green-100a inline-block rounded bg-green-900 px-3 py-1">
                    {new Date(post.dateAdded).toLocaleDateString("en-UK")}
                  </p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
