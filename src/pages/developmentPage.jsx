import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Carousel from "../components/carousel";

const DevPage = () => {
  const [movies1, setMovies1] = useState([
    { title: "Don’t Look Up", image: "Type=31.png", rating: 4.5 },
    { title: "All Of Us Are Dead", image: "Type=17.png", rating: 4.2 },
  ]);

  // ADD movie
  const addMovie = () => {
    const newMovie = {
      title: "Film Baru",
      image: "Type=11.png",
      rating: 4.0,
    };
    setMovies1([...movies1, newMovie]);
  };

  // UPDATE movie
  const updateMovie = (index) => {
    const updated = [...movies1];
    updated[index] = { ...updated[index], title: "Judul Diupdate" };
    setMovies1(updated);
  };

  // DELETE movie
  const deleteMovie = (index) => {
    const filtered = movies1.filter((_, i) => i !== index);
    setMovies1(filtered);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />

      <main className="mt-4 p-4">
        <div className="flex gap-2 mb-4">
          <button onClick={addMovie} className="bg-green-500 px-3 py-2 rounded">
            Tambah Film
          </button>
          <button
            onClick={() => updateMovie(0)}
            className="bg-yellow-500 px-3 py-2 rounded"
          >
            Update Film Pertama
          </button>
          <button
            onClick={() => deleteMovie(0)}
            className="bg-red-500 px-3 py-2 rounded"
          >
            Hapus Film Pertama
          </button>
        </div>

        <Carousel
          title="Melanjutkan Tonton Film"
          movies={movies1}
          id="carousel1"
          showTitle={true}
          showRating={true}
        />
      </main>

      <Footer />
    </div>
  );
};

export default DevPage;
