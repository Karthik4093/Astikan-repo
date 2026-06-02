import Image from "next/image";
import { Smartphone } from "lucide-react";

const features = ["Instant AI symptom analysis", "Emergency consultations when you need them most", "Track your vitals and stay proactive", "Save money by avoiding unnecessary visits"];

export function AstikanAI() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <div className="dark-panel grid gap-6 p-6 sm:gap-8 sm:p-8 lg:grid-cols-[1.2fr_.8fr] lg:p-14" data-gsap="fade-up">
          <div>
            <p className="mb-5 flex items-center gap-2 text-sm font-semibold text-violet-300"><Smartphone className="h-5 w-5" /> Astikan AI</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Astikan AI - Your Health Companion</h2>
            <p className="mt-5 max-w-2xl leading-7 text-slate-300">
              Meet Astikan AI, your personal health assistant that helps you check symptoms, track vitals, and get instant advice.
            </p>
            <ul className="mt-7 space-y-3 text-slate-100">
              {features.map((feature) => <li key={feature} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />{feature}</li>)}
            </ul>
          </div>
          <Image src="/illustrations/phone-app.svg" alt="Astikan app download preview" width={520} height={380} className="h-auto w-full rounded-lg" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
