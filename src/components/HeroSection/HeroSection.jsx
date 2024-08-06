import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[400px] bg-gray-200 overflow-hidden">
      <motion.img
        src="/public/FlayerFix.png"
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <motion.h1
          className="text-3xl lg:text-5xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Jasa Maklon Sabun Dan Skincare
        </motion.h1>
        <motion.p
          className="text-lg lg:text-xl mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Mau Buat Brand Sabun Dan Kosmetik Dan Skincare Kamu Sendiri ?
        </motion.p>
        <motion.a
          href="#consultation"
          className="bg-custom-yellow text-base-content px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Konsultasikan Sekarang
        </motion.a>
      </motion.div>
    </div>
  );
}
