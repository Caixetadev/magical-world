// ABOUT

import type { GetStaticProps } from "next";

import PageTitle from "@components/shared/PageTitle";
import PageLayout from "@components/layout/PageLayout";
import Section from "@components/shared/Section";

import { ISpell, SpellProps } from "../interfaces";
import { allSpells } from "../utils/constants";

export const getStaticProps: GetStaticProps = async () => {
  const spells = await allSpells;

  return {
    props: { spells },
  };
};

const title = "Spells";
const subtitle = "No magician is complete without spells";

export default function Spells({ spells }: SpellProps) {
  return (
    <PageLayout pageMeta={{ title: "Spells and Journey" }}>
      <PageTitle title={title} subtitle={subtitle} />

      <Section>
        <h2 className="mb-4 font-headingAlt text-2xl font-semibold text-gray-100 md:text-3xl">
          Spells I Can Cast
        </h2>
        <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {spells.map((spell, index) => (
            <a
              key={index}
              href={spell.link}
              className=" rounded-md bg-black p-4 text-center text-neutral-300 shadow shadow-gray-500"
            >
              {spell.name}
            </a>
          ))}
        </div>
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
      <Section>
        <h2 className="mb-2 font-headingAlt text-2xl font-semibold text-gray-100 md:text-3xl">
          My Wizarding Journey
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
