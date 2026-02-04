export function ProjectsSection({ payload }) {
  if (!payload?.items?.length) return null;
  const { title, description } = payload;
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
        {description && <p className="text-lg text-gray-600 mb-10">{description}</p>}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {payload.items.map((item, i) => (
            <div key={i} className="p-6 rounded-xl bg-slate-50 border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              {item.description && <p className="text-gray-600 text-sm">{item.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
