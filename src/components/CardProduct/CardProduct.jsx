export default function CardProduct() {
  const products = [
    {
      title: "Essential Oil",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in scelerisque leo.",
      imageUrl:
        "https://mashmoshem.co.id/wp-content/uploads/2024/04/Mash-Moshem-Indonesia-Pabrik-Maklon-Kosmetik-Jawa-Timur.webp",
    },
    {
      title: "Hand Sanitizer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in scelerisque leo.",
      imageUrl:
        "https://murnicare.co.id/wp-content/uploads/2024/03/skin-products-different-recipients-composition_11zon-scaled.jpg",
    },
    {
      title: "Desinfektant",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in scelerisque leo.",
      imageUrl:
        "https://yurora.com/wp-content/uploads/2023/06/Tips-Memilih-Maklon-Kosmetik-untuk-Bisnis-Anda.jpeg",
    },
  ];

  return (
    <div className="flex flex-col items-center p-6">
      <h6 className="text-2xl font-lexend font-medium mb-6">Our Product</h6>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <figure className="w-full h-48 overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{product.title}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
