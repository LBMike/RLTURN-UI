import LandingHeader from "@/components/landing/LandingHeader";
import VideoBanner from "@/components/landing/VideoBanner";
import HeroSection from "@/components/landing/HeroSection";
import BorrowingSection from "@/components/landing/BorrowingSection";
import LendingSection from "@/components/landing/LendingSection";
import SavingsSection from "@/components/landing/SavingsSection";
import LandingFooter from "@/components/landing/LandingFooter";

export default function LandingPage() {
  return (
    <>
      <LandingHeader />
      <main>
        <VideoBanner />
        <HeroSection />
        <BorrowingSection />
        <LendingSection />
        <SavingsSection />
      </main>
      <LandingFooter />
    </>
  );
}
