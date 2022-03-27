// PROJECTS
import { PageLayout, PageTitle } from "components";

const title = "PotionsP";
const subtitle =
  "To be great potion master, one has to brew a lot of potions. Here are some of the potions I have concocted.";

export default function Potions() {
  return (
    <PageLayout pageMeta={{ title: "My Potions" }}>
      <PageTitle title={title} subtitle={subtitle} />
      <div>
        {/* <Meta pageMeta={{ title: "My Potions" }} /> */}
        <h2 className="mb-4 font-headingAlt text-4xl font-semibold ">
          Here are my potions
        </h2>
        <p className="prose prose-lg text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          reprehenderit iste enim debitis, explicabo maiores. Accusantium ea
          dicta corrupti exercitationem voluptas ipsum? Iste, dolore? Repellat
          quo libero cumque exercitationem odio?
        </p>
      </div>
    </PageLayout>
  );
}
