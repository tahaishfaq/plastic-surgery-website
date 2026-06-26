import BackToTop from "@/components/layout/BackToTop";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileConversionBar from "@/components/layout/MobileConversionBar";
import BeforeAfterGallerySection from "@/components/sections/BeforeAfterGallerySection";
import ConsultationFormSection from "@/components/sections/ConsultationFormSection";
import FeaturedProceduresSection from "@/components/sections/FeaturedProceduresSection";
import FiveStepJourneySection from "@/components/sections/FiveStepJourneySection";
import InternationalServicesSection from "@/components/sections/InternationalServicesSection";
import LocationMapSection from "@/components/sections/LocationMapSection";
import PatientJourneyGallerySection from "@/components/sections/PatientJourneyGallerySection";
import RecoveryJourneySection from "@/components/sections/RecoveryJourneySection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import StrongCtaSection from "@/components/sections/StrongCtaSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import DoctorsTeaserSection, { NewsTeaserSection } from "@/components/sections/HomepageTeasers";
import { getAllPosts } from "@/lib/content/news";
import HighlightedWord from "@/components/ui/HighlightedWord";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl, siteConfig } from "@/data/site";
import Image from "next/image";

export default async function Home() {
  const newsPosts = await getAllPosts();

  return (
    <div className="min-h-screen bg-[#F8F2EB]">
      <Header />
      <main id="main-content">
        <section id="home" className="relative isolate overflow-hidden bg-[#F8F2EB] px-5 py-24 text-[#2B231E] sm:px-8 lg:min-h-[620px] lg:px-12 lg:py-32">
          <Image
            src="/assets/hero-clinic.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[#F8F2EB]/35" />
          <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col justify-end lg:min-h-[360px]">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A88D70]">{siteConfig.name}</p>
            <h1 className="mt-5 max-w-[930px] font-instrument text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              <HighlightedWord tone="light">Transform</HighlightedWord> Your Body With Confidence
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#665D57] sm:text-lg">
              Expert Tummy Tuck and Liposuction procedures for natural-looking results.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#consultation">Book Consultation</Button>
              <Button href={getWhatsAppUrl()} variant="outline">
                WhatsApp Us
              </Button>
            </div>
          </div>
        </section>

        <WhyChooseSection />
        <FiveStepJourneySection />
        <InternationalServicesSection />
        <FeaturedProceduresSection />
        <BeforeAfterGallerySection />
        <TestimonialsSection />
        <StrongCtaSection />
        <RecoveryJourneySection />
        <PatientJourneyGallerySection />
        <StatisticsSection />
        <LocationMapSection />
        <DoctorsTeaserSection />
        <NewsTeaserSection posts={newsPosts} />
        <ConsultationFormSection />
      </main>
      <Footer />
      <BackToTop />
      <MobileConversionBar />
    </div>
  );
}
