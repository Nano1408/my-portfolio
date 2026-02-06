import '@fontsource/lilita-one';
import '@fontsource-variable/inconsolata';
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import '@styles/experiencia.css'

const EagleFitnessProject = () => {
  return (
    <section id="card_container" className="card_eagleFitness mt-10 flex bg-[#1B1B1B]">

            <div className="card_project">
                <h3>Huella de regreso</h3>
                <p>
                    Huella de Regreso es una plataforma web orientada a ayudar a encontrar mascotas perdidas 
                    y reportar mascotas encontradas, centralizando la información por ubicación y estado para 
                    facilitar el reencuentro con sus dueños. El proyecto prioriza una experiencia clara, accesible 
                    y optimizada tanto para escritorio como móvil.
                </p>
                <hr />
                <div className="btn_icon_project flex mt-5">
                    <FaReact className="text-[#05A5D1] text-3xl mr-4"/>
                    <RiTailwindCssFill className="text-[#05A5D1] text-3xl mr-4"/>
                    <IoLogoFirebase className="text-[#ffcb2d] text-3xl mr-4"/>
                    <img className='mr-4' src="/icon_vite.png" alt="icon_vite" />
                    <img className='mr-4 h-8' src="/cloudinary-png.png" alt="icon_vite" />

                    <div className='flex'>
                        <a href="https://huella-de-regreso.web.app/publicaciones" target='blank_'>
                            <button 
                            className='btn_card_project bg-[#FF9B25] mr-4 rounded-t-lg rounded-b-lg px-5 text-[#023047]'
                            >
                                Demo</button>
                        </a>
                        <a href="https://github.com/fernadev14/huella-de-regreso.git" target='blank_'>
                            <button 
                            className='btn_card_project bg-[#E4E4E4] mr-4 rounded-t-lg rounded-b-lg px-5 text-[#272829]'
                            >
                                Github</button>
                        </a>
                    </div>
                </div>
            </div>

            {/* imagen proyecto */}
            <a className="img_project" href="https://huella-de-regreso.web.app/publicaciones" target='blank'>
                <div>
                    <picture>
                        <img
                        src="/public/huella-de-regreso-png.png" 
                        alt="huella-de-regreso-png" 
                        />
                    </picture>
                </div>
            </a>

    </section>
  )
}

export default EagleFitnessProject
