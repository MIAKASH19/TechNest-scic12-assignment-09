"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden border-t border-white/10">
      
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-28">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/10 text-white/80">
            Contact Us
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Let’s Talk About Your
            <span className="block bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Next Purchase
            </span>
          </h1>

          <p className="mt-6 text-white/70 text-lg">
            Have questions about products, orders, or support?  
            Our team is always ready to help you.
          </p>
        </div>

        
        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          
          <div className="space-y-8">
            <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Email Us
                  </h3>
                  <p className="text-sm text-white/70">
                    support@technest.com
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Call Us
                  </h3>
                  <p className="text-sm text-white/70">
                    +880 1830144301
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Our Location
                  </h3>
                  <p className="text-sm text-white/70">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="rounded-3xl border border-white/10 bg-black/60 backdrop-blur p-8">
            <h2 className="text-2xl font-semibold text-white">
              Send Us a Message
            </h2>

            <form className="mt-8 space-y-6">
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white outline-none focus:border-purple-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@email.com"
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white outline-none focus:border-purple-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white outline-none focus:border-purple-400 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 px-6 py-3 font-medium text-white hover:opacity-90 transition"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
