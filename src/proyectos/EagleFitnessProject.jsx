import '@fontsource/lilita-one';
import '@fontsource-variable/inconsolata';
import { FaWordpress } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiHostinger } from "react-icons/si";
import '@styles/experiencia.css'

const EagleFitnessProject = () => {
  return (
    <section id="card_container" className="card_eagleFitness mt-10 flex bg-[#1B1B1B]">

            <div className="card_project">
                <h3>Eagle fitness sas</h3>
                <p>
                    Desarrollé una página para Eagle Fitness, 
                    una empresa que ofrece servicios de soldadura,
                    mantenimiento y reparación de máquinas de gimnasio, 
                    así como trabajos en altura. La página incluye un 
                    catálogo de productos que se pueden cotizar directamente 
                    con la empresa y permite adquirir servicios a través de 
                    un chatbot de WhatsApp. Además, proporciona información 
                    detallada sobre todos los servicios ofrecidos.
                </p>
                <hr />
                <div className="flex mt-5">
                <FaWordpress className="text-[#05A5D1] text-3xl mr-4"/>
                    <FaHtml5 className="text-[#E44D26] text-3xl mr-4"/>
                    <SiHostinger className="text-[#6745C8] text-3xl mr-4"/>

                    <div className='flex'>
                        <a href="https://eaglefitnesssas.com/" target='blank_'>
                            <button 
                            className='btn_card_project bg-[#FF9B25] mr-4 rounded-t-lg rounded-b-lg px-5 text-[#023047]'
                            >
                                Web</button>
                        </a>
                    </div>
                </div>
            </div>

            {/* imagen proyecto */}
            <a className="img_project" href="https://eaglefitnesssas.com/" target='blank'>
                <div>
                    <picture>
                        <img
                        src="/img_eagleFitness.png" 
                        alt="img_eagleFitness" 
                        />
                    </picture>
                </div>
            </a>

    </section>
  )
}

export default EagleFitnessProject
