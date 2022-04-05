// PROJECTS
import type { GetStaticProps } from "next";
import { PageLayout, PageTitle, Section } from "components";
import { GiCauldron, GiWarlockEye } from "react-icons/gi";
import { IPotion, IProject } from "interfaces";
import { allProjects } from "../utils/constants";

interface IProps {
  projects: IProject[];
}
export const getStaticProps: GetStaticProps = async () => {
  const projects = await allProjects;

  return {
    props: { projects },
  };
};

const title = "Potions";
const subtitle =
  "To be great potion master, one has to brew a lot of potions. Here are some of the potions I have concocted.";

const Potions = ({ projects }: IProps) => {
  return (
    <PageLayout pageMeta={{ title: "My Potions" }}>
      <PageTitle title={title} subtitle={subtitle} icons={false} />

      <Section>
        <h2 className="mb-2 font-headingAlt text-2xl font-semibold text-gray-100 md:text-3xl ">
          Here are my potions
        </h2>
        <div className=" grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project: IProject) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-md bg-gray-800 p-4 shadow-xl"
            >
              <h3 className="text-lg font-semibold text-gray-100">
                {" "}
                {project.title}
              </h3>
              <p className="prose prose-sm truncate  text-gray-400">
                {project.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <a
                  href={project.visit}
                  className="flex items-center hover:text-white"
                >
                  <GiWarlockEye className="mr-1" />
                  Portkey
                </a>
                <a
                  href={`/potions/${project.id}`}
                  className="flex items-center hover:text-white"
                >
                  <GiCauldron className="mr-1" />
                  Learn to brew
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* <p className="prose text-green-100 md:prose-base ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          reprehenderit iste enim debitis, explicabo maiores. Accusantium ea
          dicta corrupti exercitationem voluptas ipsum? Iste, dolore? Repellat
          quo libero cumque exercitationem odio?
        </p> */}
      </Section>
    </PageLayout>
  );
};

export default Potions;
