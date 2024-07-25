import { IoLogoCss3 } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

const PosterMovie = () => {
  return (
    <section id="card_container" className="card_posterMovie mt-10 flex bg-[#1B1B1B]">

    <div className="card_project">
        <h3>Poster de Películas</h3>
        <p>
            Póster de películas con un video de fondo, ofreciendo una interfaz 
            amigable e intuitiva. La página destaca visualmente los pósteres y 
            proporciona una experiencia inmersiva para los usuarios al explorar 
            los detalles de las películas.
        </p>
        <hr />
        <div className="flex mt-5">
            <IoLogoCss3 className="text-[#264DE4] text-3xl mr-4"/>
            <FaHtml5 className="text-[#E44D26] text-3xl mr-4"/>
            <RiJavascriptFill className="text-[#FBC02D] text-3xl mr-4"/>

            <div className='flex'>
                <a href="https://poster-peliculas.netlify.app/" target='blank_'>
                    <button 
                    className='btn_card_project bg-[#FF9B25] mr-4 rounded-t-lg rounded-b-lg px-5 text-[#023047]'
                    >
                        Demo</button>
                </a>
                <a href="https://github.com/Nano1408/PosterPeliculas" target='blank_'>
                    <button 
                    className='btn_card_project bg-[#E4E4E4] mr-4 rounded-t-lg rounded-b-lg px-5 text-[#272829]'
                    >
                        Github</button>
                </a>
            </div>
        </div>
    </div>
    {/* imagen proyecto */}
    <a className="img_project" href="https://poster-peliculas.netlify.app/" target='blank'>
        <div>
            <picture>
                <img
                src="/img_project_posterMovie.jpg" 
                alt="img_project_weather" 
                />
            </picture>
        </div>
    </a>

    </section>
  )
}

export default PosterMovie
