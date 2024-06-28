import Aside from "@components/Aside"
import Navbar from "./components/Navbar"
import Me from "./components/Me"
import '@styles/app.css';
import Experienca from "@components/Experienca";

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
          {/* <section id="Proyectos">
            <Projects />
          </section>
          <section id="Sobre mí">
            <AboutMe />
          </section>
          <section id="Proceso">
            <Process />
          </section>
          <section id="Contacto">
            <Contact />
          </section> */}
        </main>

        <footer>
        </footer>
      </div>
    </div>
  )
}

export default App
