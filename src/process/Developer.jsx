import { LiaLaptopCodeSolid } from "react-icons/lia";
import { BiCodeBlock } from "react-icons/bi";

const Developer = () => {
  return (
    <div className="cards developer_container_card flex justify-between mt-[50px]">
        <div className="content_subtitle w-[400px]">
            <div className='required flex mb-4'>
                <h4>Desarrollo & Ejecución:</h4>
                <span>
                    <BiCodeBlock className="w-10 h-10 ml-4"/>
                </span>
            </div>
            <p>
                Usando tecnologías como React, Angular, Astro y Vue para facilitar el mantenimiento, 
                desarrollaré páginas animadas que deleitarán a sus usuarios. Se integra Google 
                Analytics, se realiza SEO y, después de algunos tutoriales, estará listo para 
                comenzar.
            </p>
        </div>
        <LiaLaptopCodeSolid className="icon_large w-[130px] h-[130px]"/>
    </div>
  )
}

export default Developer
