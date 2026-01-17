import Link from "next/link";

export default function Banner() {
  const featuredProducts = [
    {
      name: "Samsung Galaxy S23 Ultra",
      price: "৳ 1,05,000",
      image: "https://cdn.mos.cms.futurecdn.net/QWRX5D22ak5rgDhWPZ9o7Q.jpg",
    },
    {
      name: "Apple MacBook Air M2",
      price: "৳ 1,65,000",
      image: "https://images.unsplash.com/photo-1661961112951-f2bfd74b54c6",
    },
    {
      name: "Sony WH-1000XM5",
      price: "৳ 42,000",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb",
    },
  ];
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/20 via-pink-500/10 to-blue-500/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-24 grid gap-16 md:grid-cols-2 items-center">
        {/* Left content */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/10 text-white/80">
            Smart Shopping Starts Here
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Discover Products You’ll
            <span className="block bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Love & Trust
            </span>
          </h1>

          <p className="mt-6 text-white/70 max-w-xl">
            Shop premium products with fast delivery, secure payments, and
            unbeatable prices — all in one modern e-commerce experience.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/items"
              className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              Shop Now
            </Link>

            <Link
              href="/add-item"
              className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
            >
              Sell a Product
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex gap-6 text-sm text-white/60">
            <span>✓ Secure Payment</span>
            <span>✓ Fast Delivery</span>
            <span>✓ Easy Returns</span>
          </div>
        </div>

        <div className="relative  flex justify-center md:justify-end pr-10">
          <div className="relative w-[320px] h-100">
            {featuredProducts.map((product, index) => (
              <div
                key={product.name}
                className={`absolute top-0 left-0 w-full p-4 rounded-3xl bg-black/60 backdrop-blur border border-white/10 shadow-lg transform transition duration-500 hover:scale-105 hover:rotate-1`}
                style={{
                  top: `${index * 20}px`,
                  left: `${index * 20}px`,
                  zIndex: featuredProducts.length - index,
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-2xl shadow-md"
                />
                <h3 className="mt-4 text-white font-bold text-lg">{product.name}</h3>
                <p className="text-purple-400 font-semibold">{product.price}</p>
                <Link href="/items" className="text-center">
                  <div href="/items" className="mt-4 w-full py-2 rounded-lg bg-purple-400 hover:bg-pink-400 text-black font-medium transition">
                    Buy Now
                  </div></Link>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
