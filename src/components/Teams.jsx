import { motion } from "framer-motion";
import teamData from "../data/teamData";

const Teams = () => {
  return (
    <section className="py-24 px-6">
      <h2 className="text-[40px] py-6 text-center font-semibold">
        Mi equipo de desarrollo
      </h2>

      <div className="max-w-6xl mx-auto grid 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-4 
                      gap-8">
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="relative bg-white/70 backdrop-blur-xl 
                       rounded-2xl shadow-md
                       transition-all duration-300
                       hover:shadow-xl
                       hover:shadow-blue-500/10
                       group overflow-hidden"
          >
            {/* Glow sutil */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                            transition duration-500 
                            bg-gradient-to-br from-blue-400/10 via-transparent to-purple-400/10" />

            <div className="flex justify-center relative z-10">
              <img
                className="w-full max-w-[220px] aspect-square object-cover 
                           rounded-t-xl transition-transform duration-500 
                           group-hover:scale-105"
                src={member.image}
                alt={member.role}
              />
            </div>

            <div className="text-center py-6 relative z-10">
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                {member.role}
              </p>
              <p className="text-lg font-semibold mt-1">
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