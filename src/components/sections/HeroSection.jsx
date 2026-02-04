import { Button } from '../ui/Button';

export function HeroSection({ payload }) {
  if (!payload) return null;
  const { headline, subheadline, primaryCtaText, primaryCtaUrl } = payload;
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-400/30 via-transparent to-transparent" />
      <div className="relative container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{headline}</h1>
        {subheadline && <p className="text-xl md:text-2xl text-slate-300 mb-10">{subheadline}</p>}
        {primaryCtaText && (
          <a href={primaryCtaUrl || '#pricing'}>
            <Button variant="primary" className="text-lg px-8 py-4">
              {primaryCtaText}
            </Button>
          </a>
        )}
      </div>
    </section>
  );
}
