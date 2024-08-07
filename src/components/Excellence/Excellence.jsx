import { FaCheckCircle } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { PiCertificate } from "react-icons/pi";
import { MdSupportAgent } from "react-icons/md";

const advantages = [
  {
    title: "Services Fast",
    description: "We ensure prompt consultation services in our products.",
    icon: <RiCustomerService2Line />,
  },
  {
    title: "Certified",
    description: "Our products are certified by international standards.",
    icon: <PiCertificate />,
  },
  {
    title: "Customer Support",
    description: "24/7 customer support to assist you anytime.",
    icon: <MdSupportAgent />,
  },
  {
    title: "Eco-Friendly",
    description: "Committed to environmentally friendly practices.",
    icon: <FaCheckCircle />,
  },
];

export default function Excellence() {
  return (
    <div className="flex flex-col items-center p-6">
      <h6 className="text-5xl text-black font-lexend font-medium mb-6">
        What Makes Us Different?
      </h6>
      <p className="text-center font-lexend font-regular mb-10 max-w-xl">
        We believe our unwavering quality and dedication to our clients' success
        makes us the right choice for all your needs.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 max-w-xs bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105"
          >
            <div className="text-4xl text-custom-yellow mb-4">
              {advantage.icon}
            </div>
            <h6 className="text-lg font-lexend font-medium mb-2">
              {advantage.title}
            </h6>
            <p className="text-sm text-gray-600">{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
