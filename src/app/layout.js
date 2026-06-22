import { DM_Sans, Instrument_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: "Rahman Plastic Surgery | Tummy Tuck & Liposuction in Pakistan",
  description:
    "Explore personalized tummy tuck, liposuction, Lipo 360, and body contouring care with Rahman Plastic Surgery in Pakistan. International patient consultations available.",
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  openGraph: {
    title: "Rahman Plastic Surgery | Tummy Tuck & Liposuction in Pakistan",
    description:
      "Personalized body contouring care for patients in Pakistan and abroad.",
    ...(siteUrl ? { images: ["/images/placeholders/og-placeholder.svg"] } : {}),
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
