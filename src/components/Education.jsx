import { educationData } from '../data/education'

const Education = () => {
  return (
    <section className="relative max-w-4xl mx-auto px-6 py-24">
      
      <h2 className="text-4xl font-bold text-white mb-20 tracking-tight">
        Educación y cursos
      </h2>

      {/* Línea vertical */}
      <div className="relative border-l border-white/10 pl-12 space-y-20">

        {educationData.map((item, index) => (
          <div key={index} className="relative">

            {/* Punto */}
            <span className="
              absolute -left-[13px] top-2
              w-5 h-5
              rounded-full
              bg-gradient-to-r from-[#FF9B25] to-[#ffb347]
              shadow-lg
              shadow-orange-500/30
            " />

            {/* Card */}
            <div className="
              bg-white/[0.03]
              border border-white/10
              backdrop-blur-xl
              rounded-2xl
              p-8
              transition-all duration-500 ease-out
              hover:-translate-y-2
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]
            ">
              <p className="text-sm text-neutral-500 mb-3 tracking-wide">
                {item.date}
              </p>

              <h3 className="text-2xl font-semibold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-orange-400 text-sm mb-6">
                {item.institution}
              </p>

              <p className="text-neutral-400 text-sm leading-relaxed max-w-xl">
                {item.description}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}

export default Education