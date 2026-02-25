import { useRef, useState, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { SiVite } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import '@styles/experiencia.css'

const techIcons = {
  react: <FaReact className="text-[#61DAFB]" />,
  tailwind: <RiTailwindCssFill className="text-[#38BDF8]" />,
  firebase: <IoLogoFirebase className="text-[#FFCB2D]" />,
  vite: <SiVite className="text-[#ffe064]" />,
  cloudinary: <SiCloudinary className="text-[#22a3ff]" />,
  wordpress: <FaWordpress className="text-[#21759B]" />,
  html: <FaHtml5 className="text-[#E34F26]" />,
  css: <FaCss3 className="text-[#1572B6]" />,
  javaScript: <DiJavascript className="text-[#F7DF1E]" />
};

const ProjectCard = ({
  title,
  description,
  image,
  demo,
  web,
  github,
  tech,
  index
}) => {

  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(false);

  // const isReversed = index % 2 !== 0;

  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.02, 1.02, 1.02)
    `;

    setGlow({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
    if (window.innerWidth < 1024) return;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform =
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{transformStyle: "preserve-3d"}}
      className={`
        group
        relative
        rounded-3xl
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        transition-all duration-700 ease-out
        ${isVisible 
        ? "opacity-100 translate-y-0 blur-0" 
        : "opacity-0 translate-y-10 blur-sm"}
        hover:-translate-y-2
        hover:shadow-[0_30px_50px_rgba(0,0,0,0.7)]
        flex
        overflow-hidden
        will-change-transform
        max-w-[650px]
        w-full
      `}
    >
      {/* Glow dinámico */}
      <div
        className={`
         ${isVisible 
         ? "opacity-100 translate-y-0 blur-0" 
         : "opacity-0 translate-y-10 blur-sm"}
         absolute z-10 inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 
         transition-opacity duration-300
        `}
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255, 167, 67, 0.063), transparent 60%)`,
          transitionDelay: `${index * 120}ms`
        }}
      />

      {/* Layout dinámico */}
      <div className="flex flex-col h-full justify-between">

        {/* TEXTO */}
        <div className="card_project p-10 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h3>

          <p className="text-neutral-400 leading-relaxed text-sm max-w-xl">
            {description}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center gap-4 text-2xl">
            {tech.map((item, i) => (
              <span key={i} className="transition-transform duration-300 hover:scale-110">
                {techIcons[item]}
              </span>
            ))}
          </div>

            {/* BOTONES */}
            <div className="flex gap-3 items-center">
              {demo && (
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#FF9B25] to-[#ffb347] text-black text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-md">
                    Demo
                  </button>
                </a>
              )}

              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 rounded-lg bg-neutral-800 text-white text-sm font-semibold hover:bg-neutral-700 transition-all duration-300">
                    Github
                  </button>
                </a>
              )}

              {web && (
                <a href={web} target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 rounded-lg bg-[#21759B] text-white text-sm font-semibold hover:brightness-110 transition-all duration-300">
                    Web
                  </button>
                </a>
              )}

            </div>
          </div>
        </div>

        {/* IMAGEN */}
        <a
          href={demo || web}
          target="_blank"
          className="relative block"
        >
          <div className="relative w-full flex justify-center">

            {/* Sombra difusa tipo Vercel */}
            <div className="
              absolute
              bottom-[-20px]
              w-[80%]
              h-[40px]
              bg-black/40
              blur-2xl
              rounded-full
            " />

            {/* Panel flotante */}
            <div className="
              relative
              w-[95%]
              h-[230px]
              rounded-2xl
              overflow-hidden
              bg-white/5
              border border-white/10
              shadow-[0_40px_80px_rgba(0,0,0,0.6)]
              backdrop-blur-xl
              transition-all duration-700
              group-hover:scale-[1.03]
              group-hover:-translate-y-2
            " >
            
              {/* Reflejo sutil */}
              <div className="
                absolute inset-0
                bg-gradient-to-br
                from-white/10
                via-transparent
                to-transparent
                pointer-events-none
              " />

              <img
                src={image}
                alt={title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition duration-700
                  group-hover:scale-110
                "
              />
            </div>

          </div>
        </a>

      </div>
    </section>
  );
};

export default ProjectCard;