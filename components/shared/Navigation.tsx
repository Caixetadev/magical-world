import Link from "next/link";
import { useRouter } from "next/router";
import { isActiveLink } from "utils/activeLink";

import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import {
  GiCauldron,
  GiOwl,
  GiScrollQuill,
  GiScrollUnfurled,
} from "react-icons/gi";
import { IoColorWand } from "react-icons/io5";
import { FaDev, FaScroll } from "react-icons/fa";

const links = [
  {
    Icon: AiFillHome,
    name: "Manor",
    href: "/",
  },
  {
    Icon: GiCauldron,
    name: "Potions",
    href: "/potions",
  },
  {
    Icon: GiScrollUnfurled,
    name: "Parchment",
    href: "/parchment",
  },
  // {
  //   Icon: IoColorWand,
  //   name: "Spells",
  //   href: "/spells",
  // },
  // {
  //   Icon: GiOwl,
  //   name: "Owl",
  //   href: "/owl",
  // },
];

const Navigation = () => {
  const router = useRouter();

  const navItemStyle =
    "flex items-center gap-1  px-5 py-4 transition duration-500 ease-in-out hover:bg-green-800";

  return (
    <nav className="mx-auto flex max-w-2xl items-center justify-center  text-sm">
      {links.map(({ Icon, name, href }) => (
        <Link href={href} key={name} passHref scroll={false}>
          <a
            className={` ${navItemStyle} ${
              isActiveLink(href, router.pathname) && `bg-green-900`
            }`}
          >
            <Icon />
            {name}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
