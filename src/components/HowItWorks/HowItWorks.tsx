import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  ["Download & Register", "Download the Astikan app and create your account with basic details."],
  ["Choose Your Plan", "Select from Silver, Gold, or Platinum plans based on your needs."],
  ["Get Digital Card", "Receive your digital health card instantly after payment."],
  ["Start Earning & Saving", "Earn HealthCredit points and enjoy discounts on healthcare services."]
];

export function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <SectionHeader eyebrow="How Health Pocket Works" title={<>Understand the benefits and working of the <span className="gradient-text">Astikan Health Pocket Card</span></>} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, description], index) => (
            <article key={title} className="card p-7 text-center" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent text-lg font-extrabold text-white">{String(index + 1).padStart(2, "0")}</div>
              <h3 className="font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
