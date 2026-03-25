import { FaCode } from "react-icons/fa";
import MoreProjectCard from "../components/components/MoreProjectCard";
import { moreProjects } from "../data/moreProjects";
import "@styles/moreProject.css";

const MoreProjects = () => {
  return (
    <div className="card_container mt-20">
        <div className='flex items-center'>
            <FaCode className='text-[#ffffff] w-[49px] h-[49px] mr-4'/>
            <h2 className='py-6 text-white text-4xl font-bold'>Más proyectos</h2>
        </div>

        <section className="
                mt-16
                grid
                grid-cols-1
                md:grid-cols-1
                lg:grid-cols-2
                2xl:grid-cols-2
                gap-8
                max-w-[650px]
                mx-auto
                justify-items-center"
        >
        {moreProjects.map((project, index) => (
          <MoreProjectCard
            key={index}
            {...project}
          />
        ))}
      </section>
    </div>
  )
}

export default MoreProjects
