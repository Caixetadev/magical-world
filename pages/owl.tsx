// CONTACT

import PageTitle from "@components/shared/PageTitle";
import PageLayout from "@components/layout/PageLayout";
import Section from "@components/shared/Section";

const title = "Owl";
const subtitle = "Send me an owl. Let's work togther and create magic.";

export default function spells() {
  return (
    <PageLayout pageMeta={{ title: "Send An Owl" }}>
      <PageTitle title={title} subtitle={subtitle} />
      <Section>
        <h2 className="mb-2 font-headingAlt text-2xl font-semibold text-gray-100 md:text-3xl">
          Pick an owl
        </h2>
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="name">Name</label>
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              id="name"
              className="w-3/4 px-4 py-2 "
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              required
              type="text"
              name="email"
              placeholder="Email"
              id="email"
              className="w-3/4 px-4 py-2 "
            />
          </div>
          <div></div>
        </form>
      </Section>
    </PageLayout>
  );
}
