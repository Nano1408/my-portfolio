import '@fontsource/lilita-one';
import '@fontsource-variable/inconsolata';
import '@styles/experiencia.css'
import WeatherProject from '@proyectos/WeatherProject'
import AlbumMusicProject from '@proyectos/AlbumMusicProject';
import EagleFitnessProject from '@proyectos/EagleFitnessProject';

const Experienca = () => {
  return (
    <div className="mt-20">
      {/* contexto */}
        <section id="container_context">
            <h2 className="text-[40px]">Experiencia practica</h2>
            <p>
                Tengo experiencia práctica como desarrollador web autodidacta. He
                trabajado en un proyecto en creación de un sitio web de servicios
                técnicos utilizando WordPress para un cliente, desarrollé una
                aplicación web con React integrando APIs de clima y geolocalización, y
                construí un álbum de música con login usando Firebase. Estas
                experiencias me han permitido adquirir habilidades en resolución de
                problemas, adaptabilidad y comunicación efectiva.
            </p>
        </section>
        
        {/* card proyecto 1 (clima) */}
        <WeatherProject />

        {/* card proyecto 2 (album de musica) */}
        <AlbumMusicProject />

        {/* card proyecto 3 (Eagle fitness sas) */}
        <EagleFitnessProject />
    </div>
);
};

export default Experienca;
