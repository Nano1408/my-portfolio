import { TbPencilSearch } from "react-icons/tb";
import '@styles/process.css'

const Process = () => {
  return (
    <section>
      <h2 className='text-[40px] py-6'>¿Cómo hago mi trabajo?</h2>

      <div className='container_process bg-white'>
        <p className="mb-10">
            Los procesos son buenos porque nos ahorran tiempo y energía. 
            Los plazos varían, pero los proyectos suelen durar de 4 a 6 semanas 
            para el diseño y desarrollo de sitios web.
        </p>
        <div className="container_card flex">
            <div className="w-[400px]">
                <div className='required flex mb-4'>
                    <h4>Requerimientos</h4>
                    <span>
                        <TbPencilSearch className="w-8 h-8"/>
                    </span>
                </div>
                <p>
                    En esta etapa, discutimos el objetivo del sitio web 
                    y quién lo visitará. Un gran sitio web comienza 
                    descubriendo quiénes serán los usuarios y qué 
                    necesitarán de su sitio; el resto fluye a partir 
                    de ahí.
                </p>
            </div>
            <picture>
                <img
                className="w-[130px] h-auto ml-10"
                src="/img_work_pliegue.png" alt="img_work_pliegue" />
            </picture>
        </div>

      </div>
    </section>
  )
}

export default Process
