import React from "react";
import Logo from "../components/logo";
import InputField from "../components/inputField";
import PasswordField from "../components/passwordField";
import GoogleButton from "../components/googleButton";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://4kwallpapers.com/images/walls/thumbs_3t/22616.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-80 text-white p-6 sm:p-8 rounded-lg w-full max-w-md mx-4 sm:mx-0">
        <div className="text-center mb-6">
          <div className="text-2xl sm:text-3xl font-bold flex items-center justify-center gap-2">
            <Logo size={50} />
            <span>CHILL</span>
          </div>
          <p className="text-gray-300 mt-2 text-sm sm:text-base">
            Selamat datang kembali!
          </p>
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

          <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-400 mt-2 mb-4 gap-2 sm:gap-0">
            <Link to="/register" className="hover:underline">
              Belum punya akun? Daftar
            </Link>
            <a href="#" className="hover:underline text-right">
              Lupa kata sandi?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black text-sm sm:text-base py-2 rounded hover:bg-gray-300 transition"
          >
            Masuk
          </button>

          <div className="my-4 text-center text-gray-400">atau</div>

          <GoogleButton text="Masuk dengan Google" />
        </form>
      </div>
    </div>
  );
};

export default Login;
