export default function HeroSection() {
  return (
    <div className="relative w-full h-[400px] bg-gray-200">
      <img
        // src="/public/Flayer Test.png"
        // alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          Jasa Maklon Sabun Dan Skincare
        </h1>
        <p className="text-lg lg:text-xl mb-6">
          Mau Buat Brand Sabun Dan Kosmetik Dan Skincare Kamu Sendiri ?
        </p>
        <a
          href="#consultation"
          className="bg-custom-yellow text-base-content px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors"
        >
          Konsultasikan Sekarang
        </a>
      </div>
    </div>
  );
}
