import Link from "next/link";
import { FaDev, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

const links = [
  {
    Icon: FaTwitter,
    href: "https://twitter.com/Psypher1",
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

interface IProps {
  margin?: boolean;
}
export default function ConnectIcons({ margin = false }: IProps) {
  return (
    <div
      className={`${
        margin ? "my-6" : "my-0"
      } flex flex-row  text-xl md:text-2xl`}
    >
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
