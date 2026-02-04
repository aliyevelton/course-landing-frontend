import { Button } from '../ui/Button';

export function CurriculumPreviewSection({ payload, curriculum }) {
  if (!payload && !curriculum) return null;
  const { title, description, ctaText } = payload || {};
  return (
    <section id="curriculum" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
        {description && <p className="text-lg text-gray-600 mb-10">{description}</p>}
        {curriculum?.modules?.length > 0 && (
          <div className="space-y-6 mb-10">
            {curriculum.modules.map((mod) => (
              <div key={mod.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg mb-2">{mod.title}</h3>
                {mod.description && <p className="text-gray-600 text-sm mb-3">{mod.description}</p>}
                <ul className="space-y-1 text-sm text-gray-700">
                  {mod.lessons?.map((l) => (
                    <li key={l.id} className="flex justify-between">
                      <span>{l.title}</span>
                      <span className="text-gray-500">{l.durationMinutes} min</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        {ctaText && (
          <a href="#curriculum">
            <Button variant="outline">{ctaText}</Button>
          </a>
        )}
      </div>
    </section>
  );
}
