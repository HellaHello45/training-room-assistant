export function Card({ children }) {
  return <div className="border rounded-lg shadow p-4">{children}</div>;
}
export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}
export function Input(props) {
  return <input className="border px-2 py-1 rounded w-full" {...props} />;
}
export function Button({ children, ...props }) {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded" {...props}>
      {children}
    </button>
  );
}