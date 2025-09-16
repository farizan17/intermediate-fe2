import React from "react";
import Logo from "../components/logo";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Carousel from "../components/carousel";

const LandingPage = () => {
  const movies1 = [
    { title: "Don’t Look Up", image: "Type=31.png", rating: 4.5 },
    { title: "All Of Us Are Dead", image: "Type=17.png", rating: 4.2 },
    {
      title: "Blue Lock",
      image: "Type=5.png",
      rating: 4.6,
      label: "Episode Baru",
    },
    { title: "A Man Called Otto", image: "Type=9.png", rating: 4.4 },
    { title: "Big Hero 6", image: "Type=10.png", rating: 4.1 },
    { title: "Suzume", image: "Type=11.png", rating: 3.4 },
    { title: "The Batman", image: "image 222.png", rating: 4.4 },
    { title: "Sonic 2", image: "image 242.png", rating: 4.2 },
    { title: "Guardian Of Galaxy", image: "image 243.png", rating: 4.9 },
  ];

  const movies2 = [
    { image: "Number=1.png", award: "Top 10" },
    { image: "Number=2.png" },
    { image: "Number=3.png", award: "Top 10" },
    { image: "Number=4.png" },
    { image: "Number=5.png", label: "Episode Baru" },
    { image: "Number=6.png", award: "Top 10" },
    { image: "Number=7.png" },
    { image: "Number=8.png" },
    { image: "Number=9.png", award: "Top 10" },
    { image: "Number=10.png" },
  ];

  const movies3 = [
    { image: "Number=11.png", award: "Top 10" },
    { image: "Number=12.png", award: "Top 10" },
    { image: "Number=13.png", award: "Top 10" },
    { image: "Number=14.png", award: "Top 10" },
    { image: "Number=15.png", award: "Top 10" },
    { image: "Number=16.png", award: "Top 10" },
    { image: "Number=17.png", award: "Top 10" },
    { image: "Number=18.png", award: "Top 10" },
    { image: "Number=19.png", award: "Top 10" },
    { image: "Number=20.png", award: "Top 10" },
  ];
  const movies4 = [
    { image: "Number=1.png", award: "Top 10" },
    { image: "Number=2.png" },
    { image: "Number=3.png", award: "Top 10" },
    { image: "Number=4.png" },
    { image: "Number=5.png", label: "Episode Baru" },
    { image: "Number=6.png", award: "Top 10" },
    { image: "Number=7.png" },
    { image: "Number=8.png" },
    { image: "Number=9.png", award: "Top 10" },
    { image: "Number=10.png" },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />

      <section className="relative bg-black">
        <img
          src="Rectangle 9.png"
          className="w-full h-[250px] md:h-full object-cover opacity-70"
          alt="Hero"
        />
        <div className="flex flex-col gap-3 absolute bottom-2 md:bottom-1/4 text-white px-4 md:px-20 w-full">
          <h1 className="text-xl md:text-6xl font-bold mb-1">
            Duty After School
          </h1>
          <p className="text-gray-200 text-xs md:text-2xl md:w-[50%]">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah.
          </p>
          <div className="flex justify-between gap-3">
            <div className="flex gap-3 items-center flex-wrap">
              <button className="bg-[#0F60FF] px-4 py-3 rounded-full hover:bg-blue-700 text-xs md:text-sm">
                Mulai
              </button>
              <button className="flex bg-[#22282A] text-white px-4 py-3 rounded-full hover:bg-[#151819] text-xs md:text-sm items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 9H13V7H11M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM11 17H13V11H11V17Z"
                    fill="white"
                  />
                </svg>
                Selengkapnya
              </button>
              <div>
                <img src="18.svg" alt="" />
              </div>
            </div>
            <button className="self-start md:self-auto">
              <img src="mute.svg" alt="" />
            </button>
          </div>
        </div>
      </section>

      <main className="mt-4">
        <Carousel
          title="Melanjutkan Tonton Film"
          movies={movies1}
          id="carousel1"
          showTitle={true}
          showRating={true}
        />
        <Carousel
          title="Top Rating Film dan Series Hari ini"
          movies={movies2}
          id="carousel2"
        />
        <Carousel title="Film Trending" movies={movies3} id="carousel3" />
        <Carousel title="Rilis Baru" movies={movies4} id="carousel4" />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
