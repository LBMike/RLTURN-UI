import LandingHeader from "@/components/landing/LandingHeader";
import HeroSection from "@/components/landing/HeroSection";
import CustodySection from "@/components/landing/CustodySection";
import BorrowingSection from "@/components/landing/BorrowingSection";
import LendingSection from "@/components/landing/LendingSection";
import SavingsSection from "@/components/landing/SavingsSection";
import LandingFooter from "@/components/landing/LandingFooter";

export default function LandingPage() {
  return (
    <>
      <LandingHeader />
      <main>
        <HeroSection />
        <CustodySection />
        <BorrowingSection />
        <LendingSection />
        <SavingsSection />
      </main>
      <LandingFooter />
    </>
  );
}
