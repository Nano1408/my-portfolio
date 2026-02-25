import { useRef, useState } from "react";

const MoreProjectCard = ({
  title,
  description,
  image,
  web,
  github
}) => {

  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setStyle({
      transform: `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.02,1.02,1.02)
      `,
      transition: "transform 0.1s ease-out"
    });

    setGlow({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform:
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
      transition: "transform 0.6s cubic-bezier(.03,.98,.52,.99)"
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className="
        relative
        rounded-2xl
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-6
        overflow-hidden
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        will-change-transform
      "
    >

      {/* Glow dinámico */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255,166,67,0.15), transparent 60%)`
        }}
      />

      <img
        src={image}
        alt={title}
        className="rounded-xl mb-4 relative z-10"
      />

      <h3 className="text-xl font-semibold text-white mb-2 relative z-10 tracking-tight">
        {title}
      </h3>

      <p className="text-neutral-400 text-sm mb-4 relative z-10">
        {description}
      </p>

      <div className="flex flex-col gap-1 relative z-10">

        {web && (
          <a
            href={web}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFA643] font-medium hover:underline"
          >
            Ver proyecto →
          </a>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 font-medium hover:text-white transition"
          >
            Ver repositorio →
          </a>
        )}

      </div>

    </div>
  );
};

export default MoreProjectCard;