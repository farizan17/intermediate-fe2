import React from "react";

const InputField = ({ id, type = "text", label, placeholder, ...props }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm sm:text-base mb-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
      {...props}
    />
  </div>
);

export default InputField;
