import "@styles/me.css";
import "@fontsource/lilita-one";
import "@fontsource-variable/inconsolata";
import Social from "../social/Social";
import { FaRegCopy } from "react-icons/fa";
import Swal from 'sweetalert2'

const Me = () => {

    const email = "fernandoperez.99a@gmail.com"
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(email).then(() => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Copiado en el portapapeles"
        });
      });
    };


  return (
    <div className="container_me w-full max-w-[800px] px-6 mx-auto mt-24">
    <section id="me" className="animate-fadeUp relative max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* <Social /> */}

        <div className="name_photo flex flex-col">

          {/* FOTO */}
          <img
            src="/perfil-photo.png"
            alt="Fernando Pérez"
            className="img_profile_photo w-32 h-32 rounded-full object-cover object-top mb-6 shadow-lg"
          />

          {/* NOMBRE */}
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Fernando Pérez
          </h1>

          {/* REDES */}
          <div className="xl:hidden">
            <Social />
          </div>

        </div>

        <div className="w-full flex flex-wrap">
          <p className="text-neutral-400 mt-6 leading-relaxed mx-auto text-sm sm:text-base">
            Frontend Developer enfocado en crear interfaces modernas,
            escalables y optimizadas para rendimiento y experiencia de usuario.
            Uso IA como herramienta estratégica para mejorar procesos y construir
            productos digitales con impacto real.
          </p>
        </div>
      </section>

      <p className="text-neutral-500 text-sm mt-10">
        ¿Te interesa trabajar conmigo?
      </p>

      <section className="btn_me w-full flex flex-col sm:flex-row gap-4 mt-8">

        {/* CV */}
        <a
          href="https://drive.google.com/file/d/1qGRC7KFq8fOV2aC16wJtKE2gmYFBl02u/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden px-8 py-3 rounded-xl 
                     bg-white text-black font-medium
                     transition-all duration-300
                     hover:scale-[1.02]"
        >
          Descargar CV
        </a>

        {/* Email */}
        <button
          onClick={copyToClipboard}
          className="px-6 py-3 rounded-xl 
                     border border-neutral-700
                     text-neutral-300
                     flex items-center justify-center gap-3
                     transition-all duration-300
                     hover:border-white hover:text-white"
        >
          <FaRegCopy className="text-lg" />
          <span className="text-sm sm:text-base">
            {email}
          </span>
        </button>

      </section>
    </div>
  );
};

export default Me;
