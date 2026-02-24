import { FaWordpress } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";

const Jardineria = () => {
  return (
    <section id="card_container" className="card_jardineria mt-10 flex bg-[#1B1B1B]">
    
                <div className="card_project">
                    <h3>Jardineria R-Verde</h3>
                    <p>
                        Desarrollo y administración de Jardineros Profesionales Medellín, sitio web 
                        corporativo creado en WordPress para un cliente real. Actualmente continúo 
                        gestionando el mantenimiento y mejoras en la interfaz (UI) para optimizar 
                        la experiencia del usuario.
                    </p>
                    <hr />
                    <div className="btn_icon_project flex mt-5">
                        <FaWordpress className="text-[#05A5D1] text-3xl mr-4"/>
                        <FaHtml5 className="text-[#ff5e2d] text-3xl mr-4"/>
                        <FaCss3 className="text-[#2d8bff] text-3xl mr-4"/>
    
                        <div className='flex'>
                            <a href="https://jardinerosprofesionalesmedellin.com/" target='blank_'>
                                <button 
                                className='btn_card_project bg-[#FF9B25] mr-4 rounded-t-lg rounded-b-lg px-5 text-[#023047]'
                                >
                                    Web</button>
                            </a>
                            {/* <a href="https://github.com/fernadev14/huella-de-regreso.git" target='blank_'>
                                <button 
                                className='btn_card_project bg-[#E4E4E4] mr-4 rounded-t-lg rounded-b-lg px-5 text-[#272829]'
                                >
                                    Github</button>
                            </a> */}
                        </div>
                    </div>
                </div>
    
                {/* imagen proyecto */}
                <a className="img_project" href="https://jardinerosprofesionalesmedellin.com/" target='blank'>
                    <div>
                        <picture>
                            <img
                            src="/jardineria-r-verde.png" 
                            alt="jardineria-r-verde.png" 
                            />
                        </picture>
                    </div>
                </a>
    
        </section>
  )
}

export default Jardineria
