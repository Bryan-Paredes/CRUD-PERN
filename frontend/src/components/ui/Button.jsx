export function Button({ children, className, ...props }) {
  return (
    <button
      className={`relative inline-flex items-center gap-x-1.5 rounded-md bg-green-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:focusring-offset-2 focus-visible:outline-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
