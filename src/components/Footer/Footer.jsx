import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

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

export default function Footer() {
  return (
    <footer className="bg-custom-yellow text-base-content py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-20">
        {/* Section 1: PT Ratu Bio Indonesia */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img
            src="/public/Icon.png"
            alt="PT Ratu Bio Indonesia Logo"
            className="w-24 h-auto mb-4"
          />
          <h6 className="text-lg font-bold font-lexend text-center md:text-left">
            PT Ratu Bio Indonesia
          </h6>
          <p className="text-sm font-regular font-lexend text-center md:text-left">
            PT Ratu Bio Indonesia is a national private company engaged in the
            processing and marketing of chemicals, especially sanitation and
            hygiene, producing hand sanitizers, disinfectants, antiseptic soaps,
            hand soaps, and specialty soaps.
          </p>
          <h6 className="text-md font-bold font-lexend mt-4 text-center md:text-left">
            Address
          </h6>
          <p className="text-sm font-regular font-lexend text-center md:text-left">
            Jl. Barokah II, RT 03 RW 10, Kp Parungdengdek, Wanaherang, Kec. Gn.
            Putri, Kabupaten Bogor, Jawa Barat 16965
          </p>
          <h6 className="text-md font-bold font-lexend mt-4 text-center md:text-left">
            Product
          </h6>
          <p className="text-sm font-regular font-lexend text-center md:text-left">
            Hand sanitizers, disinfectants, antiseptic soaps, hand soaps, and
            specialty soaps.
          </p>
        </div>

        {/* Section 2: Contact Information and Connect With Us */}
        <div className="flex flex-col items-center space-y-6 pt-32">
          <div className="space-y-4 text-center">
            <h6 className="text-lg font-bold">Contact Us</h6>
            <div className="flex space-x-4 justify-center">
              <div className="flex items-center space-x-2">
                <FaWhatsapp className="text-green-600" />
                <a
                  href="https://wa.me/6282162637186"
                  className="text-gray-700 text-sm hover:text-gray-900 font-lexend font-medium"
                >
                  082162637186
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-red-600" />
                <a
                  href="mailto:ratubioindonesia@gmail.com"
                  className="text-gray-700 text-sm hover:text-gray-900 font-lexend font-medium"
                >
                  ratubioindonesia@gmail.com
                </a>
              </div>
            </div>
            <h6 className="text-lg font-bold mt-6">Connect With Us!</h6>
            <div className="flex space-x-3 justify-center">
              <a
                href="https://www.linkedin.com/company/ratubioindonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/ratubioindonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://twitter.com/ratubioindo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <FaTwitter size={24} />
              </a>
            </div>

            {/* Helps Section */}
            <h6 className="text-lg font-bold mt-6">Helps</h6>
            <div className="flex flex-col space-y-2">
              <a
                href="/about"
                className="text-gray-700 text-sm hover:text-gray-900 font-lexend font-medium"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="text-gray-700 text-sm hover:text-gray-900 font-lexend font-medium"
              >
                Contact
              </a>
              <a
                href="/maklon"
                className="text-gray-700 text-sm hover:text-gray-900 font-lexend font-medium"
              >
                Maklon
              </a>
            </div>
          </div>
        </div>

        {/* Section 4: Certificates and Map */}
        <div className="flex flex-col items-center space-y-4">
          <h6 className="text-lg font-bold text-center">Certificates</h6>
          <div className="flex flex-wrap justify-center space-x-4">
            {certificates.map((certificate) => (
              <img
                key={certificate.title}
                src={certificate.imageUrl}
                alt={certificate.title}
                className="w-24 h-auto rounded-lg"
              />
            ))}
          </div>

          <h6 className="text-lg font-bold mt-6 text-center">Our Location</h6>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7087547334436!2d106.94036697504879!3d-6.431447062893221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69953d49a2eb17%3A0x7974d83d2855f518!2sPT%20Ratu%20Bio%20Indonesia!5e0!3m2!1sid!2sid!4v1722768534496!5m2!1sid!2sid"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      <div className="container mx-auto mt-10 px-5 md:px-20">
        <div className="flex justify-center">
          <p className="text-sm font-regular font-lexend">
            © 2024 PT Ratu Bio Indonesia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
