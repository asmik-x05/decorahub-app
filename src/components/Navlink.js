"use client";

import { HOME_ROUTE } from "@/constants/routes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import navlinks from "@/constants/navlinks";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navlink = () => {
  const pathname = usePathname();
  const [shownavbar, setshownavbar] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center my-3 md:hidden">
        <FaBars onClick={() => setshownavbar(!shownavbar)} />
      </div>
      <nav className={`md:flex ${shownavbar ? "grid" : "hidden"} gap-5`}>
        {navlinks.map((navlink) => {
          const isActive =
            pathname == navlink.route ||
            (navlink.route !== HOME_ROUTE &&
              pathname.startsWith(navlink.route));

          return (
            <Link
              key={navlink.route}
              href={navlink.route}
              className={`text-center ${
                isActive
                  ? "dark:text-secondary text-primary"
                  : "text-gray-700 dark:text-gray-100"
              }  font-medium hover:text-secondary hover:underline text-xl`}
              onClick={() => setshownavbar(!shownavbar)}
            >
              {navlink.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Navlink;
