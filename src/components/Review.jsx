import '@styles/review.css'
import Talk from '../review/Talk'

const Review = () => {
  return (
    <section className='review_section w-[692px]'>
        <h2 className='text-[40px] pt-20 -pl-2 text-center'>En cuanto a su nuevo sitio web...</h2>
        <p className='text-slate-200 text-[15px] text-center px-[100px] pt-[40px]'>
            Espero que no sea demasiado 
            presuntuoso de mi parte. Pero las consultas iniciales 
            son gratuitas, por lo que no tienes mucho que perder. 
            Y todo para ganar.
        </p>

        <Talk />
    </section>
  )
}

export default Review
