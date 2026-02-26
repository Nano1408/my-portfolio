import { motion } from "framer-motion";
import { PiWhatsappLogoBold } from "react-icons/pi";

const Talk = () => {
  const phoneNumber = "573245735992";
  const message = "Hola Fernando, me interesa...";
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="pt-16 flex justify-center"
    >
      <div className="
        relative
        w-[360px]
        rounded-3xl
        bg-gradient-to-br from-white/5 to-white/[0.02]
        backdrop-blur-xl
        border border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        p-10
        text-center
        group
        transition-all duration-500
        hover:scale-[1.03]
      ">
        {/* Glow */}
        <div
          className="
            absolute inset-0 rounded-3xl opacity-0
            group-hover:opacity-100 transition duration-500 blur-xl
            pointer-events-none
          "
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(255,140,0,0.35), transparent 70%)",
          }}
        />

        <h3 className="text-3xl text-white font-semibold">
          Hablemos
        </h3>

        <p className="text-slate-400 text-sm mt-4">
          Cuénteme su visión y transformémosla en una experiencia digital poderosa.
        </p>

        <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
          <button className="
            mt-8
            px-8 py-3
            rounded-full
            bg-orange-500
            text-black
            font-semibold
            flex items-center justify-center
            gap-2
            transition-all duration-300
            hover:bg-orange-400
            hover:shadow-[0_0_25px_rgba(255,140,0,0.6)]
            cursor-pointer
          ">
            <PiWhatsappLogoBold size={22} />
            Iniciar conversación
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default Talk;