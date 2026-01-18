import Link from "next/link";

export default function ItemCard({ item }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-black/60 border border-white/10 backdrop-blur hover:border-purple-400/40 transition">

      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-linear-to-br from-purple-500/20 via-pink-500/10 to-blue-500/20 blur-2xl" />

     
      <div className="relative h-48 bg-white/5 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition"
        />
      </div>

     
      <div className="relative p-5 space-y-3">
        <h3 className="text-lg font-semibold text-white">
          {item.name}
        </h3>

        <p className="text-sm text-white/60 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ৳ {item.price}
          </span>

          <span className="text-sm text-yellow-400">
            ⭐ {item.rating}
          </span>
        </div>

        <Link
          href={`/items/${item.id}`}
          className="block text-center mt-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
