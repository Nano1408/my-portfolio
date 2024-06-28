import React from 'react'
// Supports weights 200-900
import '@fontsource-variable/inconsolata';
import '@styles/aside.css'
import { TfiGithub } from "react-icons/tfi";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialGithubCircular } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebookCircular } from "react-icons/ti";

const Aside = () => {
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
            <section className='flex mt-[54px] w-full justify-center'>
                {/* icon linkedin social */}
                <a 
                href="https://www.linkedin.com/in/fernando-perez-florez/" 
                target='blank_'
                className='socialIcon mr-3'
                >
                    <TiSocialLinkedinCircular className='icon text-5xl text-white'/>
                </a>

                {/* icon github social */}
                <a 
                href="https://github.com/Nano1408" 
                target='blank_' 
                className='socialIcon mr-3'
                >
                    <TiSocialGithubCircular className='icon text-5xl text-white'/>
                </a>

                {/* icon instagram social */}
                <a 
                href="https://www.instagram.com/fernadev14/" 
                target='blank_' 
                className='socialIcon mr-3'
                >
                    <IoLogoInstagram className='icon text-5xl text-white'/>
                </a>

                {/* icon facebook social */}
                <a 
                href="https://www.facebook.com/fernando.pf.3956" 
                target='blank' 
                className='socialIcon mr-3'
                >
                    <TiSocialFacebookCircular className='icon text-5xl text-white'/>
                </a>
            </section>

            {/* boton de trabajemos juntos */}
            <section className='w-full flex justify-center mt-5'>
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
            </section>
        </div>
        
    </aside>
  )
}

export default Aside
