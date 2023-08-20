import React, { useState } from "react"
import {FaGithub, FaBars, FaTimes} from "react-icons/fa"
import { NavHashLink } from "react-router-hash-link"
import CV from "../../public/resume/CV-Wesley.pdf"

export const Nav = () =>{
   const [hover, setHover] = useState(false);
   const[nav, setNav] = useState(false);
   const toggleHover = () => setHover(!hover);

   const toggleNav = () => setNav(!nav);

   return <nav className="flex gap-3">
      <ul className="hidden md:flex flex-row gap-4 text-xl text-blue-grey items-center">
         <li>
            <NavHashLink className="nav hover:text-gray-100" smooth to="/#about">À propos
            </NavHashLink>
         </li>
         <li>
            <NavHashLink className="nav hover:text-gray-100" smooth to="/#projects">Projets
            </NavHashLink>
         </li>
         <li>
         <NavHashLink className="nav hover:text-gray-100 text-xl" smooth to="/#skills">Compétences
         </NavHashLink>
         </li>
         <li>
            <NavHashLink className="nav hover:text-gray-100" smooth to="/#contact">Contact
            </NavHashLink>
         </li>
      </ul>

      <div onClick={toggleNav} className="md:hidden z-20">
        {!nav ? <FaBars color="#243c5a" size={20}/> : <FaTimes color="#243c5a" size={20}/>} 
      </div>

      <ul className={!nav ? "hidden" : "absolute inset-0 w-full h-screen bg-turquoise-blue flex flex-col gap-4 justify-center items-center"}>
         <li>
            <NavHashLink onClick={toggleNav} className="nav hover:text-gray-100 text-xl" smooth to="./#about">À propos
            </NavHashLink>
         </li>
         <li>
            <NavHashLink onClick={toggleNav}className="nav hover:text-gray-100 text-xl" smooth to="./#projects">Projets
            </NavHashLink>
         </li>
         <li>
         <NavHashLink onClick={toggleNav} className="nav hover:text-gray-100 text-xl" smooth to="./#skill">Compétences
         </NavHashLink>
         </li>
         <li>
            <NavHashLink onClick={toggleNav} className="nav hover:text-gray-100 text-xl" smooth to="./#contact">Contact
            </NavHashLink>
         </li>
         <li>
         <a href="https://github.com/Chilluno">  
         <FaGithub size={40} color={!hover ? "#243c5a" : "white"} onMouseEnter={toggleHover} onMouseLeave={toggleHover}/>
         </a> 
         </li>
      </ul>
      <div className="border-l-[2px] border-blue-grey"></div> 
      <ul className="hidden md:flex justify-center items-center align-middle gap-2">
         <li>
         <a href="https://github.com/Chilluno">  
         <FaGithub size={40} color={!hover ? "#243c5a" : "white"} onMouseEnter={toggleHover} onMouseLeave={toggleHover}/>
         </a> 
         </li>
         <li>
            <a href={CV} target="_blank" className="text-center text-xl nav hover:text-white">
               CV
            </a>
         </li>
      </ul>
   </nav>
}