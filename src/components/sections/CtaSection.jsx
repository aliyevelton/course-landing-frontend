import { Button } from '../ui/Button';

const RocketIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ASSURANCES = ['Lifetime access', 'Certificate included', 'Q&A support'];

export function CtaSection({ payload }) {
  if (!payload) return null;
  const { headline, subheadline, ctaText, ctaUrl } = payload;
  return (
    <section className="relative py-24 md:py-32 section-cta-bg text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(255,255,255,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      <div className="relative container mx-auto px-4 text-center max-w-3xl">
        <div className="flex flex-row items-center justify-center gap-4 md:gap-6 mb-6">
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-logo-yellow/20 backdrop-blur-sm flex items-center justify-center text-logo-yellow">
            <RocketIcon />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold">{headline}</h2>
        </div>
        {subheadline && <p className="text-xl text-brand-100 mb-10">{subheadline}</p>}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          {ctaText && (
            <a href={ctaUrl || '#pricing'}>
              <Button variant="secondary" className="bg-white text-brand-blue hover:bg-brand-light text-lg px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                {ctaText}
              </Button>
            </a>
          )}
          <a href="#contact" className="text-brand-100 hover:text-white font-medium underline underline-offset-4 transition-colors">
            Questions? Contact us
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-brand-100/90 text-sm font-medium">
          {ASSURANCES.map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="text-logo-yellow">
                <CheckIcon />
              </span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
