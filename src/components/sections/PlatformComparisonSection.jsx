export function PlatformComparisonSection({ payload }) {
  if (!payload?.rows?.length) return null;
  const {
    title = 'Why Buy on AppMillers?',
    subtitle,
    ourPlatformName = 'AppMillers',
    competitorName = 'Udemy',
    rows,
  } = payload;

  return (
    <section id="community" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">{title}</h2>
        )}
        {subtitle && (
          <p className="text-lg text-gray-600 mb-14 text-center">{subtitle}</p>
        )}
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-xl">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-left px-6 py-5 font-bold text-gray-900">Feature</th>
                <th className="text-center px-6 py-5 font-bold text-brand-700 bg-brand-50/50">
                  {ourPlatformName}
                </th>
                <th className="text-center px-6 py-5 font-bold text-gray-500">
                  {competitorName}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-t border-gray-100 transition-colors hover:bg-brand-50/30 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}
                >
                  <td className="px-6 py-4 text-gray-900">{row.feature}</td>
                  <td className="px-6 py-4 text-center">
                    {row.onOurPlatform ? (
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-logo-yellow/20 text-logo-yellow font-bold border border-logo-yellow/60">
                        ✓
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.onCompetitor ? (
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-500 font-bold">
                        ✓
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
