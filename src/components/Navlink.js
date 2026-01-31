"use client";

import { HOME_ROUTE } from "@/constants/routes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import navlinks from "@/constants/navlinks";

const Navlink = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex gap-5">
      {navlinks.map((navlink) => {
        const isActive =
          pathname == navlink.route ||
          (navlink.route !== HOME_ROUTE && pathname.startsWith(navlink.route));

        return (
          <Link
            key={navlink.route}
            href={navlink.route}
            className={`${
              isActive ? "dark:text-secondary text-primary" : "text-gray-700 dark:text-gray-100"
            }  font-medium hover:text-secondary hover:underline text-xl`}
          >
            {navlink.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navlink;