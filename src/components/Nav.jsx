export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/80 shadow-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 text-lg font-bold text-gray-900 hover:text-logo-yellow transition-all duration-200 hover:scale-[1.02]"
        >
          <img src="/appmillers-logo.png" alt="AppMillers" className="h-8 w-auto" />
          AppMillers
        </a>
        <div className="flex gap-8">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="relative text-gray-600 hover:text-logo-yellow font-medium transition-colors duration-200 py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-logo-yellow after:transition-all after:duration-200 hover:after:w-full"
          >
            Home
          </a>
          <a
            href="#pricing"
            className="relative text-gray-600 hover:text-logo-yellow font-medium transition-colors duration-200 py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-logo-yellow after:transition-all after:duration-200 hover:after:w-full"
          >
            Pricing
          </a>
          <a
            href="https://www.appmillers.com/products/communities/appmillers-student-community"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-gray-600 hover:text-logo-yellow font-medium transition-colors duration-200 py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-logo-yellow after:transition-all after:duration-200 hover:after:w-full"
          >
            Community
          </a>
          <a
            href="https://elshadk.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-gray-600 hover:text-logo-yellow font-medium transition-colors duration-200 py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-logo-yellow after:transition-all after:duration-200 hover:after:w-full"
          >
            Newsletter
          </a>
          <a
            href="#contact"
            className="relative text-gray-600 hover:text-logo-yellow font-medium transition-colors duration-200 py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-logo-yellow after:transition-all after:duration-200 hover:after:w-full"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
