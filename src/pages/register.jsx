import React from "react";
import Logo from "../components/logo";
import InputField from "../components/inputField";
import PasswordField from "../components/passwordField";
import GoogleButton from "../components/googleButton";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://4kwallpapers.com/images/walls/thumbs_3t/22287.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-80 text-white p-6 sm:p-8 rounded-lg w-full max-w-md mx-4 sm:mx-0">
        <div className="text-center mb-6">
          <div className="text-2xl sm:text-3xl font-bold flex items-center justify-center gap-2">
            <Logo size={50} />
            <span>CHILL</span>
          </div>
          <h2 className="text-xl sm:text-2xl mt-2">Daftar</h2>
          <p className="text-gray-300 text-sm sm:text-base">Selamat datang!</p>
        </div>

        <form>
          <InputField
            id="username"
            label="Username"
            placeholder="Masukkan username"
          />
          <PasswordField
            id="password"
            label="Kata Sandi"
            placeholder="Masukkan kata sandi"
          />
          <PasswordField
            id="confirmPassword"
            label="Konfirmasi Kata Sandi"
            placeholder="Masukkan kata sandi"
          />

          <div className="text-sm text-gray-400 mt-2 mb-4">
            <Link to="/login" className="hover:underline block sm:inline">
              Sudah punya akun? Masuk
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-2 text-sm sm:text-base rounded hover:bg-gray-300 transition"
          >
            Daftar
          </button>

          <div className="my-4 text-center text-gray-400">atau</div>

          <GoogleButton text="Daftar dengan Google" />
        </form>
      </div>
    </div>
  );
};

export default Register;
