"use client";
import Link from "next/link";
import ItemCard from "./ItemCard";

const popularProducts = [
  {
    id: 4,
    name: "Apple MacBook Air M2",
    price: "৳ 1,65,000",
    image: "https://techcrunch.com/wp-content/uploads/2022/07/CMC_1580.jpg",
  },
  {
    id: 5,
    name: "Dell XPS 13",
    price: "৳ 1,55,000",
    image: "https://www.stuff.tv/wp-content/uploads/sites/2/2022/08/Dell-XPS-13-Plus-review-lead.jpg?quality=75&w=1080",
  },
  {
    id: 6,
    name: "HP Pavilion Gaming Laptop",
    price: "৳ 98,000",
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6",
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    price: "৳ 42,000",
    image: "https://www.sony-asia.com/image/105762b0f0d9f64f74abc7889ab22fb3?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9",
  },
];

export default function PopularSection() {
  return (
    <section className="relative overflow-hidden py-24 border-t border-white/10">
      
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
       
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/10 text-white/80">
            Popular Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Trending {" "}
            <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Items
            </span>
          </h2>
          <p className="mt-4 text-white/70">
            Explore our most loved products, carefully curated for speed, quality, and style.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {popularProducts.map((item, index) => (
            <ItemCard item={item} key={index}/>
          ))}
        </div>
      </div>
    </section>
  );
}
