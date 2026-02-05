export function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
}
