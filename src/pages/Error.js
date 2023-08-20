import React from "react"
import { Link } from "react-router-dom"
import { Logo } from "../components/Logo"
import { Footer } from "../components/Footer"

export const Error = () => {
   return <><div className="bg-turquoise-blue h-20 flex flex-row justify-around items-center content-center"> <Logo /></div>

            <div className="mx-auto my-60 text-blue-grey">
            <h2 className="text-6xl pb-6">On dirait que vous vous êtes perdu !</h2>
            <Link className="hover:underline" to="/">Cliquez ici pour revenir à la page d'accueil !</Link>
            </div>
            <Footer />
</>
}