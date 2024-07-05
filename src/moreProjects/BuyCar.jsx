import { IoLogoCss3 } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

const BuyCar = () => {
  return (
    <section id="card_container" className="card_carrito mt-10 flex bg-[#1B1B1B]">

    <div className="card_project">
        <h3>Carrito De Compras</h3>
        <p>
            Una web básica de carrito de compras para artículos de muebles, 
            donde los usuarios pueden agregar artículos al carrito, eliminar 
            productos y revisar todos los artículos seleccionados en la canasta de 
            compras. La interfaz es intuitiva y facilita la gestión de compras de manera 
            sencilla y eficiente.
        </p>
        <hr />
        <div className="flex mt-5">
            <IoLogoCss3 className="text-[#264DE4] text-3xl mr-4"/>
            <FaHtml5 className="text-[#E44D26] text-3xl mr-4"/>
            <RiJavascriptFill className="text-[#FBC02D] text-3xl mr-4"/>

            <div className='flex'>
                <a href="https://mueblesyaccesorios.netlify.app/" target='blank_'>
                    <button 
                    className='btn_card_project bg-[#FF9B25] mr-4 rounded-t-lg rounded-b-lg px-5 text-[#023047]'
                    >
                        Demo</button>
                </a>
                <a href="https://github.com/Nano1408/NewStorePoliandino" target='blank_'>
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
                src="/img_project_carrito.png" 
                alt="img_project_weather" 
                />
            </picture>
        </div>
    </a>

    </section>
  )
}

export default BuyCar
