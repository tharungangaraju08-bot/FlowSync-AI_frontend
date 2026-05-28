const PrimaryButton = ({ title, onClick, className = '' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-sky-500/30 ${className}`}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
