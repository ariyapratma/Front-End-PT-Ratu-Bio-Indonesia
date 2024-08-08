import React from "react";
import {
  MdOutlineCleanHands,
  MdOutlineMedicalServices,
  MdOutlineStarRate,
} from "react-icons/md"; // Update icon import

const services = [
  {
    icon: <MdOutlineCleanHands size="48" />,
    title: "Dermatologist Expert",
    description:
      "Dikembangkan oleh para Expert yang memiliki pengalaman mumpuni di bidang Dermatologis",
  },
  {
    icon: <MdOutlineMedicalServices size="48" />,
    title: "Excellent",
    description:
      "Diformulasikan dengan kaidah Kosmetologi Jepang dengan bahan baku yang berasal dari Eropa",
  },
  {
    icon: <MdOutlineStarRate size="48" />,
    title: "Premium Quality",
    description:
      "Keamanan dan kualitas premium yang tidak bisa ditemui di Perusahaan Kosmetik lain",
  },
];

export default function Service() {
  return (
    <div className="relative flex flex-col items-center p-6 pt-24 bg-white">
      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center mb-32"
        style={{
          backgroundImage:
            "url(https://indocareb2b.com/wp-content/uploads/2019/09/Tips-Memilih-Maklon-Kosmetik-Yang-Tepat.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0 rounded-md"></div>
        <div className="relative z-10 text-white p-6 flex flex-col items-center justify-center h-full">
          <div className="flex flex-col md:flex-row items-center justify-center w-full text-center md:text-left">
            <h6 className="text-3xl md:text-5xl font-lexend font-medium mb-4 md:mb-0 md:mr-6">
              We Always Listen <br /> <span>What You Need</span>
            </h6>
            <p className="font-lexend font-regular mb-10 md:mb-0 max-w-xl">
              Kami selalu mendengar & selalu mengerti apa yang dibutuhkan
              Customer sebagai puncak prioritas yang selalu menginspirasi Kami
              dalam memberikan manfaat tak terbatas. Bersama BioQueen mari
              bertumbuh bersama!
            </p>
          </div>
        </div>
        <div className="absolute bottom-[-100px] w-full flex justify-center z-10">
          <div className="flex flex-wrap justify-center gap-8 px-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 max-w-xs bg-white text-black shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105"
                style={{ minHeight: "200px" }} // Increased height for better display
              >
                <div className="mb-4">{service.icon}</div>
                <h6 className="text-xl font-lexend font-medium mb-2">
                  {service.title}
                </h6>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
