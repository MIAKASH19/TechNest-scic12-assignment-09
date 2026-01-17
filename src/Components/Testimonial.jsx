import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arif Rahman",
    role: "Tech Enthusiast",
    review:
      "Amazing product quality and super fast delivery. The headphones I ordered exceeded my expectations!",
  },
  {
    name: "Nusrat Jahan",
    role: "Online Shopper",
    review:
      "Secure payment and smooth checkout process. I felt confident shopping for electronics here.",
  },
  {
    name: "Tanvir Hasan",
    role: "Gadget Reviewer",
    review:
      "Great pricing and authentic gadgets. This store is now my go-to place for electronics.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden border-t border-white/10">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/10 text-white/80">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-4xl font-bold">
            Trusted by
            <span className="block bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Happy Customers
            </span>
          </h2>

          <p className="mt-6 text-white/70">
            Hear what our customers say about their shopping experience.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-6 hover:bg-white/10 transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-white/70 text-sm leading-relaxed">
                “{item.review}”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-xs text-white/50">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
