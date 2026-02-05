import { useState } from 'react';

export function FaqSection({ payload }) {
  if (!payload?.items?.length) return null;
  const { title, items } = payload;
  const [open, setOpen] = useState(null);
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 max-w-2xl">
        {title && <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">{title}</h2>}
        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
                open === i ? 'border-emerald-200 shadow-lg' : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center gap-4 hover:bg-slate-50/50 transition-colors"
              >
                {item.question}
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    open === i ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-gray-600'
                  }`}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className={`transition-transform duration-300 origin-center ${open === i ? 'rotate-45' : ''}`}
                  >
                    <line x1="6" y1="1" x2="6" y2="11" />
                    <line x1="1" y1="6" x2="11" y2="6" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden min-h-0">
                  <div className="px-6 pb-4 text-gray-600 pt-0">{item.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
