import '@fontsource/lilita-one';
import '@fontsource-variable/inconsolata';
import '@styles/experiencia.css'
import ProjectCard from '../components/components/ProjectCard';
import { projects } from '../data/projects';

const Experienca = () => {
  return (
    <div className="mt-20">
      {/* contexto */}
      <section id="container_context" className='mx-8'>
          <h2 className="text-4xl font-bold">Experiencia practica</h2>
          <p className='text-neutral-400 mt-6 leading-relaxed mx-auto text-sm sm:text-base'>
              Desarrollé aplicaciones con React y Firebase optimizando tiempos de carga en un 30%, creando interfaces 
              responsivas y soluciones funcionales.
              Uso IA en mi día a día para análisis, generación de ideas, 
              debugging y mejora continua, lo que me permite crecer de forma más rápida y 
              consciente como desarrollador.
          </p>
      </section>
      <section className="card_experiencia mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            {...project}
          />
        ))}
      </section>

    </div>
);
};

export default Experienca;
