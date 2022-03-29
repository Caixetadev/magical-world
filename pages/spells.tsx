// ABOUT

import PageTitle from "@components/shared/PageTitle";
import PageLayout from "@components/layout/PageLayout";
import Section from "@components/shared/Section";

const title = "Spells";
const subtitle = "Magic is not complete without spells";

export default function MagicalStudies() {
  return (
    <PageLayout pageMeta={{ title: "Spells" }}>
      <PageTitle title={title} subtitle={subtitle} />

      <Section linebreak>
        <h2 className="mb-2 font-headingAlt text-2xl font-semibold text-gray-100 md:text-3xl">
          Spells I Can Cast
        </h2>
        <p className="prose text-green-100 md:prose-base ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, qui
          aspernatur veritatis illo, labore deleniti exercitationem neque
          numquam quod quaerat distinctio fugiat incidunt eius, velit explicabo!
          Sed dolor cum omnis.
        </p>
        <h2>This has been my wizarding journey</h2>
        <p>lorem</p>
      </Section>
      <Section>
        <h2 className="mb-2 font-headingAlt text-2xl font-semibold text-gray-100 md:text-3xl">
          Spells I Am Learning
        </h2>
        <p className="prose text-green-100 md:prose-base ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, qui
          aspernatur veritatis illo, labore deleniti exercitationem neque
          numquam quod quaerat distinctio fugiat incidunt eius, velit explicabo!
          Sed dolor cum omnis.
        </p>
      </Section>
    </PageLayout>
  );
}
