import { Button } from '../ui/Button';

export function CurriculumPreviewSection({ payload, curriculum }) {
  if (!payload && !curriculum) return null;
  const { title, description, ctaText } = payload || {};
  return (
    <section id="curriculum" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
        {description && <p className="text-lg text-gray-600 mb-12">{description}</p>}
        {curriculum?.modules?.length > 0 && (
          <div className="space-y-4 mb-12">
            {curriculum.modules.map((mod) => (
              <div
                key={mod.id}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-emerald-100 transition-all duration-300 group"
              >
                <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-emerald-700 transition-colors">
                  {mod.title}
                </h3>
                {mod.description && <p className="text-gray-600 text-sm mb-4">{mod.description}</p>}
                <ul className="space-y-2 text-sm text-gray-700">
                  {mod.lessons?.map((l) => (
                    <li key={l.id} className="flex justify-between py-2 border-b border-gray-50 last:border-0">
                      <span className="text-gray-800">{l.title}</span>
                      <span className="text-emerald-600 font-medium">{l.durationMinutes} min</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        {ctaText && (
          <div className="flex justify-center">
            <a href="#curriculum">
              <Button variant="outline">{ctaText}</Button>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
