import { FaCode } from "react-icons/fa";
import MoreProjectCard from "../moreProjects/MoreProjectCard";
import { moreProjects } from "../data/moreProjects";
// import BuyCar from '@moreProjects/BuyCar'
// import HermanasDominicana from '@moreProjects/HermanasDominicana';
// import PosterMovie from '@moreProjects/PosterMovie';
// import AdoptionPuppies from '@moreProjects/AdoptionPuppies';

const MoreProjects = () => {
  return (
    <div className="mt-20">
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
                max-w-[1300px]
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

        {/* <section>
            <BuyCar />
            <HermanasDominicana />
            <PosterMovie />
            <AdoptionPuppies />
        </section> */}
    </div>
  )
}

export default MoreProjects
