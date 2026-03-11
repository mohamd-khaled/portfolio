import React from "react";
import Projects from "./Projects";
import ReactProjects from "./ReactProjects";
import BackEndProjects from "./BackEndProjects";

function page() {
    return (<div className="flex flex-col-reverse gap-16 p-10">
        <Projects />    
        <ReactProjects />
        <BackEndProjects /> 
    </div>);
}

export default page;
