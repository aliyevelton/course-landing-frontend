export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/80 shadow-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="/"
          className="text-lg font-bold text-gray-900 hover:text-emerald-600 transition-all duration-200 hover:scale-[1.02]"
        >
          AppMillers
        </a>
        <div className="flex gap-8">
          <a
            href="/"
            className="relative text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-200 py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-500 after:transition-all after:duration-200 hover:after:w-full"
          >
            Home
          </a>
          <a
            href="#community"
            className="relative text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-200 py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-500 after:transition-all after:duration-200 hover:after:w-full"
          >
            Community
          </a>
          <a
            href="#contact"
            className="relative text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-200 py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-500 after:transition-all after:duration-200 hover:after:w-full"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
