"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { navbarElements } from "./NavBarElements";
import { NavContext } from "@/context/NavBarContext";

function NavBar() {
  const { isActive, setIsActive } = useContext(NavContext);
  return (
    <div
      className="text-(--text-color) bg-background flex sticky justify-between items-center w-full top-0 left-0 z-999 px-8 border-b-solid border-b h-(--nav-height)
    "
    >
      <Link
        href="/"
        className=" text-[30px] font-800 cursor-pointer flex justify-center items-center transition duration-300 hover:scale-[1.1]"
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
                  className={`ml-[15px] text-[20px] font-500 border-b-[3px] border-b-solid transition-all duration-300 hover:border-b-(--text-color) ${
                    isActive === `${item.link}`
                      ? "text-(--text-color) border-b-(--text-color)"
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
