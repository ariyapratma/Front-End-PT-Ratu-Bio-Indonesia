import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer bg-custom-yellow text-base-content pt-5 relative bottom-0 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0 px-5 md:px-20">
        {/* Section 1: PT Ratu Bio Indonesia */}
        <aside className="flex flex-col space-y-4 flex-grow md:flex-grow-0 md:w-1/3">
          <img
            src="/public/Icon.png"
            alt="PT Ratu Bio Indonesia Logo"
            width="90"
            height="50"
            className="mb-4"
          />
          <h6 className="text-md font-bold font-lexend">
            PT Ratu Bio Indonesia
          </h6>
          <p className="text-sm font-regular font-lexend">
            PT Ratu Bio Indonesia is a national private <br /> company engaged
            in the processing and <br /> marketing of chemicals, especially
            sanitation <br /> and hygiene, producing hand sanitizers, <br />{" "}
            disinfectants, antiseptic soaps, hand soaps, <br /> and specialty
            soaps.
          </p>
          <h6 className="text-md font-bold font-lexend">Address</h6>
          <p className="text-sm font-regular font-lexend">
            Jl. Barokah II, RT 03 RW 10, Kp Parungdengdek, <br />
            Wanaherang, Kec. Gn. Putri, Kabupaten Bogor, <br />
            Jawa Barat 16965
          </p>
        </aside>

        {/* Section 2: Contact Information */}
        <div className="flex flex-col space-y-4 md:w-1/3 pt-32">
          <h6 className="text-md font-bold">Contact Information</h6>
          <div className="space-y-2">
            <div>
              <h6 className="text-md font-bold">Call</h6>
              <a href="https://wa.me/6282162637186" className="link link-hover">
                082162637186
              </a>
            </div>
            <div>
              <h6 className="text-md font-bold">Email</h6>
              <a
                href="mailto:ratubioindonesia@gmail.com"
                className="link link-hover"
              >
                ratubioindonesia@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Section 3: Connect With Us */}
        <div className="flex flex-col space-y-4 md:w-1/3">
          <h6 className="font-bold">Connect With Us!</h6>
          <div className="flex space-x-3 mb-4">
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
    </footer>
  );
}
