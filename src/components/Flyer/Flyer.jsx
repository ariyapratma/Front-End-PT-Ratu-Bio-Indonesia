import { motion } from "framer-motion";

export default function Flyer() {
  const flyers = [
    {
      //   imageUrl: "/Flyer.png",
      imageUrl:
        "https://kosme.co.id/wp-content/uploads/2023/07/Banner-Beranda.webp",
    },
    {
      //   imageUrl: "/Flyer.png",
      imageUrl:
        "https://kosme.co.id/wp-content/uploads/2023/07/Banner-Beranda-2.webp",
    },
  ];

  return (
    <div className="p-6 w-full flex justify-center items-center">
      <div className="flex flex-row gap-4">
        {flyers.map((flyer, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-[500px] md:w-[600px] lg:w-[800px] bg-white shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={flyer.imageUrl}
              alt={`Flyer ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
