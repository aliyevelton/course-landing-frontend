import { useState } from 'react';
import { Button } from '../ui/Button';

export function ContactUsSection({ payload }) {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', question: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.firstName?.trim()) newErrors.firstName = true;
    if (!form.lastName?.trim()) newErrors.lastName = true;
    if (!form.email?.trim()) newErrors.email = true;
    if (!form.question?.trim()) newErrors.question = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  if (!payload) return null;
  const { title = 'Any other questions?', subtitle, formTitle = 'Contact Us', formSubtitle, email } = payload;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent('Contact from AppMillers');
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\n\nQuestion:\n${form.question}`
    );
    window.location.href = `mailto:${email || 'support@appmillers.com'}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 max-w-5xl">
        {title && <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{title}</h2>}
        {subtitle && (
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            {email && subtitle.includes(email)
              ? (
                  <>
                    {subtitle.split(email)[0]}
                    <a href={`mailto:${email}`} className="text-brand-600 font-medium hover:text-brand-700 underline">
                      {email}
                    </a>
                    {subtitle.split(email)[1]}
                  </>
                )
              : subtitle}
          </p>
        )}

        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white flex flex-col md:flex-row">
          <div className="md:w-1/3 contact-side-bg p-8 md:p-12 flex items-center justify-center min-h-[200px] md:min-h-[400px]">
            <svg
              viewBox="0 0 200 160"
              className="w-full max-w-[180px] text-white/90"
              fill="currentColor"
            >
              <rect x="20" y="40" width="160" height="100" rx="8" fill="currentColor" opacity="0.3" />
              <path d="M20 50 L100 100 L180 50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" opacity="0.9" />
              <circle cx="100" cy="75" r="15" fill="currentColor" opacity="0.8" />
              <circle cx="160" cy="110" r="8" fill="currentColor" opacity="0.5" />
              <circle cx="45" cy="95" r="6" fill="currentColor" opacity="0.5" />
            </svg>
          </div>
          <div className="md:w-2/3 p-8 md:p-12">
            {formTitle && <h3 className="text-2xl font-bold text-gray-900 mb-2">{formTitle}</h3>}
            {formSubtitle && <p className="text-gray-600 mb-8">{formSubtitle}</p>}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">First name<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all focus:ring-2 focus:ring-brand-500/20 ${
                      errors.firstName ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-brand-500'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Last name<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all focus:ring-2 focus:ring-brand-500/20 ${
                      errors.lastName ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-brand-500'
                    }`}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email<span className="text-red-500">*</span></label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border outline-none transition-all focus:ring-2 focus:ring-brand-500/20 ${
                    errors.email ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-brand-500'
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Question<span className="text-red-500">*</span></label>
                <textarea
                  placeholder="Enter your text here"
                  rows={4}
                  value={form.question}
                  onChange={(e) => setForm({ ...form, question: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border outline-none transition-all focus:ring-2 focus:ring-brand-500/20 resize-none ${
                    errors.question ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-brand-500'
                  }`}
                />
              </div>
              <div className="flex justify-center pt-2">
                <Button type="submit" variant="primary">
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
