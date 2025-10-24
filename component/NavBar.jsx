import React from "react";
import Link from "next/link";

function NavBar() {
  const navbarElements = [
    { id: 1, element: "Home", link: "/" },
    { id: 2, element: "Skills", link: "skills" },
    { id: 3, element: "Projects", link: "projects" },
    { id: 4, element: "Contact", link: "contact" },
  ];

  return (
    <div className="text-(--text-color) flex sticky justify-between items-center w-full top-0 left-0 z-999 px-8 border-b-solid border-b">
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
                  className="ml-[15px] text-[20px] font-500 border-b-[3px] border-b-solid border-b-transparent transition-all duration-300"
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
