// PROJECTS
import type { GetStaticProps } from "next";

import PageLayout from "@components/layout/PageLayout";
import PageTitle from "@components/shared/PageTitle";
import Section from "@components/shared/Section";
import PotionsCard from "@components/Cards/PotionsCard";

import { IPotion, IProject, ProjectProps } from "../interfaces";
import { allProjects } from "../utils/constants";

export const getStaticProps: GetStaticProps = async () => {
  const projects = await allProjects;

  return {
    props: { projects },
  };
};

const title = "Potions";
const subtitle =
  "To be great potion master, one has to brew a lot of potions. Here are some of the potions I have concocted.";

const Potions = ({ projects }: ProjectProps) => {
  return (
    <PageLayout pageMeta={{ title: title }}>
      <PageTitle title={title} subtitle={subtitle} icons={false} />

      <Section>
        <h2 className="mb-4 font-headingAlt text-2xl font-semibold text-gray-100 md:text-3xl ">
          Recent Potions
        </h2>
        <div className=" grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project: IProject) => (
            <PotionsCard project={project} key={project.id} />
          ))}
        </div>
      </Section>
    </PageLayout>
  );
};

export default Potions;
