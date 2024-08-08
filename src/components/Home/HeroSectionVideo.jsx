export default function HeroSectionVideo() {
  return (
    <div className="relative w-full h-screen bg-white flex flex-col items-center justify-center p-6 overflow-hidden pt-24">
      {/* Main Content */}
      <div className="text-center relative z-10 mb-2">
        <h1 className="text-5xl text-black font-lexend font-medium mb-4">
          Inovator dalam Sanitasi dan Kebersihan
        </h1>
        <p className="text-md font-lexend text-regular text-black">
          Berfokus pada pembuatan pembersih tangan, disinfektan, sabun
          antiseptik, sabun tangan, dan sabun khusus.
        </p>
      </div>

      {/* Video Section */}
      <div className="relative w-full h-full max-w-4xl flex justify-center items-center">
        <div className="w-full h-0 pb-[56.25%] relative overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/VVQepgaqZJY"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Journey of Natural Beauty"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
