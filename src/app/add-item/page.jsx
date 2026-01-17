"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddItemPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    router.push("/items");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-10">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/20 via-pink-500/10 to-blue-500/20 blur-3xl" />

      <div className="w-full max-w-xl">
        <div className="rounded-3xl border border-white/10 bg-black/60 backdrop-blur p-8">
          {/* Header */}
          <div className="text-center">
            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/10 text-white/80">
              Add New Product
            </span>

            <h1 className="text-3xl font-bold">
              Sell on
              <span className="block bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                TechNest
              </span>
            </h1>

            <p className="mt-4 text-sm text-white/70">
              Add your electronic product details below
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            {/* Product Name */}
            <input
              name="name"
              placeholder="Product Name"
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400"
            />

            {/* Price */}
            <input
              name="price"
              type="number"
              placeholder="Price (৳)"
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400"
            />

            {/* Category */}
            <input
              name="category"
              placeholder="Category (Phone, Laptop, etc)"
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400"
            />

            {/* Image URL */}
            <input
              name="image"
              placeholder="Image URL"
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400"
            />

            {/* Description */}
            <textarea
              name="description"
              rows="4"
              placeholder="Product Description"
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 resize-none"
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-white text-black py-3 font-medium hover:bg-gray-200 transition"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
