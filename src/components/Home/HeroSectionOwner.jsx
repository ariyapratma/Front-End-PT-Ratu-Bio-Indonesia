import { FaPlay } from "react-icons/fa";

export default function HeroSectionOwner() {
  return (
    <div className="relative w-full min-h-screen bg-white text-gray-800 flex flex-col lg:flex-row items-center justify-center p-6 lg:p-12">
      <div className="flex flex-col lg:flex-row items-center lg:space-x-12 max-w-screen-xl mx-auto">
        {/* CEO Image Card */}
        <div className="relative mb-8 lg:mb-0 lg:w-1/3 flex justify-center">
          <div className="relative w-full h-full bg-white p-0 rounded-lg shadow-xl overflow-hidden">
            <img
              src="https://images-tm.tempo.co/all/2023/06/11/833607/833607_1200.jpg"
              alt="CEO"
              className="w-full h-full object-cover"
            />
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-blue-500 text-white rounded-full p-4 hover:bg-blue-700 transition">
                <FaPlay className="w-12 h-12" />
              </div>
            </a>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-2/3">
          <h1 className="text-xl lg:text-5xl font-bold mb-6 font-lexend">
            PT RATU BIO INDONESIA
          </h1>
          <p className="text-lg lg:text-xl mb-4 font-lexend leading-relaxed">
            Hadir sebagai solusi sanitasi dan higiene yang berkualitas tinggi,
            bersama BioQueen.
          </p>
          <p className="text-lg lg:text-xl mb-6 font-lexend leading-relaxed">
            Kami, bersama BioQueen, berkomitmen untuk membantu masyarakat
            Indonesia dalam memperoleh produk perawatan kulit yang efikasi
            tinggi dan aman untuk jangka panjang. Mitra Aesthetic Medic juga
            telah memberikan kontribusi signifikan terhadap kesehatan kulit
            masyarakat Indonesia.
          </p>
          <p className="text-lg lg:text-xl font-lexend font-semibold mb-4">
            dr. Ahmad Riza Zakariyya, M. Fahutan KBA
          </p>
          <p className="text-lg lg:text-xl font-lexend mb-8">
            CEO & Director of RND PT Ratu Bio Indonesia
          </p>

          {/* CEO Quote Card */}
          <div className="p-8 bg-transparant text-gray-800 rounded-xl shadow-xl max-w-2xl mx-auto left-36">
            <h3 className="text-2xl font-bold mb-4">CEO Quote</h3>
            <p className="text-lg italic">
              "Quality is not an act, it is a habit." - BioQueen, CEO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
