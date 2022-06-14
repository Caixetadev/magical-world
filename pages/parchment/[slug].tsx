import PageTitle from "@components/shared/PageTitle";
import PageLayout from "@components/layout/PageLayout";
import Section from "@components/shared/Section";

import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { IPost } from "../../interfaces";
import { getPosts } from "@lib/_hashnode";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface IProps {
  post: IPost;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getPosts();
  const posts: IPost[] = data.user.publication.posts;

  const paths = posts.map(({ slug }) => {
    return {
      params: { slug },
    };
  });

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;

  const post = await getPosts();
  return { props: { post } };
};

const title = "Parchment Details";
const subtitle =
  "To be great potion master, one has to brew a lot of potions. Here are some of the potions that have been in my cauldrons.";

const ParchmentDetails = ({ post }: IProps) => {
  console.log(post);

  return (
    <PageLayout pageMeta={{ title: "Potion Details" }}>
      <PageTitle title={title} center icons={false} />

      <Section>item</Section>
    </PageLayout>
  );
};

export default ParchmentDetails;
