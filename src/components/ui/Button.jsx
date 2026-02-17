export function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] hover:scale-[1.02] shadow-lg hover:shadow-xl';
  const variants = {
    primary: 'btn-primary focus:ring-[#2E6BA8]',
    secondary: 'bg-white text-gray-900 hover:bg-gray-50 focus:ring-gray-300 border border-gray-200',
    outline: 'btn-outline focus:ring-[#2E6BA8]',
  };
  return (
    <button className={`${base} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  );
}
