// CONTACT

import PageTitle from "@components/shared/PageTitle";
import PageLayout from "@components/layout/PageLayout";
import Section from "@components/shared/Section";

const title = "Owl";
const subtitle = "Send me an owl";

export default function spells() {
  return (
    <PageLayout pageMeta={{ title: "Send Me An Owl" }}>
      <PageTitle title={title} subtitle={subtitle} />
      <Section linebreak>
        <h2 className="mb-2 font-headingAlt text-2xl font-semibold text-gray-100 md:text-3xl">
          Pick an owl
        </h2>
      </Section>
    </PageLayout>
  );
}
