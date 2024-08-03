import { Link } from "react-router-dom";

export default function ParagraphNeedAcount() {
  return (
    <p className="font-lexend text-xxs flex justify-center text-gray-500">
      Need an account?
      <Link to="/register" className="font-lexend text-xxs text-blue-500 ml-1">
        Register
      </Link>
    </p>
  );
}
