export default function Button({
  children,
  className = "",
  href,
  variant = "primary",
  ...props
}) {
  const styles = {
    primary:
      "bg-[#A88D70] text-white hover:bg-[#90755A] focus-visible:outline-[#A88D70]",
    secondary:
      "border border-white/60 bg-transparent text-white hover:border-white hover:bg-white/10 focus-visible:outline-white",
    light:
      "bg-[#FFFDFB] text-[#2B231E] hover:bg-[#F1E7DD] focus-visible:outline-[#A88D70]",
    soft:
      "bg-[#F1E7DD] text-[#2B231E] hover:bg-[#EDE1D5] focus-visible:outline-[#A88D70]",
    outline:
      "border border-[#A88D70] bg-transparent text-[#2B231E] hover:border-[#90755A] hover:text-[#90755A] focus-visible:outline-[#A88D70]",
  };

  const sharedClasses = `inline-flex min-h-11 items-center justify-center gap-2 rounded-[2px] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] transition-colors duration-200 active:translate-y-px ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a className={sharedClasses} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={sharedClasses} type="button" {...props}>
      {children}
    </button>
  );
}
