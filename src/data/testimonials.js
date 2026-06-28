/**
 * Local .webp paths fall back to matching .svg placeholders until files are added.
 * Remote URLs (e.g. YouTube thumbnails) are returned as-is.
 */
export function resolveTestimonialImage(src) {
  if (typeof src !== "string") return src;
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return src.replace(/\.webp$/i, ".svg");
}

export function getYouTubeEmbedUrl(videoId) {
  return `https://www.youtube.com/embed/${videoId}`;
}

export function getYouTubeThumbnail(videoId, quality = "maxres") {
  const file =
    quality === "maxres" ? "maxresdefault.jpg" : quality === "hq" ? "hqdefault.jpg" : "sddefault.jpg";
  return `https://i.ytimg.com/vi/${videoId}/${file}`;
}

export const testimonialsContent = {
  eyebrow: "Patient Stories",
  title: "Patient Testimonials",
  description:
    "Hear from patients who trusted our team for their plastic surgery journey in Pakistan.",
  slides: [
    {
      id: "slide-01",
      videoId: "stQXpI3DK8M",
      videoUrl: "https://www.youtube.com/watch?v=stQXpI3DK8M",
      embedUrl: getYouTubeEmbedUrl("stQXpI3DK8M"),
      thumbnail: getYouTubeThumbnail("stQXpI3DK8M"),
      thumbnailAlt: "Patient video testimonial for tummy tuck procedure",
      review: {
        rating: 5,
        quote:
          "I had a tummy tuck with Dr. Rahman and my results exceeded my expectations. The team was professional, supportive, and clear throughout the process.",
        name: "A.K.",
        tag: "Tummy Tuck Patient",
        source: "Google Review",
        avatar: "/images/testimonials/avatar-ak.webp",
      },
    },
    {
      id: "slide-02",
      videoId: "MDaOdVBW6xc",
      videoUrl: "https://www.youtube.com/watch?v=MDaOdVBW6xc",
      embedUrl: getYouTubeEmbedUrl("MDaOdVBW6xc"),
      thumbnail: getYouTubeThumbnail("MDaOdVBW6xc"),
      thumbnailAlt: "International patient video testimonial",
      review: {
        rating: 5,
        quote:
          "From my online consultation to recovery support, everything was well organized and comfortable.",
        name: "S.M.",
        tag: "International Patient",
        source: "Google Review",
        avatar: "/images/testimonials/avatar-sm.webp",
      },
    },
    {
      id: "slide-03",
      videoId: "wgkGlmvFqF8",
      videoUrl: "https://www.youtube.com/watch?v=wgkGlmvFqF8",
      embedUrl: getYouTubeEmbedUrl("wgkGlmvFqF8"),
      thumbnail: getYouTubeThumbnail("wgkGlmvFqF8"),
      thumbnailAlt: "Body contouring patient video testimonial",
      review: {
        rating: 5,
        quote:
          "The clinic experience was calm, private, and professional. I felt guided at every step.",
        name: "N.R.",
        tag: "Body Contouring Patient",
        source: "Google Review",
        avatar: "/images/testimonials/avatar-nr.webp",
      },
    },
  ],
};
