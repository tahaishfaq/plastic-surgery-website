import ProcedureDetailSection from "@/components/sections/procedures/ProcedureDetailSection";
import { lipo360Detail } from "@/data/featuredProcedures";

export default function Lipo360Section() {
  return (
    <ProcedureDetailSection
      detail={lipo360Detail}
      imagePosition="right"
      className="scroll-mt-40 bg-brand-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    />
  );
}
