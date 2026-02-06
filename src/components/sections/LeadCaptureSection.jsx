import { useState } from 'react';
import { Button } from '../ui/Button';
import { subscribeLead } from '../../api/client';

export function LeadCaptureSection({ payload, slug = 'data-structures-algorithms-python' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  if (!payload) return null;
  const { headline, subheadline, ctaText, source } = payload;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = email?.trim();
    if (!trimmed) return;

    setStatus('loading');
    setMessage('');

    try {
      const res = await subscribeLead(slug, { email: trimmed, source: source || 'lead-capture' });
      if (res.ok) {
        setStatus('success');
        setEmail('');
        setMessage('Check your inbox! We sent you the curriculum.');
      } else {
        const data = await res.json();
        setStatus('error');
        setMessage(data?.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <section id="lead-capture" className="py-20 md:py-28 bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 border-y border-emerald-100/50">
      <div className="container mx-auto px-4 max-w-2xl">
        {headline && (
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            {headline}
          </h2>
        )}
        {subheadline && (
          <p className="text-lg text-gray-600 mb-10 text-center">{subheadline}</p>
        )}

        {status === 'success' ? (
          <div className="text-center py-8 px-6 rounded-2xl bg-emerald-100/80 border border-emerald-200 text-emerald-800 font-medium">
            {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
              className="flex-1 px-5 py-3.5 rounded-xl border border-gray-200 outline-none transition-all focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 disabled:opacity-70"
              required
            />
            <Button
              type="submit"
              variant="primary"
              disabled={status === 'loading'}
              className="sm:w-auto px-8 py-3.5 rounded-xl"
            >
              {status === 'loading' ? 'Sending…' : (ctaText || 'Subscribe')}
            </Button>
          </form>
        )}

        {status === 'error' && message && (
          <p className="mt-4 text-center text-red-600 text-sm">{message}</p>
        )}
      </div>
    </section>
  );
}
