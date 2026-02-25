// import React from 'react'
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
// import '@styles/main.css';

function App() {

  return (
    <div className=" relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background Glow */}
  <div className="
    absolute inset-0
    -z-10
    bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.15),transparent_40%),
        radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.15),transparent_40%)]
  " />

  {/* {children} */}
        <Aside />

      <div className="content-container">
        <header>
          <Navbar />
        </header>

        <main id='main'>

          <section id="inicio">
            <Me />
          </section>

            <section id='experiencia'>
              <Experienca />
            </section>

            <section id="educations">
              <Education />
            </section>

            

            <section id="proyectos">
              <MoreProjects />
            </section>

            <section id="proceso">
              <Process />
            </section>

            <section id="teams">
              <Teams />
            </section>

            <section id="review">
              <Review />
            </section>

            <section id="contacto">
              <Contact />
            </section>

        </main>
      </div>
    </div>
  )
}

export default App
