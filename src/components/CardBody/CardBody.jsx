export default function CardBody({ children }) {
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10 w-full my-4">
      {children}
    </div>
  );
}
