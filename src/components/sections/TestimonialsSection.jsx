import { Badge } from '../ui/Badge';

export function TestimonialsSection({ payload, testimonials }) {
  if (!payload && !testimonials?.length) return null;
  const { title, subtitle } = payload || {};
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {title && <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">{title}</h2>}
        {subtitle && <p className="text-lg text-gray-600 mb-12 text-center">{subtitle}</p>}
        {testimonials?.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-gray-700 mb-4">"{t.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{t.name}</div>
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
