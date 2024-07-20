"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navlist = {
  home: "/",
  projects: "/projects",
  blog: "/blog",
  art: "/art",
};

const navhighlight = "";

const NavBar = () => {
  const path = usePathname();
  return (
    <>
      <nav className=" flex flex-row space-x-3   px-5 border-b border-blue-600 pb-2 ">
        <p className="font-mono font-bold text-blue-600 ">Joel</p>
        <p className="text-xl leading-none">|</p>
        {Object.entries(navlist).map(([name, url]) => (
          <Link
            key={name}
            href={url}
            className={
              path === url ? "font-serif underline text-blue-600 " : "hover:text-blue-500 font-serif "
            }
          >
            {name}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default NavBar;
