export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 h-14 flex items-center justify-between">
        <a href="/" className="font-semibold text-gray-900 hover:text-emerald-600 transition-colors">
          AppMillers
        </a>
        <div className="flex gap-6">
          <a
            href="/"
            className="text-gray-600 hover:text-emerald-600 transition-colors"
          >
            Home
          </a>
          <a
            href="#community"
            className="text-gray-600 hover:text-emerald-600 transition-colors"
          >
            Community
          </a>
        </div>
      </nav>
    </header>
  );
}
