export default function AboutUsSection() {
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-5xl text-black font-lexend font-bold mb-10">
        About Us
      </h1>
      <div className="flex flex-col space-y-6 max-w-3xl">
        <p className="text-justify font-lexend font-medium">
          PT Ratu Bio Indonesia adalah perusahaan swasta nasional yang bergerak
          dibidang pengolahan dan pemasaran bahan kimia khususnya sanitasi dan
          higiene. Kami memproduksi hand sanitizer, desinfektan, sabun
          antiseptik, sabun tangan, dan sabun khusus.
        </p>
        <p className="text-justify font-lexend font-medium">
          PT Ratu Bio Indonesia bekerja sama dengan Pusat Riset Surfaktan dan
          Bioenergi IPB dalam penelitian dan pengembangan formulasi produk.
          Pabrik kami menempati lahan seluas 7.000 m² milik sendiri, dengan
          fasilitas produksi dan laboratorium pengendalian mutu untuk
          menghasilkan produk-produk berkualitas tinggi. Kami juga menerima jasa
          maklon produksi dan formulasi sabun cair, desinfektan, hand sanitizer,
          dan sabun laundry milik pelanggan.
        </p>
      </div>
    </div>
  );
}
