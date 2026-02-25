import { useEffect, useRef, useState } from "react";
import { educationData } from "../data/education";

const Education = () => {
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll(".edu-item");

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
    <section className="relative max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-white mb-20 tracking-tight">
        Educación y cursos
      </h2>

      <div
        ref={containerRef}
        className="relative border-l border-white/10 pl-12 space-y-20"
      >
        {educationData.map((item, index) => {
          const isVisible = visibleItems.includes(String(index));

          return (
            <div
              key={index}
              data-index={index}
              className={`
                edu-item relative
                transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-6"}
              `}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Punto */}
              <span
                className={`
                  absolute -left-[13px] top-2
                  w-4 h-4
                  rounded-full
                  bg-gradient-to-r from-[#FF9B25] to-[#ffb347]
                  transition-all duration-700
                  ${isVisible 
                    ? "shadow-[0_0_20px_rgba(255,155,37,0.4)]" 
                    : ""}
                `}
              />

              {/* Card */}
              <div className="relative group
                   bg-white/[0.03]
                   border border-white/10
                   backdrop-blur-xl
                   rounded-2xl
                   p-8
                   transition-all duration-700
                   hover:-translate-y-1
              ">
                {/* Glow Apple */}
                <div className="
                  absolute inset-0 rounded-2xl
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-700
                  pointer-events-none
                "
                style={{
                  background: "radial-gradient(circle at 50% 0%, rgba(255,155,37,0.08), transparent 70%)"
                }}
                />
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
          );
        })}
      </div>
    </section>
  );
};

export default Education;