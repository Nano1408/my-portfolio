import { IoLogoFigma } from "react-icons/io5";
import { LuMonitorSmartphone } from "react-icons/lu";

const Figma = () => {
  return (
    <div className="cards figma_container_card flex justify-between mt-[50px]">
        <div className="w-[400px]">
            <div className='required flex mb-4'>
                <h4>Diseño Figma:</h4>
                <span>
                    <IoLogoFigma className="w-10 h-10 ml-4"/>
                </span>
            </div>
            <p>
                Discutiremos la apariencia del sitio y cómo podemos deleitar 
                a los visitantes de su web. Basándome en esta conversación, 
                diseñaré maquetas de Figma de las páginas de su sitio antes 
                de enviarlas para su revisión.
            </p>
        </div>
        <LuMonitorSmartphone className="icon_large w-[130px] h-[130px]"/>
    </div>
  )
}

export default Figma
