export default function CardProduct() {
  const products = [
    {
      title: "Maklon Product 1",
      description: "Description for Maklon Product 1",
      imageUrl:
        "https://mashmoshem.co.id/wp-content/uploads/2024/04/Mash-Moshem-Indonesia-Pabrik-Maklon-Kosmetik-Jawa-Timur.webp",
    },
    {
      title: "Maklon Product 2",
      description: "Description for Maklon Product 2",
      imageUrl:
        "https://murnicare.co.id/wp-content/uploads/2024/03/skin-products-different-recipients-composition_11zon-scaled.jpg",
    },
    {
      title: "Maklon Product 3",
      description: "Description for Maklon Product 3",
      imageUrl:
        "https://yurora.com/wp-content/uploads/2023/06/Tips-Memilih-Maklon-Kosmetik-untuk-Bisnis-Anda.jpeg",
    },
  ];

  return (
    <div className="flex flex-col items-center p-6">
      <h6 className="text-2xl font-bold mb-6">Our Product</h6>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product, index) => (
          <div key={index} className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg font-bold">{product.title}</h2>
              <p className="text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
