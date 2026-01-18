"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Browse our items, click 'Buy Now' on the product page, and follow the checkout instructions to complete your order securely.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, mobile banking, and secure online payment gateways for your convenience.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Yes! You can return any product within 7 days of delivery if you are not satisfied. See our Returns Policy for more details.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery usually takes 2-5 business days depending on your location and product availability.",
  },
  {
    question: "Is my personal information safe?",
    answer:
      "Absolutely. We use advanced encryption to protect your data and ensure all transactions are secure.",
  },
];

export default function ModernFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-black/20 backdrop-blur border-t border-white/10 overflow-hidden">
      
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/10 text-white/80">
            FAQs
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Frequently Asked
            <span className="block bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            Got questions? We've got answers! Explore our most common queries below.
          </p>
        </div>

        <div className="grid gap-6 max-w-7xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-black/60 backdrop-blur shadow-lg overflow-hidden transition hover:scale-[1.02] duration-300"
            >
              
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-white font-semibold text-lg hover:bg-white/10 transition"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-purple-400 transition-transform duration-300" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-purple-400 transition-transform duration-300" />
                )}
              </button>

              <div
                className={`px-6 text-white/70 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 py-4" : "max-h-0"
                }`}
              >
                <p className="text-base leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
