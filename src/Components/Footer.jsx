import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
       
        <div>
          <h1
            className="text-xl font-bold tracking-tight bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            TechNest
          </h1>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            A modern Next.js application to manage and organize your items
            efficiently with a clean and fast user experience.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="text-white/70 hover:text-purple-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/items" className="text-white/70 hover:text-purple-400">
                Items
              </Link>
            </li>
            <li>
              <Link href="/add-item" className="text-white/70 hover:text-purple-400">
                Add Item
              </Link>
            </li>
            <li>
              <Link href="/login" className="text-white/70 hover:text-purple-400">
                Login
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
            Connect
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>Email: support@itemsapp.com</li>
            <li>Dhaka, Bangladesh</li>
          </ul>

          <div className="flex gap-4 mt-4">
            <Link href="https://www.facebook.com/" className="h-9 w-9 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition cursor-pointer">
              fb
            </Link>
            <Link href="https://www.linkedin.com/" className="h-9 w-9 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition cursor-pointer">
              in
            </Link>
            <Link href="https://www.github.com/" className="h-9 w-9 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition cursor-pointer">
              gh
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-white/60">
        © {new Date().getFullYear()} TechNest. All rights reserved.
      </div>
    </footer>
  );
}
