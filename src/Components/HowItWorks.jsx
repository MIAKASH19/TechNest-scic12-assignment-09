import { Search, ShoppingCart, CreditCard, Truck } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Browse Products",
    desc: "Explore a wide range of quality products curated just for you.",
    icon: Search,
  },
  {
    step: "02",
    title: "Add to Cart",
    desc: "Choose your favorite items and add them to your cart easily.",
    icon: ShoppingCart,
  },
  {
    step: "03",
    title: "Secure Checkout",
    desc: "Complete your purchase with fast and secure payment options.",
    icon: CreditCard,
  },
  {
    step: "04",
    title: "Fast Delivery",
    desc: "Sit back and relax while we deliver your products to your door.",
    icon: Truck,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden border-t border-white/10">
      
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-24">
       
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/10 text-white/80">
            How It Works
          </span>

          <h2 className="text-3xl md:text-4xl font-bold">
            Simple Steps to
            <span className="block bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Shop Smarter
            </span>
          </h2>

          <p className="mt-6 text-white/70">
            Shopping with us is quick, simple, and secure — designed for
            everyone.
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-6 transition hover:bg-white/10"
            >
              <span className="absolute -top-4 -right-4 h-10 w-10 rounded-full bg-linear-to-br from-purple-500 to-pink-500 text-black text-sm font-bold flex items-center justify-center">
                {step.step}
              </span>

              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition">
                <step.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
