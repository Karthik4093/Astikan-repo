import { AstikanAI } from "@/components/AstikanAI/AstikanAI";
import { ConsultDoctors } from "@/components/ConsultDoctors/ConsultDoctors";
import { ContactSection } from "@/components/ContactSection/ContactSection";
import { CoreServices } from "@/components/CoreServices/CoreServices";
import { CTASection } from "@/components/CTASection/CTASection";
import { CustomPlan } from "@/components/CustomPlan/CustomPlan";
import { EmergencySupport } from "@/components/EmergencySupport/EmergencySupport";
import { EmergencyTreatments } from "@/components/EmergencyTreatments/EmergencyTreatments";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { HealthPocket } from "@/components/HealthPocket/HealthPocket";
import { Hero } from "@/components/Hero/Hero";
import { HospitalNetwork } from "@/components/HospitalNetwork/HospitalNetwork";
import { HowItWorks } from "@/components/HowItWorks/HowItWorks";
import { MembershipPlans } from "@/components/MembershipPlans/MembershipPlans";
import { Newsletter } from "@/components/Newsletter/Newsletter";
import { PremiumCalculator } from "@/components/PremiumCalculator/PremiumCalculator";
import { SecuritySection } from "@/components/SecuritySection/SecuritySection";
import { TrustedHospitals } from "@/components/TrustedHospitals/TrustedHospitals";
import { WealthForHealth } from "@/components/WealthForHealth/WealthForHealth";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedHospitals />
        <ConsultDoctors />
        <AstikanAI />
        <CoreServices />
        <CTASection />
        <HealthPocket />
        <EmergencyTreatments />
        <HospitalNetwork />
        <EmergencySupport />
        <MembershipPlans />
        <CustomPlan />
        <PremiumCalculator />
        <HowItWorks />
        <WealthForHealth />
        <SecuritySection />
        <ContactSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
