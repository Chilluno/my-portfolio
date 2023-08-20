import React from "react"
import projects from "../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

   return <section className="h-auto font-bold mb-16" id="projects">
   <h2 className="text-4xl text-blue-grey p-4">Projets</h2>  
   <div className="border-t-2 w-20 m-auto border-dreamy-purple"></div>
   <div className="flex flex-col items-center gap-8 px-4 md:px-2">
      {
         projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} image={project.images} tags={project.tags} 
            description={project.description} repo={project.repository} date={project.date}/>
         ))
      }
   </div> 
   </section>
}