import Link from "next/link";
import { useRouter } from "next/router";
import { isActiveLink } from "utils/activeLink";

const links: { name: string; href: string }[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Potions",
    href: "/potions",
  },
  {
    name: "Parchment",
    href: "/parchment",
  },
  {
    name: "Spells",
    href: "/spells",
  },
  {
    name: "Owl",
    href: "/owl",
  },
];

const Navigation = () => {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-center text-sm sm:text-base">
      {links.map(({ name, href }) => (
        <Link href={href} key={name}>
          <a
            className={`p-5 transition duration-500 ease-in-out hover:font-semibold hover:italic ${
              isActiveLink(href, router.pathname) && `bg-green-900`
            }`}
          >
            {name}
            {/* {isActiveLink(href, router.pathname) &&
            (className = "bg-green-900")} */}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
