"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Star } from "lucide-react";

export default function ItemDetailsPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/items/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading product details...
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/20 via-pink-500/10 to-blue-500/20 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-2 items-center">
        {/* Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-tr from-purple-500/30 to-pink-500/30 rounded-3xl blur-2xl" />
          <img
            src={item.image}
            alt={item.name}
            className="relative w-full h-105 object-cover rounded-3xl border border-white/10"
          />
        </div>

        {/* Content */}
        <div className="bg-black/60 border border-white/10 rounded-3xl p-8 backdrop-blur">
          <span className="inline-block mb-3 px-4 py-1 text-xs rounded-full bg-white/10 text-white/70">
            {item.category}
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {item.name}
          </h1>

          <p className="mt-3 text-sm text-white/60">
            Brand: <span className="text-white">{item.brand}</span>
          </p>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <span className="text-white font-medium">{item.rating}</span>
            <span className="text-white/50 text-sm">
              ({item.stock} in stock)
            </span>
          </div>

          {/* Description */}
          <p className="mt-6 text-white/70 leading-relaxed">
            {item.description}
          </p>

          {/* Price */}
          <div className="mt-8 flex items-center justify-between">
            <p className="text-3xl font-bold text-white">
              ৳ {item.price.toLocaleString()}
            </p>

            <span
              className={`px-4 py-1 rounded-full text-xs ${
                item.stock > 0
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {item.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <button className="flex-1 rounded-lg bg-white text-black py-3 font-medium hover:bg-gray-200 transition">
              Add to Cart
            </button>

            <button className="flex-1 rounded-lg border border-white/20 text-white py-3 hover:bg-white/10 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
