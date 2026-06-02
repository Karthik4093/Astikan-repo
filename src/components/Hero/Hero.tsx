import Image from "next/image";
import { Headphones, Heart, Hospital, Users } from "lucide-react";

const stats = [
  { value: "60,000+", label: "People Benefited", icon: Users, color: "text-blue-600" },
  { value: "100+", label: "Partner Hospitals", icon: Hospital, color: "text-rose-500" },
  { value: "24/7", label: "Customer Support", icon: Headphones, color: "text-emerald-600" }
];

export function Hero() {
  return (
    <section
  id="home"
  className="bg-white pt-8 pb-12 sm:pt-8 sm:pb-14 lg:pt-10 lg:pb-16"
>
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
        <div data-gsap="fade-up">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600">
            <Heart className="h-4 w-4 fill-current" /> Your Complete Digital Health Companion
          </p>
          <h1 className="max-w-3xl text-3xl font-[700] leading-tight tracking-normal sm:text-4xl lg:text-5xl">
            Astikan Health Your Complete <span className="gradient-text">Digital Healthcare Partner</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
            Healthcare should be simple, fast, and available whenever you need it. Astikan Health brings online doctor consultations, lab tests, medicine delivery, surgeries, and financial support under one roof.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href="#health-pocket" className="gradient-button w-full sm:w-auto">Get Your Health Card</a>
            <a href="#premium-calculator" className="outline-button w-full sm:w-auto">Calculate Premium</a>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="card p-5 text-center sm:p-6" data-aos="zoom-in">
                <stat.icon className={`mx-auto mb-3 h-8 w-8 ${stat.color}`} />
                <p className="text-2xl font-extrabold">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative" data-gsap="zoom-in">
          <Image src="/illustrations/healthcare-team.webp" alt="Astikan healthcare team" width={760} height={620} priority className="h-auto w-full rounded-lg" />
        </div>
      </div>
    </section>
  );
}
