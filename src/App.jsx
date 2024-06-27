import Aside from "@components/Aside"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="app-container flex">
      <Aside />

      <div className="header pt-8 ml-20 w-full">
        <header>
          <Navbar />
        </header>

        <main>
        </main>

        <footer>
        </footer>
      </div>
    </div>
  )
}

export default App
