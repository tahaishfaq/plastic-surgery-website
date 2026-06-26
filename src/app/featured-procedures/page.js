import SiteShell from "@/components/layout/SiteShell";
import ProcedureStickyNav from "@/components/procedures/ProcedureStickyNav";
import FeaturedProceduresHero from "@/components/sections/procedures/FeaturedProceduresHero";
import Lipo360Section from "@/components/sections/procedures/Lipo360Section";
import ProcedureDetailSection from "@/components/sections/procedures/ProcedureDetailSection";
import ProceduresPageCta from "@/components/sections/procedures/ProceduresPageCta";
import TummyTuckSection from "@/components/sections/procedures/TummyTuckSection";
import {
  breastSurgeryDetail,
  faceProceduresDetail,
  gynecomastiaDetail,
  mommyMakeoverDetail,
  proceduresStickyNav,
} from "@/data/featuredProcedures";

export const metadata = {
  title: "Featured Procedures | Rahman Plastic Surgery",
  description:
    "Explore tummy tuck, liposuction, mommy makeover, breast surgery, and additional cosmetic procedures with consultation guidance and recovery expectations.",
};

export default function FeaturedProceduresPage() {
  return (
    <SiteShell>
      <FeaturedProceduresHero />
      <ProcedureStickyNav items={proceduresStickyNav} />
      <TummyTuckSection />
      <Lipo360Section />
      <ProcedureDetailSection detail={mommyMakeoverDetail} imagePosition="right" />
      <ProcedureDetailSection
        detail={breastSurgeryDetail}
        imagePosition="left"
        className="scroll-mt-40 bg-brand-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      />
      <ProcedureDetailSection detail={gynecomastiaDetail} imagePosition="right" />
      <ProcedureDetailSection
        detail={faceProceduresDetail}
        imagePosition="left"
        className="scroll-mt-40 bg-brand-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      />
      <ProceduresPageCta />
    </SiteShell>
  );
}
