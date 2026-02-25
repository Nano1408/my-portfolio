import '@fontsource/lilita-one';
import '@fontsource-variable/inconsolata';
import '@styles/experiencia.css'
import ProjectCard from '../proyectos/ProjectCard';
import { projects } from '../data/projects';

const Experienca = () => {
  return (
    <div className="mt-20">
      {/* contexto */}
      <section id="container_context">
          <h2 className="text-4xl font-bold">Experiencia practica</h2>
          <p>
              Desarrollé aplicaciones con React y Firebase optimizando tiempos de carga en un 30%, creando interfaces 
              responsivas y soluciones funcionales.
              Uso IA en mi día a día para análisis, generación de ideas, 
              debugging y mejora continua, lo que me permite crecer de forma más rápida y 
              consciente como desarrollador.
          </p>
      </section>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            {...project}
          />
        ))}
      </section>
        {/* card proyecto 3 (Huella de regreso) */}
        {/* <HuellaDeRegreso /> */}

        {/* card proyecto 3 (Huella de regreso) */}
        {/* <Jardineria /> */}
        
        {/* card proyecto 4 (FernaShop - panel admin) */}
        {/* <FernaShop /> */}

        {/* card proyecto 1 (clima) */}
        {/* <WeatherProject /> */}

        {/* card proyecto 2 (album de musica) */}
        {/* <AlbumMusicProject /> */}

    </div>
);
};

export default Experienca;
