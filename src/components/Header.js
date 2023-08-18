import React from "react"
import { Nav } from "./Nav"
import { Logo } from "./Logo"

export const Header = () => {
   return <div className="bg-turquoise-blue h-20 flex flex-row justify-around items-center content-center">
      <Logo />
      <Nav />  
   </div>
}