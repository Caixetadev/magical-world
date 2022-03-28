// PROJECTS
import { PageLayout, PageTitle, Section } from "components";
import { GiCauldron } from "react-icons/gi";

const title = "Potions";
const subtitle =
  "To be great potion master, one has to brew a lot of potions. Here are some of the potions I have concocted.";

export default function Potions() {
  return (
    <PageLayout pageMeta={{ title: "My Potions" }}>
      <PageTitle title={title} subtitle={subtitle} />

      <Section linebreak>
        <h2 className="mb-4 font-headingAlt text-2xl font-semibold text-gray-100 md:text-4xl ">
          Here are my potions
        </h2>
        <p className="prose text-green-100 md:prose-base ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          reprehenderit iste enim debitis, explicabo maiores. Accusantium ea
          dicta corrupti exercitationem voluptas ipsum? Iste, dolore? Repellat
          quo libero cumque exercitationem odio?
        </p>
      </Section>
    </PageLayout>
  );
}
