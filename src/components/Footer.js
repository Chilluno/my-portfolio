import React from "react"
import {FaLinkedin} from "react-icons/fa"
import { Contact } from "./Contact"

export const Footer = () => {
   return <div id="contact" className="bg-blue-grey h-auto font-bold">
   <h2 className="text-4xl text-gray-100">Contact</h2>   

   <div className="m-auto">   
   <p className="text-gray-100 text-left">wesley-slimani@gmail.com</p>  
   <FaLinkedin color="white" />
   </div>
   <Contact />
   <p className="text-gray-100">© 2023 Wesley SLIMANI, Tout droits réservés</p>  
</div>
}