export function AudienceSection({ payload }) {
  if (!payload) return null;
  const { title, description, bullets } = payload;
  if (!title && !bullets?.length) return null;
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
        {description && <p className="text-lg text-gray-600 mb-10">{description}</p>}
        {bullets?.length > 0 && (
          <ul className="space-y-4">
            {bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-emerald-50/50 hover:border-emerald-100 border border-transparent transition-all duration-300 group"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform">
                  ✓
                </span>
                <span className="text-gray-700 font-medium">{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
