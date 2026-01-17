"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Items", href: "/items" },
  { name: "Add Item", href: "/add-item" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      {/* Glow */}
      <div className="absolute inset-x-0 -top-10 h-20 bg-linear-to-r from-purple-500/20 via-pink-500/10 to-blue-500/20 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          TechNest
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition
                  ${
                    isActive
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }
                `}
              >
                {link.name}

                <span
                  className={`absolute -bottom-2 left-0 h-0.5 rounded-full transition-all
                    ${
                      isActive
                        ? "w-full bg-linear-to-r from-purple-400 to-pink-400"
                        : "w-0 bg-white/40 group-hover:w-full"
                    }
                  `}
                />
              </Link>
            );
          })}

          {/* Login CTA */}
          <Link
            href="/login"
            className="ml-4 px-4 py-2 rounded-lg bg-white/10 border border-white/15 text-sm text-white hover:bg-white/20 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
