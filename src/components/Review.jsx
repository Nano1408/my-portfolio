import '@styles/review.css'
import Talk from '../review/Talk'

const Review = () => {
  return (
    <section className="review_section max-w-4xl mx-auto px-6">
        <h2 className="text-[42px] pt-24 text-center text-white font-bold">
          ¿Listo para elevar su nuevo sitio web?
        </h2>

        <p className="text-slate-400 text-[16px] text-center max-w-2xl mx-auto pt-8 leading-relaxed">
          Un sitio web no solo debe verse bien.
          Debe convertir, comunicar autoridad y generar confianza desde el primer segundo.
          La primera impresión digital define su marca.
        </p>

        <Talk />
    </section>
  )
}

export default Review
