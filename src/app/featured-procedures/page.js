import BackToTop from "@/components/layout/BackToTop";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileConversionBar from "@/components/layout/MobileConversionBar";
import ProcedureStickyNav from "@/components/procedures/ProcedureStickyNav";
import AdditionalProceduresGrid from "@/components/sections/procedures/AdditionalProceduresGrid";
import FeaturedProceduresHero from "@/components/sections/procedures/FeaturedProceduresHero";
import Lipo360Section from "@/components/sections/procedures/Lipo360Section";
import ProceduresPageCta from "@/components/sections/procedures/ProceduresPageCta";
import TummyTuckSection from "@/components/sections/procedures/TummyTuckSection";
import { proceduresStickyNav } from "@/data/featuredProcedures";

export const metadata = {
  title: "Featured Procedures | Rahman Plastic Surgery",
  description:
    "Explore tummy tuck, liposuction, mommy makeover, breast surgery, and additional cosmetic procedures with consultation guidance and recovery expectations.",
};

export default function FeaturedProceduresPage() {
  return (
    <div className="min-h-screen bg-brand-paper">
      <Header />
      <main id="main-content">
        <FeaturedProceduresHero />
        <ProcedureStickyNav items={proceduresStickyNav} />
        <TummyTuckSection />
        <Lipo360Section />
        <AdditionalProceduresGrid />
        <ProceduresPageCta />
      </main>
      <Footer />
      <BackToTop />
      <MobileConversionBar />
    </div>
  );
}
