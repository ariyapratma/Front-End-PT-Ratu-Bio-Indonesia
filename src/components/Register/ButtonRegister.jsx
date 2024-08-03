export default function ButtonRegister({ onClick }) {
    return (
      <div className="flex justify-center mb-4">
        <button
          onClick={onClick}
          className="px-6 py-3 bg-black text-white rounded-md text-xxs w-48"
        >
          Register
        </button>
      </div>
    );
  }
  