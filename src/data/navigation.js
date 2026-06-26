export const servicesSubmenu = [
  { label: "Featured Procedures", href: "/featured-procedures" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "International Patients", href: "/international-patients" },
];

export const navigationItems = [
  { label: "About", href: "/about" },
  { label: "Doctors", href: "/doctors" },
  {
    label: "Services",
    href: "/featured-procedures",
    hasSubmenu: true,
    submenu: servicesSubmenu,
  },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];
