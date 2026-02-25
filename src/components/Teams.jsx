import teamData from "../data/teamData";
import { motion } from "framer-motion";
// import teamData from "../data/teamData";

const floatAnimation = {
  animate: {
    y: [0, -15, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const Teams = () => {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-black via-[#0d0d14] to-black overflow-hidden">
      <h2 className="text-[44px] font-semibold text-center text-white mb-20">
        Mi equipo de desarrollo
      </h2>

      {/* Desktop flotante */}
      <div className="hidden md:flex relative max-w-6xl mx-auto h-[500px] justify-center items-center">
        {teamData.map((member, index) => {
          const positions = [
            "top-10 left-10 rotate-[-6deg]",
            "top-0 right-16 rotate-[4deg]",
            "bottom-10 left-1/4 rotate-[3deg]",
            "bottom-0 right-10 rotate-[-4deg]",
          ];

          return (
            <motion.div
              key={index}
              className={`absolute ${positions[index]} w-[260px]`}
              {...floatAnimation}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.08, rotate: 0 }}
            >
              <div className="
                relative rounded-3xl
                bg-gradient-to-br from-white/5 to-white/[0.02]
                backdrop-blur-xl
                border border-white/10
                shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                p-6
                transition-all duration-500
                group
              ">
                {/* Glow */}
                <div className="
                  absolute inset-0 rounded-3xl opacity-0
                  group-hover:opacity-100 transition duration-500 blur-xl
                "
                  style={{
                    background:
                      "radial-gradient(circle at 50% 30%, rgba(255,140,0,0.35), transparent 70%)",
                  }}
                />

                <div className="flex justify-center">
                  <img
                    src={member.image}
                    alt={member.role}
                    className="w-[200px] h-[220px] object-cover rounded-2xl
                               transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="text-center mt-6">
                  <p className="text-xs tracking-[3px] text-orange-400 uppercase">
                    {member.role}
                  </p>
                  <p className="text-lg font-semibold text-white mt-2">
                    {member.name}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile limpio */}
      <div className="md:hidden grid gap-10">
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/5 backdrop-blur-lg p-6 border border-white/10"
          >
            <div className="flex justify-center">
              <img
                src={member.image}
                alt={member.role}
                className="w-[200px] h-[220px] object-cover rounded-2xl"
              />
            </div>

            <div className="text-center mt-6">
              <p className="text-xs tracking-[3px] text-orange-400 uppercase">
                {member.role}
              </p>
              <p className="text-lg font-semibold text-white mt-2">
                {member.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Teams;