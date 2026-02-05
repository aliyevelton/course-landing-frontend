import { Button } from '../ui/Button';

export function CtaSection({ payload }) {
  if (!payload) return null;
  const { headline, subheadline, ctaText, ctaUrl } = payload;
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(255,255,255,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      <div className="relative container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6">{headline}</h2>
        {subheadline && <p className="text-xl text-emerald-100 mb-10">{subheadline}</p>}
        {ctaText && (
          <a href={ctaUrl || '#pricing'}>
            <Button variant="secondary" className="bg-white text-emerald-700 hover:bg-emerald-50 text-lg px-10 py-4">
              {ctaText}
            </Button>
          </a>
        )}
      </div>
    </section>
  );
}
