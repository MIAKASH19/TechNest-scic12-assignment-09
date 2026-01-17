import { Truck, ShieldCheck, CreditCard, Headphones } from "lucide-react";

const features = [
  {
    title: "Fast Delivery",
    desc: "Get your products delivered quickly with our trusted shipping partners.",
    icon: Truck,
  },
  {
    title: "Secure Payments",
    desc: "All transactions are protected with advanced encryption.",
    icon: CreditCard,
  },
  {
    title: "Easy Returns",
    desc: "Not satisfied? Return products easily with no hassle.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Support",
    desc: "Our support team is always available to help you.",
    icon: Headphones,
  },
];

export default function WhychooseUs() {
  return (
    <section className="relative overflow-hidden border-t border-white/10">
      {/* Background glow (same style as banner) */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/10 text-white/80">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold">
            Built for Modern
            <span className="block bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Online Shopping
            </span>
          </h2>

          <p className="mt-6 text-white/70">
            We combine technology, speed, and trust to deliver the best
            e-commerce experience.
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-6 transition hover:bg-white/10"
            >
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition">
                <feature.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
