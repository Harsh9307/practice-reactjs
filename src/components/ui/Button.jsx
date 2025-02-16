const Button = ({ onClick, children, disabled = false, className = "" }) => {
    return (
      <button
        className={`px-4 py-2 rounded text-white ${disabled ? "bg-gray-400 cursor-not-allowed" : className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  