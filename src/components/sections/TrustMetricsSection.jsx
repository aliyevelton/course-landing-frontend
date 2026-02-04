export function TrustMetricsSection({ payload }) {
  if (!payload?.metrics?.length) return null;
  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {payload.metrics.map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-emerald-600">{m.value}</div>
              <div className="text-sm text-gray-600 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
