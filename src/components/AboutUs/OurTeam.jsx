import { motion } from "framer-motion";

export default function OurTeam() {
  const teams = [
    {
      title: "Production Team",
      imageUrl: "/public/Visi_Misi.jpeg",
    },
  ];

  return (
    <div className="flex flex-col items-center p-6">
      <h6 className="text-5xl text-black font-lexend font-bold mb-6">
        Our Team
      </h6>
      <div className="flex flex-wrap justify-center gap-6">
        {teams.map((team, index) => (
          <motion.div
            key={index}
            className="max-w-xl overflow-hidden shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 bg-white"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={team.imageUrl}
              alt={team.title}
              className="w-full h-auto rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-lexend font-semibold text-center">
                {team.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
