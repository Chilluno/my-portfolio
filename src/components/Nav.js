import React from "react"
import {FaGithub} from "react-icons/fa"
import { NavHashLink } from "react-router-hash-link"

export const Nav = () =>{

   return <nav className="flex gap-3">
      <ul className="flex flex-row gap-4 text-xl text-blue-grey items-center">
         <li><NavHashLink className="nav hover:text-gray-100" smooth to="/#about">À propos</NavHashLink></li>
         <li><NavHashLink className="nav hover:text-gray-100" smooth to="/#projects">Projets</NavHashLink></li>
         <li><NavHashLink className="nav hover:text-gray-100" smooth to="/#skills">Compétences</NavHashLink></li>
         <li><NavHashLink className="nav hover:text-gray-100" smooth to="/#contact">Contact</NavHashLink></li>
      </ul>
 
      <div className="border-l-[2px] border-blue-grey"></div>   
      <ul className="flex justify-center align-middle gap-2">
         <li>
         <a href="https://github.com/Chilluno">  
         <FaGithub size={40} color="#243c5a"/>
         </a> 
         </li>
      </ul>
   </nav>


}