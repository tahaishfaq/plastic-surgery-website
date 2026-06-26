import Image from "next/image";
import { footerContent } from "@/data/footer";
import { navigationItems } from "@/data/navigation";
import { ContactPhoneList } from "@/components/ui/ContactPhoneList";
import { getGoogleMapsUrl, getMailtoUrl, siteConfig } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-brand-ink pb-24 text-white lg:pb-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_0%,rgba(168,141,112,0.12),transparent_48%)]"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 pt-16 sm:px-8 lg:px-12 lg:pt-20">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-12 lg:gap-10 lg:pb-16">
          <div className="lg:col-span-5">
            <a href="#home" className="inline-block">
              <Image
                src="/assets/logo-plastic.png"
                alt={siteConfig.name}
                width={2172}
                height={724}
                className="h-auto w-[168px] brightness-0 invert sm:w-[184px]"
              />
            </a>
            <p className="mt-6 max-w-sm text-base leading-7 text-white/72">{siteConfig.tagline}</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2 lg:gap-12">
            <nav aria-label="Footer navigation">
              <p className="text-sm font-semibold text-white">Explore</p>
              <ul className="mt-5 space-y-3">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <a
                      className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-sm font-semibold text-white">Contact</p>
              <ContactPhoneList
                className="mt-5 space-y-3 text-sm text-white/70"
                linkClassName="transition-colors duration-200 hover:text-white"
              />
              <ul className="mt-4 space-y-4 text-sm text-white/70">
                <li>
                  <a className="transition-colors duration-200 hover:text-white" href={getMailtoUrl()}>
                    {siteConfig.email}
                  </a>
                </li>
                <li className="leading-6">
                  <a className="transition-colors duration-200 hover:text-white" href={getGoogleMapsUrl()} target="_blank" rel="noopener noreferrer">
                    {siteConfig.address}
                    <br />
                    {siteConfig.city}
                  </a>
                  <br />
                  {siteConfig.workingHours}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-6 text-white/50">{footerContent.disclaimer}</p>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {footerContent.legalLinks.map((link) => (
              <a key={link.href} className="transition-colors duration-200 hover:text-white/75" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
