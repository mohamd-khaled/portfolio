"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarElements } from "./NavBarElements";
import { NavContext } from "@/context/NavBarContext";

function NavBar() {
  const { isActive, setIsActive } = useContext(NavContext);
  const pathname = usePathname();

  useEffect(() => {
    // Remove leading slash and set active based on current path
    const currentPath = pathname === "/" ? "/" : pathname.slice(1);
    setIsActive(currentPath);
  }, [pathname, setIsActive]);

  const [drawerOpen, setDrawerOpen] = useState(false);

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
        <button
          aria-label="Open menu"
          onClick={() => setDrawerOpen(true)}
          className="md:hidden block cursor-pointer hover:scale-105 duration-300 p-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* Mobile side drawer */}
        <div className={`fixed inset-0 z-50 ${drawerOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ease-in-out ${drawerOpen ? "opacity-100" : "opacity-0"
              }`}
            onClick={() => setDrawerOpen(false)}
          />
          {/* Drawer */}
          <aside
            className={`fixed right-0 top-0 h-full w-64 bg-(--project-bg)/90 p-6 shadow-lg transition-transform duration-300 ease-in-out transform ${drawerOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div className="flex justify-end">
              <button
                aria-label="Close menu"
                onClick={() => setDrawerOpen(false)}
                className="p-2 cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="mt-6">
              <ul className="flex flex-col">
                {navbarElements.map((item) => (
                  <li key={item.id} className="mb-4">
                    <Link
                      href={`/${item.link}`}
                      className={`text-lg font-medium block transition-all duration-200 hover:translate-x-2 ${isActive === `${item.link}` ? "text-(--active-text)" : "text-white"
                        }`}
                      onClick={() => {
                        setDrawerOpen(false);
                      }}
                    >
                      {item.element}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>

        {/* Desktop Navigation */}
        <ul className="md:flex hidden">
          {navbarElements.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  href={`/${item.link}`}
                  className={`ml-[15px] md:text-[20px] text-[16px] font-500 border-b-[3px] border-b-solid transition-all duration-300 hover:border-b-(--active-text) ${isActive === `${item.link}`
                    ? "text-(--active-text) border-b-(--active-text)"
                    : "text-white border-b-transparent"
                    }`}
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
