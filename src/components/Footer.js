import React, { useState } from "react"
import {FaLinkedin, FaGithub} from "react-icons/fa"
import { Contact } from "./Contact"

export const Footer = () => {
   const [github, setGithub] = useState(false);
   const [linkedin, setLinkedin] = useState(false);
   const toggleGithub = () => setGithub(!github);
   const toggleLinkedin = () => setLinkedin(!linkedin);

   return <div id="contact" className="bg-blue-grey h-auto font-bold">
   <h2 className="text-4xl text-gray-100 p-4">Contact</h2>   
   <div className="border-t-2 w-20 m-auto border-dreamy-purple"></div>
   <Contact />
   <div className="flex flex-col items-center">   
   <a className="text-gray-100 text-left m-2 hover:text-turquoise-blue" href="mailto:wesley.slimani@gmail.com">wesley.slimani@gmail.com</a>
   <div className="flex flex-row m-2 gap-4"> 
   <a href="https://www.linkedin.com/in/wesley-slimani-88053b220/">
   <FaLinkedin color={!linkedin ? "white" : "#00C2CB"} size="40" onMouseEnter={toggleLinkedin} onMouseLeave={toggleLinkedin}/>
   </a>
   <a href="https://github.com/Chilluno">
   <FaGithub color={!github ? "white" : "#00C2CB"} size="40" onMouseEnter={toggleGithub} onMouseLeave={toggleGithub}/>
   </a>
   </div> 
   </div>
   <p className="text-gray-100 p-6 ">© 2023 Wesley SLIMANI, Tout droits réservés</p>  
</div>
}