import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

function page() {
    return (
        <div className=" w-fit h-fit m-auto mt-10 md:p-10 p-5 rounded-4xl items-center bg-(--project-bg)/50 flex flex-col justify-center gap-10 bg-center " id="contact">
            <h1 className="main_title ">Contact Me</h1>
            <div className=" grid gap-10 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] ">
                <div className="mail flex items-center justify-center">
                    <img src="imgs/Email.svg" alt="mail" className="mr-2.5 max-md:w-[25px]" />
                    <a href="mailto:muhamed.khaled.2024@gmail.com">
                        <h3 className="text-white transition-all duration-300 hover:text-(--active-text)">
                            muhamed.khaled.2024@gmail.com
                        </h3>
                    </a>
                </div>
                <div className="social flex justify-center gap-6">
                    <a
                        href="https://www.linkedin.com/in/mkhaled2001/"
                        className="text-white text-[1.5rem] transition-all duration-300 hover:text-(--active-text)"
                    >
                        <FontAwesomeIcon
                            icon="fa-brands fa-linkedin"
                            className="md:w-[35px] w-[25px]"
                        />
                    </a>
                    <a
                        href="https://github.com/mohamd-khaled"
                        className="text-white text-[1.5rem] transition-all duration-300 hover:text-(--active-text)"
                    >
                        <FontAwesomeIcon icon="fa-brands fa-github" className="md:w-[35px] w-[25px]" />
                    </a>
                </div>
                <div className="phone flex flex-col items-center justify-center gap-5">
                    <a href="+201016474258">
                        <h3 className="text-white transition-all duration-300 hover:text-(--active-text) flex">
                            <img src="imgs/phone.svg" alt="phone" className="mr-1 max-md:w-[20px]" /> +201559716567
                        </h3>
                    </a>

                    <a href="+201016474258">
                        <h3 className="text-white transition-all duration-300 hover:text-(--active-text) flex">
                            <img src="imgs/phone.svg" alt="phone" className="mr-1 max-md:w-[20px]" /> +201016474258
                        </h3>
                    </a>

                </div>
            </div>
        </div>
    );
}

export default page;
