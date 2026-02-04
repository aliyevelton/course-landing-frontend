import { useState } from 'react';

export function FaqSection({ payload }) {
  if (!payload?.items?.length) return null;
  const { title, items } = payload;
  const [open, setOpen] = useState(null);
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-2xl">
        {title && <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{title}</h2>}
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-4 font-medium flex justify-between items-center hover:bg-gray-50"
              >
                {item.question}
                <span className="text-gray-400">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <div className="px-6 pb-4 text-gray-600">{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
