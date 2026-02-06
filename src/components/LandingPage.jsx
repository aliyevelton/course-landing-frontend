import { useEffect, useState } from 'react';
import { fetchSections, fetchCurriculum, fetchPricing, fetchTestimonials } from '../api/client';
import { SectionRenderer } from './sections';

const DEFAULT_SLUG = 'data-structures-algorithms-python';

function SectionSkeleton() {
  return (
    <div className="py-16 animate-pulse">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="h-10 bg-gray-200 rounded-2xl w-2/3 mb-4" />
        <div className="h-4 bg-gray-200 rounded-xl w-full mb-2" />
        <div className="h-4 bg-gray-200 rounded-xl w-5/6" />
      </div>
    </div>
  );
}

export function LandingPage({ slug = DEFAULT_SLUG }) {
  const [sections, setSections] = useState([]);
  const [curriculum, setCurriculum] = useState(null);
  const [pricing, setPricing] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    Promise.all([
      fetchSections(slug),
      fetchCurriculum(slug),
      fetchPricing(slug),
      fetchTestimonials(slug),
    ])
      .then(([secs, curr, pric, test]) => {
        if (!cancelled) {
          setSections(Array.isArray(secs) ? secs : []);
          setCurriculum(curr);
          setPricing(Array.isArray(pric) ? pric : []);
          setTestimonials(Array.isArray(test) ? test : []);
        }
      })
      .catch((err) => {
        if (!cancelled) setError(err.message || 'Failed to load content');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [slug]);

  if (loading) {
    return (
      <main>
        <SectionSkeleton />
        <SectionSkeleton />
        <SectionSkeleton />
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h1>
          <p className="text-gray-600">{error}</p>
          <p className="text-sm text-gray-500 mt-4">Make sure the API is running.</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      {sections.map((section) => (
        <SectionRenderer
          key={section.id}
          section={section}
          curriculum={curriculum}
          pricing={pricing}
          testimonials={testimonials}
          slug={slug}
        />
      ))}
    </main>
  );
}
