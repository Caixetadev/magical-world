// PROJECTS
import PageLayout from "@components/layouts/PageLayout";
import { PageTitle } from "@components/shared";

const title = "My Potions Room";
const subtitle =
  "To be great potion master, one has to brew a lot of potions. Here are some of the potions I have concocted.";

export default function Potions() {
  return (
    <PageLayout pageMeta={{ title: "My Potions" }}>
      <PageTitle title={title} subtitle={subtitle} />
      <div>
        {/* <Meta pageMeta={{ title: "My Potions" }} /> */}
        <h2 className="mb-8 font-primary text-5xl  leading-loose tracking-wider">
          My Potions
        </h2>
      </div>
    </PageLayout>
  );
}
