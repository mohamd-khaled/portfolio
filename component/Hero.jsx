import React from "react";

function Hero() {
  return (
    <div className=" w-full p-[10%] flex justify-center items-center gap-32 bg-center bg-transparent">
      <div className="m-auto bg-transparent">
        <h1 className="text-8xl font-600 mb-5 bg-transparent">
          HI, iam{" "}
          <span className="bg-transparent text-(--text-color)">
            Mohamed Khaled
          </span>
        </h1>
        <h3 className="text-5xl font-500 bg-transparent">
          <span className="text-(--text-color)">FrontEnd web Developer</span>
        </h3>
        <p></p>
        <div className="mt-5 w-fit">
          <a
            href="Mohamed Khaled Sayed.pdf"
            className="mt-2.5 ml-2.5 font-[20px] rounded-3xl py-2.5 px-5 text-white transition-all duration-300 hover:bg-white hover:shadow-[0px_4px_8px_rgba(79, 146, 150, 0.2)] hover:text-black"
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
