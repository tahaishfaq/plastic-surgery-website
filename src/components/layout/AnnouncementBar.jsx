import { MessageCircle, Phone } from "lucide-react";
import { getTelUrl, getWhatsAppUrl, siteConfig } from "@/data/site";

export default function AnnouncementBar() {
  return (
    <aside className="hidden border-b border-[#E5DCD2] bg-[#FFFDFB] text-sm text-[#2B231E] lg:block">
      <div className="mx-auto flex h-10 max-w-[1280px] items-center justify-between px-12">
        <p className="font-medium tracking-[0.01em]">
          International Patients Welcome <span className="mx-3 text-brand-muted">|</span> Virtual Consultations Available
        </p>
        <div className="flex items-center gap-5 text-xs font-bold uppercase tracking-[0.08em]">
          <a className="inline-flex items-center gap-2 transition-colors hover:text-[#90755A]" href={getTelUrl()}>
            <Phone aria-hidden="true" size={14} />
            Call
          </a>
          <a className="inline-flex items-center gap-2 transition-colors hover:text-[#90755A]" href={getWhatsAppUrl()}>
            <MessageCircle aria-hidden="true" size={14} />
            WhatsApp
          </a>
          <span className="text-[#9F8F80]">{siteConfig.address}, {siteConfig.city}</span>
        </div>
      </div>
    </aside>
  );
}
