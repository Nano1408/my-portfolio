// Supports weights 200-900
import '@fontsource-variable/inconsolata';
import '@styles/aside.css'
import Social from '../social/Social';

const Aside = () => {
    const phoneNumber = "573245735992";
    const message = "Hola Fernando, como estas? soy...";

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  return (
    <aside className='hidden xl:block animate-float'>
        <div
          id='aside'
          className='w-[320px] flex flex-col items-center
                     bg-neutral-900 border border-neutral-800
                     py-10 px-6 m-10 rounded-3xl'
        >
        
          {/* FOTO */}
          <picture className="w-40 h-40 rounded-2xl overflow-hidden border border-neutral-800 shadow-lg shadow-black/30">
            <img 
              src="/perfil-photo.png" 
              alt="Fernando Perez"
              className="w-full h-full object-cover object-top"
            />
          </picture>

          {/* PROFESIÓN */}
          <section className='mt-8 text-neutral-300 text-center'>
            <p className="text-lg uppercase tracking-wider">
              Frontend Developer
            </p>
            
            <p className="text-xs text-neutral-500 mt-1">
              Interfaces modernas • Performance • UX
            </p>
            <p className='text-sm text-neutral-500 mt-2'>
              Enfocado en soluciones modernas apoyadas en IA
            </p>
          </section>

          {/* UBICACIÓN */}
          <section className='mt-6 text-neutral-300 text-center'>
            <p className='text-sm text-neutral-500'>Ubicación</p>
            <h3 className='text-lg mt-1'>Colombia</h3>
          </section>

          <Social />

          {/* BOTÓN SIMPLE */}
          <section className='w-full flex justify-center mt-8'>
            <a 
              href={whatsappURL} 
              target="_blank"
              className="w-full mt-6 px-6 py-3 rounded-xl 
                         bg-orange-500 text-white font-medium
                         text-center
                         transition-all duration-300
                         hover:bg-orange-600 hover:scale-105"
            >
              Trabajemos juntos
            </a>
          </section>

        </div>
        
    </aside>
  )
}

export default Aside
