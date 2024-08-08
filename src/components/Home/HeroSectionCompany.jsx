import { FaPlay } from "react-icons/fa";

export default function HeroSectionCompany() {
  return (
    <div className="relative w-full min-h-screen bg-custom-yellow text-gray-800 flex flex-col lg:flex-row items-center justify-center p-6 lg:p-12">
      <div className="flex flex-col lg:flex-row items-center lg:space-x-12 max-w-screen-xl mx-auto">
        <div className="relative mb-8 lg:mb-0 lg:w-1/3 flex justify-center">
          <div className="relative w-full h-full rounded-lg overflow-hidden drop-shadow-md">
            <img
              src="public/Liquid-Soap.png"
              alt="CEO"
              className="w-full h-full object-cover"
            />
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-blue-600 text-white rounded-full p-4 hover:bg-blue-700 transition-transform transform hover:scale-110">
                <FaPlay className="w-10 h-10" />
              </div>
            </a>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-2/3">
          <h1 className="text-3xl lg:text-6xl font-bold mb-6 font-lexend leading-tight">
            PT RATU BIO INDONESIA
          </h1>
          <p className="text-base lg:text-lg mb-4 font-lexend leading-relaxed">
            Hadir sebagai solusi sanitasi dan higiene yang berkualitas tinggi,
            bersama BioQueen.
          </p>
          <p className="text-base lg:text-lg mb-6 font-lexend leading-relaxed">
            Kami, bersama BioQueen, berkomitmen untuk membantu masyarakat
            Indonesia dalam memperoleh produk perawatan kulit yang efikasi
            tinggi dan aman untuk jangka panjang. Mitra Aesthetic Medic juga
            telah memberikan kontribusi signifikan terhadap kesehatan kulit
            masyarakat Indonesia.
          </p>
        </div>
      </div>
    </div>
  );
}
