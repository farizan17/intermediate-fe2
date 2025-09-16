import React from "react";

const GoogleButton = ({ text = "Masuk dengan Google" }) => (
  <button
    type="button"
    className="w-full border border-gray-500 text-white text-sm sm:text-base py-2 rounded hover:bg-gray-700 transition flex items-center justify-center gap-2"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 fill-current text-white"
      viewBox="0 0 48 48"
    >
      <path d="M44.5 20H24v8.5h11.8C33.5 33.4 29.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l6.4-6.4C34.5 5.4 29.5 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.9 0 20-8.1 21-18.5V20z" />
    </svg>
    {text}
  </button>
);

export default GoogleButton;
