// BLOG

// import { PageLayout, PageTitle, Section } from "components/";
import PageLayout from "@components/layout/PageLayout";
import PageTitle from "@components/shared/PageTitle";
import Section from "@components/shared/Section";

const title = "Parchment";
const subtitle =
  "My parchment is where I write down the things I am working on. Figure out spells ans potions.";

export default function parchment() {
  return (
    <PageLayout pageMeta={{ title: "Parchment" }}>
      <PageTitle title={title} subtitle={subtitle} icons={false} />
      <Section>
        <h2 className="mb-4 font-headingAlt text-2xl font-semibold text-gray-100 md:text-3xl ">
          My quill has been busy
        </h2>
        <p className="prose  text-green-100 md:prose-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          reprehenderit iste enim debitis, explicabo maiores. Accusantium ea
          dicta corrupti exercitationem voluptas ipsum? Iste, dolore? Repellat
          quo libero cumque exercitationem odio?
        </p>
      </Section>
    </PageLayout>
  );
}
