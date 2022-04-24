/*   ===== BLOG =====   */

// import { PageLayout, PageTitle, Section } from "components/";
import PageLayout from "@components/layout/PageLayout";
import PageTitle from "@components/shared/PageTitle";
import Section from "@components/shared/Section";
import ParchmentCard from "@components/Cards/ParchmentCard";

import { GiWarlockEye } from "react-icons/gi";
import { SiHashnode } from "react-icons/si";
import { FaDev } from "react-icons/fa";

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
  "My parchment is where I write down the things I am working on. It is where I figure out spells and potions.";

export default function parchment({ posts }: IPosts) {
  return (
    <PageLayout pageMeta={{ title: "Parchment" }}>
      <PageTitle title={title} subtitle={subtitle} icons={false} />
      <Section>
        {/* <h2 className="mb-4 font-headingAlt text-2xl font-semibold text-gray-100 md:text-3xl ">
          My quill has been busy
        </h2> */}
        <div className=" grid grid-cols-1 gap-8 ">
          {posts.map((post: IPost) => (
            <ParchmentCard post={post} key={post.title} />
          ))}
        </div>
      </Section>

      <Section linebreak>
        <h2 className="mb-4 text-center font-headingAlt text-xl font-semibold text-gray-100 md:text-3xl">
          Read more
        </h2>

        <div className="flex flex-col items-center justify-center gap-5 text-2xl">
          <Link href="https://dantedecodes.hashnode.dev">
            <a
              className="flex items-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GiWarlockEye className="text-3xl" /> &rarr; <SiHashnode />
            </a>
          </Link>
          <Link href="https://dev.to/psypher1">
            <a
              className="flex items-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GiWarlockEye className="text-3xl" /> &rarr; <FaDev />
            </a>
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
}
