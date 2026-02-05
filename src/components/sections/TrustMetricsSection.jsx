export function TrustMetricsSection({ payload }) {
  if (!payload?.metrics?.length) return null;
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {payload.metrics.map((m, i) => (
            <div
              key={i}
              className="group text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-emerald-100 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {m.value}
              </div>
              <div className="text-sm text-gray-600 mt-2 font-medium">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
