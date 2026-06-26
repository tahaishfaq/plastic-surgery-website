import BackToTop from "@/components/layout/BackToTop";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileConversionBar from "@/components/layout/MobileConversionBar";

export default function SiteShell({ children, className = "min-h-screen bg-brand-paper" }) {
  return (
    <div className={className}>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <BackToTop />
      <MobileConversionBar />
    </div>
  );
}
