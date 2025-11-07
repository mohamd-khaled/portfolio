"use client";
import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarElements } from "./NavBarElements";
import { NavContext } from "@/context/NavBarContext";

function NavBar() {
  const { isActive, setIsActive } = useContext(NavContext);
  const pathname = usePathname();

  useEffect(() => {
    // Remove leading slash and set active based on current path
    const currentPath = pathname === "/" ? "" : pathname.slice(1);
    setIsActive(currentPath);
  }, [pathname, setIsActive]);
  return (
    <div
      className="text-(--active-text) bg-background flex sticky justify-between items-center w-full top-0 left-0 z-999 px-8 border-b-solid border-b h-(--nav-height)
    "
    >
      <Link
        href="/"
        className=" md:text-[30px] text-[20px] font-bold  cursor-pointer flex justify-center items-center transition duration-300 hover:scale-[1.1]"
      >
        Mohamed Khaled
      </Link>

      <nav>
        <ul className="flex ">
          {navbarElements.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  href={`/${item.link}`}
                  className={`ml-[15px] md:text-[20px] text-[16px] font-500 border-b-[3px] border-b-solid transition-all duration-300 hover:border-b-(--active-text) ${isActive === `${item.link}`
                    ? "text-(--active-text) border-b-(--active-text)"
                    : "text-white border-b-transparent"
                    }`}
                  onClick={() => {
                    setIsActive(`${item.link}`);
                  }}
                >
                  {item.element}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
