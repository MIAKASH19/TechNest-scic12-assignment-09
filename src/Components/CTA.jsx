import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/10">
     
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/20 via-pink-500/10 to-blue-500/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="relative rounded-3xl border border-white/10 bg-black/60 backdrop-blur p-12 text-center">
          
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/10 text-white/80">
            Ready to Upgrade?
          </span>

          <h2 className="text-3xl md:text-4xl font-bold">
            Upgrade Your Tech
            <span className="block bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Today
            </span>
          </h2>

          
          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            Discover the latest electronic gadgets with guaranteed quality,
            secure payments, and fast delivery — all in one place.
          </p>

          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/items"
              className="px-8 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              Shop Now
            </Link>

            <Link
              href="/add-item"
              className="px-8 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
            >
              Sell a Product
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
