import React from "react";

function Hero() {
  return (
    <div className=" w-full h-screen p-[5%] flex justify-center items-center gap-32 bg-center ">
      <div className="m-auto  md:p-10 p-5 rounded-4xl items-center bg-(--project-bg)/50">
        <h1 className="md:text-7xl text-5xl font-600 mb-5 bg-transparent">
          HI, I am{" "}
          <span className="bg-transparent text-(--active-text)">
            Mohamed Khaled
          </span>
        </h1>

        <h3 className="md:text-4xl text-3xl font-500 bg-transparent">
          <span className="text-(--active-text)">FrontEnd web Developer</span>
        </h3>

        <div className="about md:py-16 py-10" id="about">
          <div className="w-full">
            <p className=" md:text-[18px] text-[16px]">
              I graduated from Faculty of Engineering, Communication and
              Electronic Department, I currently working in IT Field, I am
              working on developing my skills in FrontEnd development using{" "}
              <span className="text-(--active-text)">
                HTML, CSS, JavScript, and React - NextJs
              </span>{" "}
              My goal is to work as a professional Frontend Developer, focusing
              on create modern, interactive and user-friendly web experiences.
            </p>
          </div>
        </div>

        <div className="mt-5 w-fit">
          <a
            href="Mohamed Khaled Sayed.pdf"
            className="mt-2.5 ml-2.5 font-[20px] rounded-3xl py-2.5 px-5 text-white bg-(--active-text) transition-all duration-300 hover:bg-white hover:shadow-[0px_4px_8px_rgba(79, 146, 150, 0.2)] hover:text-(--active-text)"
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
