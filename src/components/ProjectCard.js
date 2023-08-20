import React, { useState } from "react"
import { FaGithub } from "react-icons/fa"
import { Tag } from "./Tag"

export const ProjectCard = ({title, description, image, repo, date, tags}) => {
   const [hovered, setHovered] = useState(false);

   const toggleHover = () => {
      setHovered(!hovered);
   }

   return <div className="relative rounded-lg shadow-lg overflow-hidden max-w-4xl max-h-2xl" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <img className="inset-0 h-full w-full rounded-lg object-scale-down"  src={image[0]} alt={title + "'s Homepage"}/>
      <div className={!hovered ? "opacity-0" : "transition-opacity absolute inset-0 rounded-lg w-full h-auto bg-gradient-to-t from-blue-grey z-10"}>
      <h3 className="absolute left-4 bottom-[60%] md:top-[50%] text-white text-2xl md:text-3xl">{title}</h3> 
      <h4 className="absolute left-4 bottom-[48%] md:top-[60%] text-white text-lg md:text-2xl">{date}</h4>
      <p className="absolute left-4 bottom-[25%]  text-left text-gray-100 text-[3vw] md:text-xl">{description}</p>
      <div className="absolute left-4 bottom-[5%] md:bottom-[10%] text-sm md:text-base flex gap-3">
         {
            tags.map((tag, index) => (
               <Tag key={index} tag={tag}/>
            ))
         }
      </div>
      <a href={repo} className="absolute right-4 bottom-[4%] md:bottom-[10%] flex gap-1 text-sm md:text-base text-white text-center rounded-lg bg-black p-1 md:px-2 md:py-2"><FaGithub className="self-center"/> Github</a>
      </div>
   </div>
}