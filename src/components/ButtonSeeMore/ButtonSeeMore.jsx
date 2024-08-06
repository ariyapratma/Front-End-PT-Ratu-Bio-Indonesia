export default function SeeMoreButton({ onClick }) {
  return (
    <div className="flex justify-center mt-6 mb-4">
      <button
        onClick={onClick}
        className="px-6 py-3 bg-custom-yellow text-black text-lg font-lexend font-medium rounded-lg w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 hover:bg-yellow-600 transition-colors"
      >
        See More
      </button>
    </div>
  );
}
