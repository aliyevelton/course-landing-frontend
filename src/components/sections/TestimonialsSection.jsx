import { Badge } from '../ui/Badge';

export function TestimonialsSection({ payload, testimonials }) {
  if (!payload && !testimonials?.length) return null;
  const { title, subtitle } = payload || {};
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {title && <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">{title}</h2>}
        {subtitle && <p className="text-lg text-gray-600 mb-14 text-center">{subtitle}</p>}
        {testimonials?.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="group bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-emerald-100 hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-gray-700 mb-4 text-lg leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    {t.role && <div className="text-sm text-gray-500">{t.role}</div>}
                  </div>
                  {t.isVerified && <Badge>Verified</Badge>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
