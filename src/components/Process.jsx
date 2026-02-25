import { useEffect, useRef, useState } from "react";
import { processData } from "../data/processData";
import { TbPencilSearch } from "react-icons/tb";
import { LiaPagerSolid } from "react-icons/lia";
import { FaFigma } from "react-icons/fa";
import { FiCode } from "react-icons/fi";

const iconMap = {
  search: <TbPencilSearch size={28} />,
  ux: <LiaPagerSolid size={28} />,
  figma: <FaFigma size={28} />,
  code: <FiCode size={28} />
};

const Process = () => {
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll(".process-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-28">

      <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
        ¿Cómo hago mi trabajo?
      </h2>

      <p className="text-neutral-400 max-w-2xl mb-20">
        Trabajo con procesos claros que optimizan tiempo y resultados.
        Un proyecto suele durar entre 4 y 6 semanas dependiendo del alcance.
      </p>

      <div
        ref={containerRef}
        className="grid md:grid-cols-2 gap-12"
      >
        {processData.map((item, index) => {
          const isVisible = visibleItems.includes(String(index));

          return (
            <div
              key={index}
              data-index={index}
              className={`
                process-item
                group
                relative
                bg-white/[0.03]
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-8
                transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:-translate-y-2
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)]
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Glow Apple */}
              <div
                className="
                  absolute inset-0 rounded-3xl
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-700
                  pointer-events-none
                "
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(255,155,37,0.08), transparent 70%)"
                }}
              />

              {/* Icon */}
              <div className="mb-6 text-orange-400">
                {iconMap[item.icon]}
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-neutral-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Process;