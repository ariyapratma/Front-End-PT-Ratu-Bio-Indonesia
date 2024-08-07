export default function JourneyBioQueen() {
  return (
    <div className="relative w-full h-screen bg-white flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Main Content */}
      <div className="text-center relative z-10">
        <h1 className="text-5xl lg:text-6xl font-bold mb-4">
          Journey of Natural Beauty
        </h1>
        <p className="text-lg lg:text-xl mb-8">
          Discover the essence of nature's beauty with us.
        </p>
      </div>

      {/* Video Section */}
      <div className="w-full max-w-4xl relative z-10">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <video controls className="w-full h-auto rounded-lg">
            <source src="/path/to/your/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
