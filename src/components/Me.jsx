import React from "react";
import "@styles/me.css";
import "@fontsource/lilita-one";
import "@fontsource-variable/inconsolata";
import Social from "../social/Social";

const Me = () => {
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
          Con una pasión innata por la tecnología y su constante evolución, me
          he especializado en el diseño, desarrollo y producción de paginas web.
          Mis interéses se extienden al mundo de la tecnología, estoy siempre
          dispuesto a asumir nuevos retos y proyectos, no dudes en contactarme.
        </p>
      </section>

      {/* botones para el CV */}
      <section className="container_cv_mail w-full flex">
        <button className="btn-cv mr-12 px-8">
          fernandoperez.99a@gmail.com
        </button>
        <button className="btn-cv px-12">Mira mi CV</button>
      </section>
    </div>
  );
};

export default Me;
