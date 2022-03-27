import Link from "next/link";
import { FaDev, FaGithub, FaLinkedinIn } from "react-icons/fa";

const links = [
  {
    Icon: FaDev,
    href: "https://dev.to/psypher1",
  },
  {
    Icon: FaGithub,
    href: "https://github.com/psypher1",
  },
  {
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/jamesmidzi",
  },
];
export default function SocialIcons() {
  return (
    <div className="my-6 flex flex-row text-2xl ">
      {links.map(({ Icon, href }, i) => (
        <Link key={href} href={href}>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={`text-gray-300 transition-colors hover:text-white ${
              i < links.length - 1 ? "mr-3" : ""
            }`}
          >
            <Icon />
          </a>
        </Link>
      ))}
    </div>
  );
}
