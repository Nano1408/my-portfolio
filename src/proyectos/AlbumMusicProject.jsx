import '@fontsource/lilita-one';
import '@fontsource-variable/inconsolata';
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import '@styles/experiencia.css'

const AlbumMusicProject = () => {
  return (
    <section id="card_container" className="card_albumMusic mt-10 flex bg-[#1B1B1B]">

            <div className="card_project">
                <h3>Album Music</h3>
                <p>
                    web app que permite a los usuarios registrarse y acceder mediante un login. 
                    Una vez iniciada la sesión, los usuarios son llevados a la página 
                    principal que muestra un álbum de música de The Weeknd. Además, 
                    los usuarios pueden editar su información de registro directamente 
                    desde la aplicación.
                </p>
                <hr />
                <div className="btn_icon_project flex mt-5">
                    <FaReact className="text-[#05A5D1] text-3xl mr-4"/>
                    <RiTailwindCssFill className="text-[#05A5D1] text-3xl mr-4"/>
                    <img className='mr-4' src="/icon_vite.png" alt="icon_vite" />
                    <IoLogoFirebase className="text-[#ffcb2d] text-3xl mr-4"/>

                    <div className='flex'>
                        <a href="https://music-radio-inc.web.app/" target='blank_'>
                            <button 
                            className='btn_card_project bg-[#FF9B25] mr-4 rounded-t-lg rounded-b-lg px-5 text-[#023047]'
                            >
                                Demo</button>
                        </a>
                        <a href="https://github.com/Nano1408/Music_Radio_Inc" target='blank_'>
                            <button 
                            className='btn_card_project bg-[#E4E4E4] mr-4 rounded-t-lg rounded-b-lg px-5 text-[#272829]'
                            >
                                Github</button>
                        </a>
                    </div>
                </div>
            </div>
            {/* imagen proyecto */}
            <a className="img_project" href="https://music-radio-inc.web.app/" target='blank'>
                <div>
                    <picture>
                        <img
                        src="/img_project_album.jpg" 
                        alt="img_project_weather" 
                        />
                    </picture>
                </div>
            </a>

        </section>
  )
}

export default AlbumMusicProject
