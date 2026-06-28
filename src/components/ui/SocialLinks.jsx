import { socialLinks } from "@/data/site";

const iconClassName = "size-5";

function YouTubeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={iconClassName}>
      <path d="M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.28 5.75 12 5.75 12 5.75s-6.28 0-7.86.311A2.75 2.75 0 0 0 2.2 8.001 28.6 28.6 0 0 0 1.9 12a28.6 28.6 0 0 0 .3 3.999 2.75 2.75 0 0 0 1.94 1.94c1.58.311 7.86.311 7.86.311s6.28 0 7.86-.311a2.75 2.75 0 0 0 1.94-1.94c.2-1.32.3-2.66.3-3.999a28.6 28.6 0 0 0-.3-3.999ZM10 15.25V8.75l5.25 3.25L10 15.25Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={iconClassName}>
      <path d="M16.5 3h-2.2c.2 1.5.9 2.8 2 3.7 1 .8 2.3 1.2 3.7 1.1v2.2c-1.3 0-2.5-.3-3.6-.9v7.4c0 3.4-2.8 5.5-5.8 5.5-1.2 0-2.4-.3-3.4-.9-2.1-1.3-3.1-3.7-2.6-6.2.5-2.3 2.3-4 4.7-4.5v2.3c-1.3.3-2.2 1.3-2.4 2.6-.3 1.7.9 3.2 2.6 3.5 1.6.3 3.1-.8 3.4-2.4.1-.3.1-.6.1-.9V3Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={iconClassName}>
      <path d="M13.5 22v-8h2.7l.4-3.1H13.5V9.1c0-.9.2-1.5 1.6-1.5h1.7V4.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10.9H7.5v3.1h2.6V22h3.4Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={iconClassName}>
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5ZM17.8 6.7a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
    </svg>
  );
}

const iconMap = {
  youtube: YouTubeIcon,
  tiktok: TikTokIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
};

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.id];

        return (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow Rahman Plastic Surgery on ${link.label}`}
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-white/75 transition-colors duration-200 hover:border-brand-primary hover:text-white"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
