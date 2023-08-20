import React from "react"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { About } from "../components/About"
import { Projects } from "../components/Projects"
import { Hero } from "../components/Hero"
import { Skills } from "../components/Skills"


export const Main = () => {
   return <>
   <Header />
   <Hero />
   <About />
   <Projects />
   <Skills />
   <Footer />
   </>
}