const BASE = import.meta.env.VITE_API_URL || '';

export async function fetchCourse(slug) {
  const res = await fetch(`${BASE}/api/courses/${slug}`);
  if (!res.ok) return null;
  return res.json();
}

export async function fetchSections(slug) {
  const res = await fetch(`${BASE}/api/courses/${slug}/sections`);
  if (!res.ok) return [];
  return res.json();
}

export async function fetchCurriculum(slug) {
  const res = await fetch(`${BASE}/api/courses/${slug}/curriculum`);
  if (!res.ok) return null;
  return res.json();
}

export async function fetchPricing(slug) {
  const res = await fetch(`${BASE}/api/courses/${slug}/pricing`);
  if (!res.ok) return [];
  return res.json();
}

export async function fetchTestimonials(slug) {
  const res = await fetch(`${BASE}/api/courses/${slug}/testimonials`);
  if (!res.ok) return [];
  return res.json();
}

export async function subscribeLead(slug, body) {
  const res = await fetch(`${BASE}/api/courses/${slug}/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return res;
}
