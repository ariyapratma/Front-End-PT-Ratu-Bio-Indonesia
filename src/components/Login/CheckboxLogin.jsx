import { useState } from "react";
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";

export default function CheckboxLogin() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="pt-2 flex items-center space-x-1 mb-4">
      <button
        type="button"
        onClick={handleCheckboxChange}
        className="focus:outline-none rounded-sm"
      >
        {checked ? <FaRegCheckSquare size={16} /> : <FaRegSquare size={16} />}
      </button>
      <label
        htmlFor="keepLoggedIn"
        className="font-lexend-medium text-black text-xxs"
      >
        Keep me logged in
      </label>
    </div>
  );
}
