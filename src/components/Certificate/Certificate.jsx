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
  ];

  return (
    <div className="flex flex-col items-center p-6">
      <h6 className="text-2xl text-black font-lexend font-medium mb-10">
        Certificate Approved
      </h6>
      <div className="flex flex-wrap justify-center gap-4">
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
