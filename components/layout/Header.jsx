"use client";

import { useState } from "react";
import { Clock3, MapPin, Menu, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navigationItems } from "@/data/navigation";
import { contactPhones, getGoogleMapsUrl, getTelUrl, getWhatsAppUrl, siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";
import NavServicesDropdown from "./NavServicesDropdown";

const CONTACT_ICON_SIZE = 27;
const CONTACT_ICON_STROKE = 1.5;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-brand-white text-brand-ink">
        <div className="border-b border-brand-line">
          <div className="mx-auto flex h-[70px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:h-[70px] lg:px-12">
            <Link className="inline-flex shrink-0 items-center" href="/" aria-label="Rahman Plastic Surgery home">
              <Image
                src="/assets/logo-plastic.png"
                alt="Rahman Plastic Surgery"
                width={2172}
                height={724}
                priority
                className="h-auto w-[166px] sm:w-[190px]"
              />
            </Link>

            <div className="hidden items-center xl:flex">
              <a className="group flex items-center gap-3 whitespace-nowrap" href={getTelUrl(contactPhones[1])}>
                <Phone
                  aria-hidden="true"
                  className="shrink-0 text-brand-primary"
                  size={CONTACT_ICON_SIZE}
                  strokeWidth={CONTACT_ICON_STROKE}
                />
                <span className="grid gap-0.5 text-sm leading-5">
                  <strong className="font-bold text-brand-ink group-hover:text-brand-primary-hover">
                    {contactPhones[1].display}
                  </strong>
                  <span className="text-brand-body">Call us today</span>
                </span>
              </a>
              <a
                className="group ml-8 flex items-center gap-3 border-l border-brand-line pl-8 whitespace-nowrap"
                href={getGoogleMapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin
                  aria-hidden="true"
                  className="shrink-0 text-brand-primary"
                  size={CONTACT_ICON_SIZE}
                  strokeWidth={CONTACT_ICON_STROKE}
                />
                <span className="grid gap-0.5 text-sm leading-5">
                  <strong className="font-bold text-brand-ink group-hover:text-brand-primary-hover">
                    {siteConfig.address}
                  </strong>
                  <span className="text-brand-body">{siteConfig.city}</span>
                </span>
              </a>
              <div className="ml-8 flex items-center gap-3 border-l border-brand-line pl-8 whitespace-nowrap">
                <Clock3
                  aria-hidden="true"
                  className="shrink-0 text-brand-primary"
                  size={CONTACT_ICON_SIZE}
                  strokeWidth={CONTACT_ICON_STROKE}
                />
                <span className="grid gap-0.5 text-sm leading-5">
                  <strong className="font-bold text-brand-ink">{siteConfig.workingHours}</strong>
                  <span className="text-brand-body">{siteConfig.hoursNote}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-brand-line">
          <div className="mx-auto hidden h-[64px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:flex">
            <nav className="flex min-w-0 items-center" aria-label="Primary navigation">
              <ul className="flex items-center gap-9 text-[13px] font-normal uppercase tracking-[0.14em] 2xl:gap-11">
                {navigationItems.map((item) =>
                  item.hasSubmenu ? (
                    <NavServicesDropdown key={item.label} />
                  ) : (
                    <li key={item.href} className="shrink-0">
                      <Link
                        className="inline-flex min-h-11 items-center transition-colors hover:text-brand-primary-hover"
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </nav>

            <div className="flex shrink-0 items-center gap-x-3">
              <Button
                href={getWhatsAppUrl()}
                variant="soft"
                className="min-h-0 rounded-none px-4 py-2 text-[13px] tracking-[0.14em] active:translate-y-0"
              >
                Quick Contact
              </Button>
              <Button
                href="/contact#consultation"
                variant="primary"
                className="min-h-0 rounded-none px-4 py-2 text-[13px] tracking-[0.14em] active:translate-y-0"
              >
                Consultation
              </Button>
            </div>
          </div>

          <div className="flex h-[64px] items-center justify-end gap-1 px-5 sm:px-8 lg:px-12 xl:hidden">
            <a
              className="inline-flex size-11 items-center justify-center rounded-full text-brand-ink transition-colors hover:text-brand-primary-hover"
              href={getWhatsAppUrl()}
              aria-label="Chat with us on WhatsApp"
            >
              <MessageCircle aria-hidden="true" size={20} />
            </a>
            <button
              className="inline-flex size-11 items-center justify-center rounded-full text-brand-ink transition-colors hover:text-brand-primary-hover"
              type="button"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu aria-hidden="true" size={23} />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
