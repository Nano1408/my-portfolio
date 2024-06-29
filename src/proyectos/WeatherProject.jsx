import '@fontsource/lilita-one';
import '@fontsource-variable/inconsolata';
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
// import { IoLogoFirebase } from "react-icons/io5";
import '@styles/experiencia.css'

const WeatherProject = () => {
  return (
    <section id="card_container" className="card_weather mt-10 flex bg-[#1B1B1B]">

            <div className="card_project">
                <h3>Weather pronostic</h3>
                <p>
                    Desarrollé una aplicación que muestra el pronóstico del clima de tu
                    ubicación actual. Permite buscar el pronóstico de otras ciudades y
                    ofrece información detallada sobre el clima en cualquier lugar,
                    proporcionando datos importantes de manera clara y accesible.
                </p>
                <hr />
                <div className="flex mt-5">
                    <FaReact className="text-[#05A5D1] text-3xl mr-4"/>
                    <RiTailwindCssFill className="text-[#05A5D1] text-3xl mr-4"/>
                    <img className='mr-4' src="/icon_vite.png" alt="icon_vite" />

                    <div className='flex'>
                        <a href="https://ferna-openweather.web.app/" target='blank_'>
                            <button 
                            className='btn_card_project bg-[#FF9B25] mr-4 rounded-t-lg rounded-b-lg px-5 text-[#023047]'
                            >
                                Demo</button>
                        </a>
                        <a href="https://github.com/Nano1408/weatherApp-proyectReact" target='blank_'>
                            <button 
                            className='btn_card_project bg-[#E4E4E4] mr-4 rounded-t-lg rounded-b-lg px-5 text-[#272829]'
                            >
                                Github</button>
                        </a>
                    </div>
                </div>
            </div>

            {/* imagen proyecto */}
            <a className="img_project" href="https://ferna-openweather.web.app/" target='blank'>
                <div>
                    <picture>
                        <img
                        src="/img_project_weather.png" 
                        alt="img_project_weather" 
                        />
                    </picture>
                </div>
            </a>

    </section>
  )
}

export default WeatherProject
