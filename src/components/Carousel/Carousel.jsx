export default function Carousel() {
  return (
    <div className="carousel w-full relative">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full h-[400px]">
        <img
          src="https://kosme.co.id/wp-content/uploads/2023/07/Banner-Beranda-2.webp"
          className="w-full h-full object-cover"
          alt="Slide 1"
        />
        <div className="absolute left-0 right-0 top-1/2 flex justify-between px-4 transform -translate-y-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full h-[400px]">
        <img
          src="https://kosme.co.id/wp-content/uploads/2023/07/Banner-Beranda.webp"
          className="w-full h-full object-cover"
          alt="Slide 2"
        />
        <div className="absolute left-0 right-0 top-1/2 flex justify-between px-4 transform -translate-y-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full h-[400px]">
        <img
          src="https://i.ytimg.com/vi/aNkX9dkQDAs/maxresdefault.jpg"
          className="w-full h-full object-cover"
          alt="Slide 3"
        />
        <div className="absolute left-0 right-0 top-1/2 flex justify-between px-4 transform -translate-y-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
