import ProcedureDetailSection from "@/components/sections/procedures/ProcedureDetailSection";
import { tummyTuckDetail } from "@/data/featuredProcedures";

export default function TummyTuckSection() {
  return <ProcedureDetailSection detail={tummyTuckDetail} imagePosition="left" />;
}
