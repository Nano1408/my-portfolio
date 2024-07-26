import React from 'react'
// Supports weights 200-900
import '@fontsource-variable/inconsolata';
import '@styles/aside.css'
import { TfiGithub } from "react-icons/tfi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialGithubCircular } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebookCircular } from "react-icons/ti";
import Social from '../social/Social';

const Aside = () => {
    const phoneNumber = "573245735992";
    const message = "Hola Fernando, como estas? soy...";

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  return (
    <aside>
        <div id='aside' className='max-w-[500px] flex flex-col items-center bg-[#1B1B1B] py-8 px-5 m-10 rounded-[30px]'>
            {/* imagenes */}
            <section className='flex flex-col items-center'>
                {/* icon hithub */}
                <TfiGithub className='text-8xl text-white mb-7'/>
                {/* foto de perfil */}
                <picture>
                    <img 
                    className='resposive_image'
                    src="/profile_photo.jpg" 
                    alt="profile_photo" 
                    />
                </picture>
            </section>

            {/* contexto */}
            <section id='profetion' className='text-[#E4E4E4] mt-10'>
                <p>Profesión:</p>
                <h3 className='text-2xl'>Developer Frontend</h3>
            </section>

            {/* contexto 2*/}
            <section id='profetion' className='text-[#E4E4E4] mt-8'>
                <p>Nacionalidad:</p>
                <h3 className='text-2xl'>Córdoba, Colombia</h3>
            </section>

            {/* iconos sociales */}
            <Social />

            {/* boton de trabajemos juntos */}
            <section className='w-full flex justify-center mt-5'>
                <a href={whatsappURL} target='blank_'>
                    <button className='btn_work font-extrabold'>
                            <span className="span-mother">
                                <span>¡</span>
                                <span>T</span>
                                <span>r</span>
                                <span>a</span>
                                <span>b</span>
                                <span>a</span>
                                <span>j</span>
                                <span>e</span>
                                <span>m</span>
                                <span>o</span>
                                <span>s</span>
                                <span></span>
                                <span className='pr-1'> </span>
                                <span>j</span>
                                <span>u</span>
                                <span>n</span>
                                <span>t</span>
                                <span>o</span>
                                <span>s</span>
                                <span>¡</span>
                            </span>
                            <span className="span-mother2">
                            <span>¡</span>
                                <span>T</span>
                                <span>r</span>
                                <span>a</span>
                                <span>b</span>
                                <span>a</span>
                                <span>j</span>
                                <span>e</span>
                                <span>m</span>
                                <span>o</span>
                                <span>s</span>
                                <span></span>
                                <span className='pr-1'></span>
                                <span>j</span>
                                <span>u</span>
                                <span>n</span>
                                <span>t</span>
                                <span>o</span>
                                <span>s</span>
                                <span>¡</span>
                            </span>
                    </button>
                </a>
                    
            </section>
        </div>
        
    </aside>
  )
}

export default Aside
