import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

export function PricingSection({ payload, pricing }) {
  if (!payload && !pricing?.length) return null;
  const { title, subtitle } = payload || {};
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {title && <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">{title}</h2>}
        {subtitle && <p className="text-lg text-gray-600 mb-12 text-center">{subtitle}</p>}
        {pricing?.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {pricing.map((plan) => (
              <Card
                key={plan.id}
                className={`p-8 w-full max-w-sm ${plan.isPopular ? 'ring-2 ring-emerald-500 relative overflow-visible' : ''}`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge>Popular</Badge>
                  </div>
                )}
                <h3 className="font-semibold text-xl mb-2">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.currency}</span>
                </div>
                <ul className="space-y-2 mb-8 text-sm text-gray-600">
                  {plan.features?.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-500">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.isPopular ? 'primary' : 'outline'} className="w-full">
                  Enroll Now
                </Button>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
