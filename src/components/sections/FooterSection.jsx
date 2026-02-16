export function FooterSection({ payload }) {
  const {
    brandName = 'AppMillers',
    tagline = 'Master Data Structures & Algorithms in Python',
    copyrightText,
    links = [
      { label: 'Pricing', href: '#pricing' },
      { label: 'Contact', href: '#contact' },
      { label: 'Community', href: '#community' },
    ],
  } = payload || {};

  const year = new Date().getFullYear();
  const copyright = copyrightText ?? `© ${year} ${brandName}. All rights reserved.`;

  return (
    <footer className="relative bg-gradient-to-b from-emerald-950 to-slate-950 text-emerald-100/90 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.02\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      <div className="relative container mx-auto px-4 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <div>
            <a href="/" className="text-2xl font-bold text-white hover:text-emerald-300 transition-colors inline-block mb-3">
              {brandName}
            </a>
            {tagline && (
              <p className="text-emerald-200/80 text-sm max-w-xs">
                {tagline}
              </p>
            )}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick links</h4>
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-emerald-200/90 hover:text-white hover:translate-x-0.5 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Stay in touch</h4>
            <p className="text-emerald-200/80 text-sm">
              Questions? Reach out at{' '}
              <a href="mailto:info@appmillers.com" className="text-emerald-300 hover:text-white underline underline-offset-2 transition-colors">
                info@appmillers.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-emerald-800/50">
          <p className="text-sm text-emerald-300/80">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
