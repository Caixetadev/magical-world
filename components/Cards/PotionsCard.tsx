import { IProject } from "interfaces/";
import { GiCauldron, GiWarlockEye } from "react-icons/gi";
import Link from "next/link";

interface IPotion {
  project: IProject;
}
const PotionsCard = ({ project }: IPotion) => {
  return (
    <article className="flex flex-col justify-between rounded-md bg-gray-900 p-4 text-gray-300 shadow-xl">
      <Link href={project.visit}>
        <a
          className="cursor-pointer text-lg font-semibold text-gray-100 transition duration-300 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.title}
        </a>
      </Link>

      <p className="prose prose-sm text-gray-400">{project.description}</p>
      <div className="mt-4 ">
        <h4 className="">Brewed with: </h4>
        <div className="mt-1 flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <h5 className="rounded bg-green-900 p-1  text-sm">{tag}</h5>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-gray-300">
        <a
          href={project.visit}
          target="_blank"
          rel="noopener noreferrer"
          className="ease flex items-center transition duration-300 hover:scale-105 hover:text-white"
        >
          <GiWarlockEye className="mr-1" />
          Portkey
        </a>
        <a
          href={`/potions/${project.id}`}
          className="ease flex items-center transition duration-300 hover:scale-105 hover:text-white"
        >
          <GiCauldron className="mr-1" />
          Learn to brew
        </a>
      </div>
    </article>
  );
};
export default PotionsCard;
