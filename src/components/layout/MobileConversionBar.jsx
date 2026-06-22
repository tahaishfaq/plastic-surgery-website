import { CalendarDays, MessageCircle, Phone } from "lucide-react";
import { getTelUrl, getWhatsAppUrl } from "@/data/site";

const actions = [
  { label: "Call", href: getTelUrl(), icon: Phone },
  { label: "WhatsApp", href: getWhatsAppUrl(), icon: MessageCircle },
  { label: "Book", href: "#consultation", icon: CalendarDays },
];

export default function MobileConversionBar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 grid h-[72px] grid-cols-3 border-t border-brand-line bg-white shadow-[0_-12px_30px_rgba(11,30,51,0.08)] lg:hidden" aria-label="Quick contact actions">
      {actions.map(({ icon: Icon, label, href }) => (
        <a className="flex min-h-11 flex-col items-center justify-center gap-1 text-xs font-bold text-brand-ink transition-colors hover:bg-brand-soft-blue hover:text-brand-primary" href={href} key={label}>
          <Icon aria-hidden="true" size={18} />
          {label}
        </a>
      ))}
    </nav>
  );
}
