import '@fontsource/lilita-one';
import '@fontsource-variable/inconsolata';
import '@styles/experiencia.css'
import HuellaDeRegreso from '@proyectos/HuellaDeRegreso';
import FernaShop from '../proyectos/FernaShop';
import WeatherProject from '@proyectos/WeatherProject'
import AlbumMusicProject from '@proyectos/AlbumMusicProject';
import Jardineria from '@proyectos/Jardineria';

const Experienca = () => {
  return (
    <div className="mt-20">
      {/* contexto */}
        <section id="container_context">
            <h2 className="text-[40px]">Experiencia practica</h2>
            <p>
                Desarrollé aplicaciones con React y Firebase optimizando tiempos de carga en un 30%, creando interfaces 
                responsivas y soluciones funcionales.
                Uso IA en mi día a día para análisis, generación de ideas, 
                debugging y mejora continua, lo que me permite crecer de forma más rápida y 
                consciente como desarrollador.
            </p>
        </section>
        {/* card proyecto 3 (Huella de regreso) */}
        <HuellaDeRegreso />

        {/* card proyecto 3 (Huella de regreso) */}
        <Jardineria />
        
        {/* card proyecto 4 (FernaShop - panel admin) */}
        <FernaShop />

        {/* card proyecto 1 (clima) */}
        <WeatherProject />

        {/* card proyecto 2 (album de musica) */}
        <AlbumMusicProject />

    </div>
);
};

export default Experienca;
