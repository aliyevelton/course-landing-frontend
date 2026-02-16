import { Button } from '../ui/Button';

const BULLET_ICONS = [
  // Laptop - developers
  () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  // Graduation cap - students
  () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  // Book - self-taught
  () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  // Briefcase - career builders
  () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
];

export function AudienceSection({ payload }) {
  if (!payload) return null;
  const { title, description, bullets, statLine } = payload;
  if (!title && !bullets?.length) return null;
  return (
    <section id="audience" className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 via-emerald-50/30 to-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2310b981\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80" />
      <div className="relative container mx-auto px-4 max-w-3xl text-center">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-emerald-800 to-gray-900 bg-clip-text text-transparent">
            {title}
          </h2>
        )}
        {description && <p className="text-lg text-gray-600 mb-6">{description}</p>}
        <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-200/60 text-emerald-800 font-semibold text-sm mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          {statLine ?? 'Join 200K+ developers who leveled up their DSA skills'}
        </div>
        {bullets?.length > 0 && (
          <ul className="space-y-4">
            {bullets.map((b, i) => {
              const IconComponent = BULLET_ICONS[i % BULLET_ICONS.length];
              return (
                <li
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white shadow-sm border border-gray-100/80 hover:shadow-lg hover:border-emerald-200 hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-600 transition-all duration-300 shadow-sm">
                    {IconComponent && <IconComponent />}
                  </span>
                  <span className="text-gray-700 font-medium pt-2">{b}</span>
                </li>
              );
            })}
          </ul>
        )}
        <div className="flex justify-center mt-12">
          <a href="#curriculum">
            <Button variant="outline">See curriculum</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
