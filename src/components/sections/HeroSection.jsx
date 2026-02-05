import { Button } from '../ui/Button';

export function HeroSection({ payload }) {
  if (!payload) return null;
  const { headline, subheadline, primaryCtaText, primaryCtaUrl } = payload;
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.4),transparent)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      <div className="relative container mx-auto px-4 text-center max-w-4xl animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          {headline}
        </h1>
        {subheadline && <p className="text-xl md:text-2xl text-slate-300 mb-10">{subheadline}</p>}
        {primaryCtaText && (
          <a href={primaryCtaUrl || '#pricing'}>
            <Button variant="primary" className="text-lg px-10 py-4 rounded-2xl">
              {primaryCtaText}
            </Button>
          </a>
        )}
      </div>
    </section>
  );
}
