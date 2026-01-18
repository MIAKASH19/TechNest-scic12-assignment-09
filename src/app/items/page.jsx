"use client";
import { useEffect, useState } from "react";
import ItemCard from "@/Components/ItemCard";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://tech-nest-server.vercel.app/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen">
      
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/20 via-pink-500/10 to-blue-500/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-20">
       
        <div className="mb-14 text-center">
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/10 text-white/70">
            Our Collection
          </span>

          <h1 className="text-4xl md:text-5xl font-bold">
            Explore Latest
            <span className="block bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Electronic Products
            </span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-white/60">
            Discover premium gadgets, smart devices, and accessories — carefully
            selected for performance, quality, and style.
          </p>
        </div>

        
        {loading && (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-80 rounded-2xl bg-white/5 border border-white/10 animate-pulse"
              />
            ))}
          </div>
        )}

        
        {!loading && (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
