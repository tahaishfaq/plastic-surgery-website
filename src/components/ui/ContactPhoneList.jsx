import { contactPhones, getTelUrl, getWhatsAppUrl } from "@/data/site";

export function ContactPhoneList({
  className = "space-y-3",
  linkClassName = "transition-colors duration-200 hover:text-white",
  mutedClassName = "text-white/55",
  showWhatsAppLabel = true,
}) {
  return (
    <ul className={className}>
      {contactPhones.map((phone) => (
        <li key={phone.id}>
          <a
            className={linkClassName}
            href={phone.isWhatsApp ? getWhatsAppUrl() : getTelUrl(phone)}
          >
            {phone.display}
            {phone.isWhatsApp && showWhatsAppLabel ? (
              <span className={mutedClassName}> · WhatsApp</span>
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
