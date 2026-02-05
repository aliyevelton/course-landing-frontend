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
    <section id="community" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">{title}</h2>
        )}
        {subtitle && (
          <p className="text-lg text-gray-600 mb-12 text-center">{subtitle}</p>
        )}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm border border-gray-200">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left px-6 py-4 font-semibold text-gray-900">Feature</th>
                <th className="text-center px-6 py-4 font-semibold text-emerald-700">
                  {ourPlatformName}
                </th>
                <th className="text-center px-6 py-4 font-semibold text-gray-500">
                  {competitorName}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                >
                  <td className="px-6 py-4 text-gray-900">{row.feature}</td>
                  <td className="px-6 py-4 text-center">
                    {row.onOurPlatform ? (
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-bold">
                        ✓
                      </span>
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.onCompetitor ? (
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-500 font-bold">
                        ✓
                      </span>
                    ) : (
                      <span className="text-gray-300">—</span>
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
