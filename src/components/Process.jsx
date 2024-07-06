import Requerid from '@process/Requerid'
import '@styles/process.css'
import Ux from '@process/Ux'
import Figma from '@process/Figma'
import Developer from '@process/Developer'

const Process = () => {
  return (
    <section>
      <h2 className='text-[40px] py-6'>¿Cómo hago mi trabajo?</h2>

      <div className='container_process bg-white py-10'>
        <p className="mb-10">
            Los procesos son buenos porque nos ahorran tiempo y energía. 
            Los plazos varían, pero los proyectos suelen durar de 4 a 6 semanas 
            para el diseño y desarrollo de sitios web.
        </p>

        <Requerid />
        <Ux />
        <Figma />
        <Developer />

      </div>
    </section>
  )
}

export default Process
