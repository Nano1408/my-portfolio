import '@styles/education.css'
import '@fontsource-variable/inconsolata';

const Education = () => {
  return (
    <div>
        <h2>Educación y cursos</h2>

        {/* section software Enginner */}
        <hr className='mb-11'/>
      <section id='education' className='flex justify-between'>
        <p>En 2021 - Actualmente</p>
        <div>
            <h4>Ingeniería De Software</h4>
            <p>Corporación U. Iberoamericana</p>
        </div>
        <p className='text-[15px] w-[300px]'>Soy estudiante de Ingeniería de Software en quinto semestre, 
            con experiencia en desarrollo web, bases de datos y programación. 
            Mi formación incluye proyectos prácticos que han fortalecido mis 
            habilidades técnicas y de resolución de problemas.</p>
      </section>
      <hr className='mt-9'/>
      
      {/* section developer frontend */}
      <hr className='mb-11'/>
      <section id='education' className='flex justify-between'>
        <p>Jun 2022 - Dic 2022</p>
        <div>
            <h4>Desarrollador Frontend</h4>
            <p>Politécnico Andino</p>
        </div>
        <p className='text-[15px] w-[300px]'>
            Completé un diplomado intensivo en desarrollo web, 
            donde aprendí JavaScript a nivel intermedio, React y el uso de API REST. 
            Esta formación me permitió mejorar mis habilidades en el desarrollo de 
            aplicaciones web modernas y dinámicas.</p>
      </section>
      <hr className='mt-9'/>

      {/* section developer ReactJS */}
      <hr className='mb-11'/>
      <section id='education' className='flex justify-between'>
        <p>Ene 2021 - May 2022</p>
        <div>
            <h4>Desarrollador ReactJS</h4>
            <p>Instituto T. Metropolitano</p>
        </div>
        <p className='text-[15px] w-[300px]'>
            Completé un diplomado intensivo en ReactJS, donde profundicé 
            mis conocimientos en el desarrollo de aplicaciones web utilizando 
            esta tecnología líder en el mercado. Adquirí habilidades avanzadas 
            en la creación de interfaces de usuario dinámicas y eficientes.
            </p>
      </section>
      <hr className='mt-9'/>

      {/* section Redes de Datos */}
      <hr className='mb-11'/>
      <section id='education' className='flex justify-between'>
        <p>Ene 2018 - Ago 2020</p>
        <div>
            <h4>Teg. Redes De Datos</h4>
            <p>SENA</p>
        </div>
        <p className='text-[15px] w-[300px]'>
            Completé una tecnología en Gestión de Redes de Datos, enfocada 
            en la infraestructura de redes y cableado estructurado. Adquirí 
            conocimientos sólidos en diseño, implementación y mantenimiento 
            de redes, así como en normativas y estándares de cableado.
        </p>
      </section>
      <hr className='mt-9'/>
    </div>
  )
}

export default Education
