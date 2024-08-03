export default function CardBody({ children }) {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-6">
      {children}
    </div>
  );
}
