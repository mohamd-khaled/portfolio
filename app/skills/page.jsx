import React from 'react'
import { languages } from './skillsDetails'
import { tools } from './skillsDetails'
import LogoLoop from './LogoLoop';


function page() {
    return (
        <div className='mt-10'>
            <h1 className='w-fit m-auto p-3 text-(--active-text) mb-10 border-solid border-2 border-(--active-text) rounded-2xl text-2xl font-bold bg-(--project-bg)/50'>Skills</h1>
            <h2 className='w-fit m-auto p-3 text-(--active-text) mb-10 border-solid border-2 border-(--active-text) rounded-2xl text-2xl font-bold bg-(--project-bg)/50'>frontend</h2>
            <div style={{ height: 'auto', position: 'relative', overflow: 'hidden' }}>
                <LogoLoop
                    logos={languages}
                    speed={80}
                    direction="left"
                    logoHeight={48}
                    gap={40}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#124e6656"
                    ariaLabel="FrontEnd"
                />
            </div>
            <h2 className='w-fit m-auto p-3 text-(--active-text) mb-10 border-solid border-2 border-(--active-text) rounded-2xl text-2xl font-bold bg-(--project-bg)/50 mt-10'>tools</h2>
            <ul className='flex justify-evenly'>
                {tools.map((tool) => { return (<li key={tool.id} className='bg-(--project-bg)/50 rounded-full p-4'><img src={tool.src} alt={tool.name} className='w-[50px] duration-300 hover:scale-125 ' /></li>) })}
            </ul>
        </div>
    )
}

export default page
