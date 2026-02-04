export function AudienceSection({ payload }) {
  if (!payload) return null;
  const { title, description, bullets } = payload;
  if (!title && !bullets?.length) return null;
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
        {description && <p className="text-lg text-gray-600 mb-8">{description}</p>}
        {bullets?.length > 0 && (
          <ul className="space-y-3">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
