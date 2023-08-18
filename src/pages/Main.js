import React from "react"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { About } from "../components/About"
import { Projects } from "../components/Projects"
import { Hero } from "../components/Hero"

export const Main = () => {
   return <>
   <Header />
   <Hero />
   <About />
   <Projects />
   <Footer />
   </>
}