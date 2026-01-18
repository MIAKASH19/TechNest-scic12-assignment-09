"use client";

import { Sparkles, Users, ShieldCheck, Rocket } from "lucide-react";

const values = [
  {
    title: "Innovation First",
    desc: "We embrace modern technology to build faster, smarter, and smoother shopping experiences.",
    icon: Sparkles,
  },
  {
    title: "Customer Centric",
    desc: "Every feature we build starts with our customers in mind.",
    icon: Users,
  },
  {
    title: "Trusted & Secure",
    desc: "Your data and payments are protected with enterprise-level security.",
    icon: ShieldCheck,
  },
  {
    title: "Future Ready",
    desc: "We continuously evolve to stay ahead in the e-commerce space.",
    icon: Rocket,
  },
];

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/10 text-white/80">
            About TechNest
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Building the Future of
            <span className="block bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Smart Online Shopping
            </span>
          </h1>

          <p className="mt-6 text-white/70 text-lg">
            TechNest is a modern e-commerce platform focused on delivering
            premium electronic products with speed, trust, and innovation.
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              Our Mission
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed">
              Our mission is simple — to make cutting-edge technology accessible
              to everyone. We curate high-quality electronic products and deliver
              them through a seamless, secure, and enjoyable shopping journey.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              From product discovery to doorstep delivery, we focus on excellence
              at every step.
            </p>
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-black/60 backdrop-blur p-8">
            <h3 className="text-xl font-semibold text-white">
              Why TechNest?
            </h3>
            <ul className="mt-6 space-y-4 text-white/70 text-sm">
              <li>• Premium & verified electronic products</li>
              <li>• Fast delivery across the country</li>
              <li>• Secure payments & easy returns</li>
              <li>• Friendly 24/7 customer support</li>
            </ul>
          </div>
        </div>

        <div className="mt-28">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Core
              <span className="block bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="mt-4 text-white/70">
              The principles that guide everything we build.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-6 transition hover:bg-white/10"
              >
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition">
                  <item.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
