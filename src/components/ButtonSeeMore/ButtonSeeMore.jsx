export default function SeeMoreButton({ onClick }) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className="px-4 py-2 bg-custom-yellow text-black text-lg font-lexend font-medium rounded-lg w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 hover:bg-yellow-600 transition-colors"
      >
        See More
      </button>
    </div>
  );
}
