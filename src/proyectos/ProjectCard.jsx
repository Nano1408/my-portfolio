import { useRef, useState } from "react";
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

  const isReversed = index % 2 !== 0;

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

    setStyle({
      transform: `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.02, 1.02, 1.02)
      `,
      transition: "transform 0.1s ease-out"
    });

    setGlow({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
    if (window.innerWidth < 1024) return;
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
      transition: "transform 0.6s cubic-bezier(.03,.98,.52,.99)"
    });
  };

  return (
    <section
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className="
        group
        relative
        mt-16
        rounded-3xl
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_30px_50px_rgba(0,0,0,0.7)]
        hover:shadow-yellow-700/10
        flex
        overflow-hidden
        will-change-transform
      "
    >
      {/* Glow dinámico */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255,166,67,0.15), transparent 60%)`
        }}
      />

      {/* Layout dinámico */}
      <div className={`flex w-full ${isReversed ? "flex-row-reverse" : ""}`}>

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

            <div className="flex gap-3">
  
              {demo && (
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <button className="px-5 py-2 rounded-xl bg-[#FF9B25] text-black font-medium hover:scale-105 transition">
                    Demo
                  </button>
                </a>
              )}

              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <button className="px-5 py-2 rounded-xl bg-white text-black font-medium hover:scale-105 transition">
                    Github
                  </button>
                </a>
              )}

              {web && (
                <a href={web} target="_blank" rel="noopener noreferrer">
                  <button className="px-5 py-2 rounded-xl bg-[#FF9B25] text-black font-medium hover:scale-105 transition">
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
          className="
            img_project
            flex items-center justify-center
            bg-gradient-to-br from-neutral-900 to-black
          "
        >
          <div className="p-10 transition-transform duration-700 hover:scale-105">
            <img
              src={image}
              alt={title}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </a>

      </div>
    </section>
  );
};

export default ProjectCard;