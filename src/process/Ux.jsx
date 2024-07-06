import { CgDesignmodo } from "react-icons/cg";
import { RiPagesFill } from "react-icons/ri";

const Ux = () => {
  return (
    <div className="cards ux_container_card flex">
        <div className="w-[400px]">
            <div className='required flex mb-4'>
                <h4>Estructura UX:</h4>
                <span>
                    <CgDesignmodo className="w-10 h-10 ml-4"/>
                </span>
            </div>
            <p>
                Luego, las necesidades de su usuario se traducen en un mapa del 
                sitio de todas sus páginas y su estructura subyacente. (Explicaré 
                lo que esto significa cuando llegue el momento). Una vez aprobados, 
                se entregan los esquemas básicos del sitio y luego se repiten para confirmar 
                el diseño del sitio.
            </p>
        </div>
            <RiPagesFill className="icon_large w-[130px] h-[130px]"/>
        </div>
  )
}

export default Ux
