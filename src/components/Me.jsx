import "@styles/me.css";
import "@fontsource/lilita-one";
import "@fontsource-variable/inconsolata";
import Social from "../social/Social";
import { FaRegCopy } from "react-icons/fa";
import Swal from 'sweetalert2'

const Me = () => {

    const email = "fernandoperez.99a@gmail.com";
  
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
    <div className="container_me w-[800px] mt-40">
      <section id="me">
        <Social />
        <div className="name_fernando_profile flex">
          {/* la imagen solo aparece cuando es tamaño maximo de 1200px */}
          <picture className="img_profile">
              <img
                className="resposive_image"
                src="/profile_photo.jpg"
                alt="profile_photo"
              />
            </picture>
            <h1 className="title">Hey, soy Fernando Pérez</h1>
        </div>

        <p className="descritpion">
          desarrollador frontend apasionado por crear experiencias web claras, funcionales y atractivas.
          Actualmente estudio Inteligencia Artificial y Prompt Engineering, usando la IA como una aliada 
          para aprender más rápido, mejorar mi código y optimizar procesos.
          Me motiva transformar ideas en productos digitales que realmente aporten valor.
        </p>
      </section>

      {/* botones para el CV */}
      <section className="container_cv_mail w-full flex">
        <a
          href={`mailto:${email}`}
          className="btn-cv mr-4 px-8 flex justify-center"
          rel="noopener noreferrer"
        >
          <FaRegCopy
          className="icon-copy cursor-pointer text-xl mr-3"
          onClick={copyToClipboard}
          />
          {email}
        </a>
        
        <a href="https://drive.google.com/file/d/1TdiIZgvZEpyPTd7g8SiXO5wL-jopPucg/view?usp=sharing" rel="noopener noreferrer" target="blank_">
          <button className="btn-cv px-12">Mira mi CV</button>
        </a>
      </section>
    </div>
  );
};

export default Me;
