import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const features = ["One Subscription for All Needs", "Cashless transactions", "Discounts & benefits", "Easy app-based management"];

export function HealthPocket() {
  return (
    <section id="health-pocket" className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <SectionHeader eyebrow="Health Pocket (Astikan Card)" title={<>One Subscription for <span className="gradient-text">All Needs</span></>} description="Get complete healthcare solutions under a single membership from doctor consultations to lab tests, pharmacy services, telemedicine, and medical finance." />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div data-aos="fade-right">
            <Image src="/images/health-card.svg" alt="Astikan HealthPocket card" width={760} height={540} className="h-auto w-full" loading="lazy" />
          </div>
          <div data-aos="fade-left">
            <h3 className="text-2xl font-bold">India&apos;s First Health Pocket Card</h3>
            <p className="mt-4 leading-8 text-muted">India&apos;s first all-in-one health membership puts complete healthcare solutions in your pocket with a digital-first approach.</p>
            <ul className="mt-6 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 font-semibold"><CheckCircle className="h-5 w-5 text-primary" /> {feature}</li>
              ))}
            </ul>
            <a href="#membership-plans" className="gradient-button mt-8">Get Your Health Card</a>
          </div>
        </div>
      </div>
    </section>
  );
}
