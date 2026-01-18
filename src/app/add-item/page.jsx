"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function AddItemPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    rating: "",
    stock: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      ...form,
      price: Number(form.price),
      rating: Number(form.rating),
      stock: Number(form.stock),
    };

    try {
      await fetch("https://tech-nest-server.vercel.app/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Product added successfully",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });

      setTimeout(() => {
        router.push("/items");
      }, 1800);

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Could not add product",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-10 bg-black/50">
      
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/50 via-pink-500/30 to-blue-500/20 blur-3xl" />

      <div className="w-full max-w-xl">
        <div className="rounded-3xl border border-white/10 bg-black/60 backdrop-blur p-8 shadow-xl">
          
          <div className="text-center">
            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/10 text-white/80">
              Add New Product
            </span>

            <h1 className="text-3xl font-bold text-white">
              Sell on
              <span className="block bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                TechNest
              </span>
            </h1>

            <p className="mt-2 text-sm text-white/70">
              Enter your electronic product details
            </p>
          </div>

          
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <input
              name="name"
              placeholder="Product Name"
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400"
            />

            <input
              name="brand"
              placeholder="Brand (Apple, Samsung, etc)"
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400"
            />

            <input
              name="category"
              placeholder="Category (Smartphone, Laptop)"
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400"
            />

            <input
              name="price"
              type="number"
              placeholder="Price (৳)"
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                name="rating"
                type="number"
                step="0.1"
                max="5"
                placeholder="Rating (0 - 5)"
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400"
              />

              <input
                name="stock"
                type="number"
                placeholder="Stock Quantity"
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400"
              />
            </div>

            <input
              name="image"
              placeholder="Image URL"
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400"
            />

            <textarea
              name="description"
              rows="4"
              placeholder="Product Description"
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/40 resize-none focus:outline-none focus:border-purple-400"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-purple-400 hover:bg-pink-400 text-white py-3 font-medium transition"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
