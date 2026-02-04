import { Button } from '../ui/Button';

export function CtaSection({ payload }) {
  if (!payload) return null;
  const { headline, subheadline, ctaText, ctaUrl } = payload;
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{headline}</h2>
        {subheadline && <p className="text-xl text-emerald-100 mb-8">{subheadline}</p>}
        {ctaText && (
          <a href={ctaUrl || '#pricing'}>
            <Button variant="secondary" className="bg-white text-emerald-700 hover:bg-emerald-50">
              {ctaText}
            </Button>
          </a>
        )}
      </div>
    </section>
  );
}
