import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function InputLogin() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col">
        <label
          htmlFor="inputemail"
          className="font-lexend-regular text-black text-xxs"
        >
          Email
        </label>
        <input
          type="email"
          id="inputemail"
          className="p-2 border border-black rounded-md font-lexend-regular text-black text-xxs placeholder-gray-500"
          placeholder="ratubioindonesia@gmail.com"
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="inputpassword"
          className="font-lexend-regular text-black text-xxs"
        ></label>
        <div className="relative">
          <input
            type={passwordVisible ? "text" : "password"}
            id="inputpassword"
            className="p-2 border border-black rounded-md font-lexend-regular text-black text-xxs placeholder-gray-500 w-full"
            placeholder="Password"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>
    </div>
  );
}
