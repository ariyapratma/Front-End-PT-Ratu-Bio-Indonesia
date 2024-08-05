export default function ButtonLogin({ onClick }) {
  return (
    <div className="flex justify-center mb-4">
      <button
        onClick={onClick}
        className="px-6 py-3 bg-black text-white rounded-md text-sm w-full"
      >
        Login
      </button>
    </div>
  );
}
