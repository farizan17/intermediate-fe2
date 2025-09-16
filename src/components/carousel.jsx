import React from "react";

const Carousel = ({
  title,
  movies,
  id,
  showRating = false,
  showTitle = false,
}) => {
  const scroll = (direction) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="px-4 md:px-20 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base md:text-xl font-semibold">{title}</h2>
      </div>
      <div className="relative">
        {/* Tombol kiri (disembunyikan di mobile) */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 md:p-3 lg:p-4 rounded-full shadow z-50"
        >
          <img
            src="arrow-left.svg"
            alt="Scroll Left"
            className="w-4 h-4 md:w-6 md:h-6"
          />
        </button>

        {/* Wrapper */}
        <div
          id={id}
          className="flex overflow-x-auto no-scrollbar gap-3 md:gap-4 scroll-smooth px-2 md:px-8 h-full items-center"
        >
          {movies.map((movie, index) => (
            <div
              key={index}
              className="relative min-w-[120px] md:min-w-[200px] lg:min-w-[260px] flex-shrink-0 group"
            >
              <div className="rounded overflow-hidden bg-gray-900 shadow-lg transition-all duration-300 transform group-hover:scale-105 lg:group-hover:scale-110 group-hover:z-40 cursor-pointer">
                <div className="relative w-full h-auto">
                  <img
                    src={movie.image}
                    alt={movie.title || "Poster"}
                    className="w-full h-auto object-contain rounded"
                  />

                  {/* label */}
                  {movie.label && (
                    <div className="absolute top-2 left-2 bg-blue-800 text-white text-[10px] md:text-xs font-semibold px-1.5 md:px-2 py-0.5 md:py-1 rounded">
                      {movie.label}
                    </div>
                  )}

                  {/* award */}
                  {movie.award && (
                    <div className="absolute top-0 right-2 bg-red-700 text-white text-[8px] md:text-[10px] font-semibold px-1.5 md:px-2 py-1 rounded text-center leading-none">
                      <div>Top</div>
                      <div className="text-[10px] md:text-[12px] font-bold">
                        10
                      </div>
                    </div>
                  )}

                  {/* Title & Rating */}
                  {(showTitle || showRating) && (
                    <div className="absolute bottom-0 left-0 w-full px-2 md:px-4 py-2 md:py-3 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex justify-between items-center">
                        {showTitle && (
                          <p className="text-white text-[10px] md:text-sm lg:text-base font-semibold truncate">
                            {movie.title}
                          </p>
                        )}
                        {showRating && (
                          <div className="flex items-center text-white text-[10px] md:text-xs lg:text-sm">
                            ⭐ {movie.rating}/5
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol kanan (disembunyikan di mobile) */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 md:p-3 lg:p-4 rounded-full shadow z-50"
        >
          <img
            src="arrow-right.svg"
            alt="Scroll Right"
            className="w-4 h-4 md:w-6 md:h-6"
          />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
