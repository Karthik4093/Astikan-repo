import { Play } from "lucide-react";
import { securityCards } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SecuritySection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <SectionHeader title="Your Health, Your Security" description="Learn how the Astikan Health Pocket works and how it saves money while protecting families." />
        <div className="mx-auto flex aspect-video max-w-3xl items-center justify-center rounded-lg bg-black" data-aos="zoom-in">
          <button className="flex h-16 w-20 items-center justify-center rounded-lg bg-red-600 text-white" aria-label="Watch Astikan Health video">
            <Play className="h-9 w-9 fill-current" />
          </button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {securityCards.map((card, index) => (
            <article key={card.title} className="card p-7 text-center" data-aos="fade-up" data-aos-delay={index * 100}>
              <card.icon className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="font-bold">{card.title}</h3>
              <p className="mt-2 text-sm text-muted">{card.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-9 text-center">
          <a href="#contact" className="gradient-button">Start Your Health Journey Today</a>
        </div>
      </div>
    </section>
  );
}
