import { useState } from 'react';
import { Button } from '../ui/Button';

const MODULE_ICONS = [
  // Chart – Introduction & Big O
  () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  // Blocks – Data Structures
  () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1v-7z" />
    </svg>
  ),
  // Loop/cycle – Algorithms
  () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
];

const MODULE_OUTCOMES = [
  "Analyze algorithm complexity and make informed design choices",
  "Implement and use arrays, linked lists, trees, and graphs in Python",
  "Apply sorting, searching, and DP to solve real interview problems",
];

const CheckIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

function CurriculumModuleCard({ module, index, isExpanded, onToggle }) {
  const IconComponent = MODULE_ICONS[index % MODULE_ICONS.length];
  const outcome = MODULE_OUTCOMES[index];
  const totalMinutes = module.lessons?.reduce((sum, l) => sum + (l.durationMinutes || 0), 0) ?? 0;

  return (
    <div
      className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg hover:border-emerald-100 transition-all duration-300"
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full p-6 text-left flex items-start gap-4 hover:bg-gray-50/50 transition-colors"
      >
        <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
          {IconComponent && <IconComponent />}
        </span>
        <div className="flex-1 min-w-0">
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold mb-2">
            Module {index + 1}
          </span>
          <h3 className="font-bold text-lg text-gray-900 mb-1">{module.title}</h3>
          {module.description && (
            <p className="text-gray-600 text-sm mb-2">{module.description}</p>
          )}
          {outcome && (
            <p className="text-emerald-700/90 text-sm font-medium">
              You'll learn to: {outcome}
            </p>
          )}
          {totalMinutes > 0 && (
            <p className="text-gray-500 text-xs mt-2">{totalMinutes} min total</p>
          )}
        </div>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-emerald-600 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <ul className="border-t border-gray-100 px-6 py-4 space-y-2 bg-slate-50/50">
            {module.lessons?.map((l) => (
              <li
                key={l.id}
                className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-white transition-colors"
              >
                <CheckIcon />
                <span className="flex-1 text-sm text-gray-800 font-medium">{l.title}</span>
                <span className="text-emerald-600 font-semibold text-sm">{l.durationMinutes} min</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function CurriculumPreviewSection({ payload, curriculum }) {
  const [expandedIndex, setExpandedIndex] = useState(0);
  if (!payload && !curriculum) return null;
  const { title, description, ctaText } = payload || {};
  const modules = curriculum?.modules ?? [];
  const totalModules = modules.length;

  const toggleModule = (index) => {
    setExpandedIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="curriculum" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
        {description && <p className="text-lg text-gray-600 mb-10">{description}</p>}

        {totalModules > 0 && (
          <>
            <div className="flex gap-1 mb-10" aria-hidden="true">
              {modules.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                    i <= expandedIndex ? 'bg-emerald-500' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            <div className="space-y-4 mb-12">
              {modules.map((mod, i) => (
                <CurriculumModuleCard
                  key={mod.id}
                  module={mod}
                  index={i}
                  isExpanded={expandedIndex === i}
                  onToggle={() => toggleModule(i)}
                />
              ))}
            </div>
          </>
        )}

        {ctaText && (
          <div className="flex justify-center">
            <a href="#lead-capture">
              <Button variant="outline">{ctaText}</Button>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
