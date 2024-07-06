import { TbPencilSearch } from "react-icons/tb";
import { LiaPagerSolid } from "react-icons/lia";

const Requerid = () => {
  return (
    <div className="cards requerid_container_card flex justify-between">
        <div className="w-[400px]">
            <div className='required flex mb-4'>
                <h4>Requerimientos:</h4>
                <span>
                    <TbPencilSearch className="w-10 h-10 ml-4"/>
                </span>
            </div>
            <p>
                En esta etapa, discutimos el objetivo del sitio web 
                y quién lo visitará. Un gran sitio web comienza 
                descubriendo quiénes serán los usuarios y qué 
                necesitarán de su sitio; el resto fluye a partir 
                de ahí.
            </p>
        </div>
        <LiaPagerSolid className="icon_large w-[130px] h-[130px]" />
    </div>
  )
}

export default Requerid
