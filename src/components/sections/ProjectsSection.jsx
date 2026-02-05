export function ProjectsSection({ payload }) {
  if (!payload?.items?.length) return null;
  const { title, description } = payload;
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
        {description && <p className="text-lg text-gray-600 mb-12">{description}</p>}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {payload.items.map((item, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-lg mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                {i + 1}
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
              {item.description && <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
