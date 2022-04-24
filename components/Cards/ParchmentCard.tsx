import { IPost } from "interfaces/";
import Link from "next/link";
import { GiFireplace } from "react-icons/gi";

interface IArticle {
  post: IPost;
}
const ParchmentCard = ({ post }: IArticle) => {
  return (
    <Link href={post.title}>
      <a
        key={post.title}
        className="flex flex-col justify-between rounded-md bg-neutral-900 p-4 text-gray-300 shadow-xl"
      >
        <h3 className="cursor-pointer text-xl font-semibold text-gray-100 transition duration-300 hover:text-green-700">
          {post.title}
        </h3>
        <p className="prose mt-2 text-gray-400 line-clamp-2">{post.brief}</p>

        <div className="mt-4 flex items-center justify-between">
          <p className="inline-block rounded bg-green-900 px-2 py-1 text-sm text-green-100">
            {new Date(post.dateAdded).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <GiFireplace className="text-xl" />
        </div>
      </a>
    </Link>
  );
};
export default ParchmentCard;
