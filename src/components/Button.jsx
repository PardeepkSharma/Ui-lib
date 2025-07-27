// Button.tsx
const Button = ({ children, className2 = "red", className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-${className2}-500 text-white rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
