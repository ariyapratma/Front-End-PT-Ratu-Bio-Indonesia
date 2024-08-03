import { Link } from "react-router-dom";

export default function ParagraphAlreadyAcount() {
  return (
    <p className="font-lexend text-xxs flex justify-center text-gray-500">
      Already have an account?
      <Link to="/login" className="font-lexend text-xxs text-blue-500 ml-1">
        Login
      </Link>
    </p>
  );
}
