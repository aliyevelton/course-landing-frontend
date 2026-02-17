export function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold badge-bg text-white shadow-sm ${className}`}>
      {children}
    </span>
  );
}
