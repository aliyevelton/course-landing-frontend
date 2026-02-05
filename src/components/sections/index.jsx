import { HeroSection } from './HeroSection';
import { TrustMetricsSection } from './TrustMetricsSection';
import { AudienceSection } from './AudienceSection';
import { CurriculumPreviewSection } from './CurriculumPreviewSection';
import { ProjectsSection } from './ProjectsSection';
import { TestimonialsSection } from './TestimonialsSection';
import { PricingSection } from './PricingSection';
import { FaqSection } from './FaqSection';
import { CtaSection } from './CtaSection';
import { PlatformComparisonSection } from './PlatformComparisonSection';

const SECTION_MAP = {
  0: HeroSection,
  1: TrustMetricsSection,
  2: AudienceSection,
  3: CurriculumPreviewSection,
  4: ProjectsSection,
  5: TestimonialsSection,
  6: PricingSection,
  7: FaqSection,
  8: CtaSection,
  9: PlatformComparisonSection,
};

export function SectionRenderer({ section, curriculum, pricing, testimonials }) {
  const Component = SECTION_MAP[section.type];
  if (!Component) return null;
  const payload = typeof section.payload === 'object' ? section.payload : {};
  return (
    <Component
      payload={payload}
      curriculum={section.type === 3 ? curriculum : undefined}
      pricing={section.type === 6 ? pricing : undefined}
      testimonials={section.type === 5 ? testimonials : undefined}
    />
  );
}
