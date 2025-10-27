import React from 'react'
import { reactProjectDetails } from "./ProjectsDetails";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fas, far, fab)

function ReactProjects() {


    return (
        <div>
            <h2 className='w-fit m-auto text-(--active-text) p-3 mb-10 border-solid border-2 border-(--active-text) rounded-2xl text-2xl font-bold bg-(--project-bg)/50'>React Projects</h2>

            <div className={`projects`}>
                {reactProjectDetails.map((project, index) => {
                    const isEven = index % 2 === 0;
                    const imageSection = (
                        <div className="img">
                            <img src={project.image} alt={project.name} className={`w-full rounded-2xl duration-300 ${isEven ? "hover:translate-x-5" : "hover:-translate-x-5"}`} />
                        </div>
                    );
                    const contentSection = (
                        <div className="p-5">
                            <h2 className="text-2xl mb-2.5 text-(--active-text)">{project.name}</h2>
                            <p>{project.description}</p>
                            <ul className='flex'>
                                <li className='m-2.5 duration-300 hover:text-(--active-text)'>
                                    <a href={project.projectLink}><FontAwesomeIcon icon="fa-solid fa-rocket" className="w-[35px]" /></a>
                                </li>
                                <li className='m-2.5 duration-300 hover:text-(--active-text)'>
                                    <a href={project.githubLink}><FontAwesomeIcon icon="fa-brands fa-github" className="w-[35px]" /></a>
                                </li>
                            </ul>
                        </div>
                    );

                    return (
                        <div key={project.id} className={`md:grid md:gap-10 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mb-20 border-(--active-text) border-2 rounded-2xl bg-(--project-bg)/50 transition-opacity ease-in duration-700`}>
                            {isEven ? imageSection : contentSection}
                            {isEven ? contentSection : imageSection}
                        </div>
                    )
                })}

            </div>
        </div >
    )
}

export default ReactProjects
