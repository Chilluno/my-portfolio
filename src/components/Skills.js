import React from "react"
import {FaReact, FaJs, FaCss3Alt, FaHtml5, FaSass} from "react-icons/fa"

export const Skills = () => {
   return <section className="h-auto bg-light-grey pt-4 pb-12" id="skills">
         <h2 className="text-4xl text-blue-grey pb-2 font-bold">Compétences</h2>
         <div className="border-t-2 w-20 m-auto border-dreamy-purple"></div>

            <ul className="flex justify-center align-middle mt-4 relative"> 
               <li>
                  <FaReact className="md:hidden" size={65} color="#61dbfb"/>
                  <FaReact className="hidden md:block" size={120} color="#61dbfb"/>
               </li>
               <li>
                  <FaJs className="md:hidden" size={65} color="#F0DB4F"/>
                  <FaJs className="hidden md:block" size={120} color="#F0DB4F"/>
               </li>
               <li>
                  <FaHtml5 className="md:hidden" size={65} color="#e34c26"/>
                  <FaHtml5 className="hidden md:block" size={120} color="#e34c26"/>
               </li>
               <li>
                  <FaCss3Alt className="md:hidden" size={65} color="#264de4"/>
                  <FaCss3Alt className="hidden md:block" size={120} color="#264de4"/>
               </li>
               <li>
                  <FaSass className="md:hidden" size={65} color="#cc6699"/>
                  <FaSass className="hidden md:block" size={120} color="#cc6699"/>
               </li>
            </ul>

   </section>
}