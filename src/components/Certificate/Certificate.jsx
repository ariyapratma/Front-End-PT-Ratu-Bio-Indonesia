export default function Certificate() {
  const certificates = [
    {
      title: "Certificate 1",
      imageUrl:
        "https://www.ekosjaya.co.id/wp-content/uploads/2024/03/EKOSJAYA-LOGO-BPOM-1-e1710730666510-300x257.png",
    },
    {
      title: "Certificate 2",
      imageUrl:
        "https://www.ekosjaya.co.id/wp-content/uploads/2024/03/EKOSJAYA-LOGO-CPKB-1-e1710730632573-300x256.png",
    },
    {
      title: "Certificate 3",
      imageUrl:
        "https://www.ekosjaya.co.id/wp-content/uploads/2024/03/EKOSJAYA-LOGO-HALAL-1-e1710730695507-300x263.png",
    },
    {
      title: "Legal 4",
      imageUrl:
        "https://dke.co.id/web/image/1500-b70f07ad/cosmos%20approved.png",
    },
    {
      title: "Legal 5",
      imageUrl: "https://dke.co.id/web/image/1505-9d4dd50d/health%20choice.png",
    },
  ];

  return (
    <div className="flex flex-col items-center p-6">
      <h6 className="text-5xl text-black font-lexend font-medium mb-10">
        Certificate Approved
      </h6>
      <p className="text-center font-lexend font-regular mb-10 max-w-xl">
        Kualitas terbaik dari kami untuk Anda memiliki jaminan kualitas.
      </p>
      <div className="flex flex-wrap justify-center gap-14">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg flex items-center justify-center bg-white transform transition-transform duration-300 hover:scale-105"
          >
            <div className="w-full h-full flex items-center justify-center bg-white">
              <img
                src={certificate.imageUrl}
                alt={certificate.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
