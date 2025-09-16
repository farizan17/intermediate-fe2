import React from "react";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-start md:items-center px-4 md:px-20 py-8 bg-gray-800 text-gray-400 justify-between gap-8 md:gap-0">
      <div className="text-2xl font-bold">
        <div className="flex items-center text-3xl md:text-4xl">
          <Logo size={50} />
          <span className="ml-2">CHILL</span>
        </div>
        <p className="mt-6 text-xs">&copy; 2025 CHILL. All rights reserved.</p>
      </div>

      <div className="w-full md:w-auto">
        <h3 className="font-semibold text-white mb-2">Genre</h3>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <li>Aksi</li>
          <li>Anak-anak</li>
          <li>Anime</li>
          <li>Britania</li>
          <li>Drama</li>
          <li>Fantasi Ilmiah & Fantasi</li>
          <li>Kejahatan</li>
          <li>KDrama</li>
          <li>Komedi</li>
          <li>Petualangan</li>
          <li>Perang</li>
          <li>Romantis</li>
          <li>Sains & Alam</li>
          <li>Thriller</li>
        </ul>
      </div>

      <div className="w-full md:w-auto">
        <h3 className="font-semibold text-white mb-2">Bantuan</h3>
        <ul className="grid gap-4 text-sm">
          <li>FAQ</li>
          <li>Kontak Kami</li>
          <li>Privasi</li>
          <li>Syarat & Ketentuan</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
