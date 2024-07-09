import React from 'react'
import Aside from "@components/Aside"
import Navbar from "./components/Navbar"
import Me from "./components/Me"
import Experienca from "@components/Experienca";
import Education from "@components/Education";
import MoreProjects from "@components/MoreProjects";
import Process from "@components/Process";
import Teams from "@components/Teams";
import Review from "@components/Review";
import Contact from "@components/Contact";
import '@styles/app.css';

function App() {

  return (
    <div className="app-container">
      <div>
        <Aside />
      </div>

      <div className="content-container">
        <header>
          <Navbar />
        </header>

        <main>
          <section id="Inicio">
            <Me />
            <Experienca />
          </section>

          <section id="Education">
            <Education />
          </section>

          <section id="Proyectos">
            <MoreProjects />
          </section>

          <section id="Proceso">
            <Process />
          </section>

          <section id="Teams">
            <Teams />
          </section>

          <section id="Review">
            <Review />
          </section>

          <section id="Contacto">
            <Contact />
          </section>

          {/*<section id="Sobre mí">
            <AboutMe />
          </section>
          
           */}
        </main>

        <footer>
        </footer>
      </div>
    </div>
  )
}

export default App
