import { IProject } from "interfaces/";
import { GiCauldron, GiWarlockEye } from "react-icons/gi";

import Link from "next/link";

interface IPotion {
  project: IProject;
}
const PotionsCard = ({ project }: IPotion) => {
  return (
    <article className="flex flex-col justify-between rounded-md bg-black p-4 text-neutral-300 shadow shadow-gray-500">
      <Link href={project.visit}>
        <a
          className="cursor-pointer text-xl font-semibold text-neutral-200 transition duration-300 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.title}
        </a>
      </Link>

      <p className="prose prose-sm text-gray-400 line-clamp-2">
        {project.description}
      </p>
      <div className="mt-4 ">
        <h4 className="">Brewed with: </h4>
        <div className="mt-1 flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <h5 className="rounded bg-green-900 p-1  text-sm">{tag}</h5>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-gray-300">
        <Link href={project.visit}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="ease flex items-center transition duration-300 hover:scale-105 hover:text-white"
          >
            <GiWarlockEye className="mr-1" />
            Portkey
          </a>
        </Link>
        <Link href={`/potions/${project.id}`}>
          <a className="ease flex items-center transition duration-300 hover:scale-105 hover:text-white">
            <GiCauldron className="mr-1" />
            Process
          </a>
        </Link>
      </div>
    </article>
  );
};
export default PotionsCard;
