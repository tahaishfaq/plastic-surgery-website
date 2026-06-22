import { Star } from "lucide-react";

export default function StarRating({ count = 5, size = 14, className = "" }) {
  return (
    <div className={`flex gap-1 ${className}`} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          className="fill-brand-primary text-brand-primary"
          size={size}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}
