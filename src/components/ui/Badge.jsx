export function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 ${className}`}>
      {children}
    </span>
  );
}
