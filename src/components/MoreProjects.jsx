import React from 'react'
import BuyCar from '@moreProjects/BuyCar'
import { FaCode } from "react-icons/fa";
import HermanasDominicana from '@moreProjects/HermanasDominicana';
import PosterMovie from '@moreProjects/PosterMovie';
import AdoptionPuppies from '@moreProjects/AdoptionPuppies';

const MoreProjects = () => {
  return (
    <div className="mt-20">
        <div className='flex items-center'>
            <FaCode className='text-[#FFA643] w-[49px] h-[49px] mr-4'/>
            <h2 className='py-6'>Más proyectos</h2>
        </div>

        <section>
            <BuyCar />
            <HermanasDominicana />
            <PosterMovie />
            <AdoptionPuppies />
        </section>
    </div>
  )
}

export default MoreProjects
