import '@fontsource/lilita-one';
import '@fontsource-variable/inconsolata';
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import '@styles/experiencia.css'

const FernaShop = () => {
  return (
    <section id="card_container" className="card_albumMusic mt-10 flex bg-[#1B1B1B]">
    
                <div className="card_project">
                    <h3>FernaShop</h3>
                    <p>
                        Fernashop es una aplicación e-commerce con panel administrativo para gestionar productos 
                        en tiempo real, desarrollada con JavaScript, HTML, Tailwind y CSS, enfocada en una experiencia moderna 
                        y responsive.
                    </p>
                    <hr />
                    <div className="btn_icon_project flex mt-5">
                        <FaHtml5 className="text-[#E44D26] text-3xl mr-4"/>
                        <IoLogoCss3 className="text-[#05A5D1] text-3xl mr-4"/>
                        <RiJavascriptFill className="text-[#ffcb2d] text-3xl mr-4"/>
                        <IoLogoFirebase className="text-[#ffcb2d] text-3xl mr-4"/>
    
                        <div className='flex'>
                            <a href="https://fernashop-9e0c6.firebaseapp.com/index.html" target='blank_'>
                                <button 
                                className='btn_card_project bg-[#FF9B25] mr-4 rounded-t-lg rounded-b-lg px-5 text-[#023047]'
                                >
                                    Demo</button>
                            </a>
                            <a href="https://github.com/fernadev14/fernashop.git" target='blank_'>
                                <button 
                                className='btn_card_project bg-[#E4E4E4] mr-4 rounded-t-lg rounded-b-lg px-5 text-[#272829]'
                                >
                                    Github</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* imagen proyecto */}
                <a className="img_project" href="https://music-radio-inc.web.app/" target='blank'>
                    <div>
                        <picture>
                            <img
                            src="/fernaShop-png.png" 
                            alt="img_project_weather" 
                            />
                        </picture>
                    </div>
                </a>
    
            </section>
  )
}

export default FernaShop
