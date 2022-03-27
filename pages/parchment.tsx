// BLOG

import { PageLayout, PageTitle } from "components/";

const title = "Parchment";
const subtitle =
  "My parchment is where I write down the things I am working on. Figure out spells ans potions.";

export default function parchment() {
  return (
    <PageLayout pageMeta={{ title: "Parchment" }}>
      <PageTitle title={title} subtitle={subtitle} />
      <div>
        <h3>With my quill and my parchment</h3>
      </div>
    </PageLayout>
  );
}
