export default function HighlightedWord({ children, tone = "light", className = "" }) {
  const barClass = tone === "dark" ? "bg-[#3e3b39]" : "bg-[#f7f1e8]";

  return (
    <span className={`relative inline-block whitespace-nowrap ${className}`}>
      <span className="relative z-1">{children}</span>
      <span
        aria-hidden="true"
        className={`absolute bottom-[-0.1em] left-0 z-0 h-[0.44em] w-full ${barClass}`}
      />
    </span>
  );
}
