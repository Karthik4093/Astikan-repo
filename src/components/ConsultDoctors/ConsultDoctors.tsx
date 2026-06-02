import { consultCards } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ConsultDoctors() {
  return (
    <section id="find-doctors" className="bg-blue-50/70 py-16 sm:py-20">
      <div className="container-page">
        <SectionHeader
          title={<>Consult Doctors Anytime, <span className="text-teal-600">Anywhere</span></>}
          description="Speak to experienced doctors from the comfort of your home. Skip long waits, avoid travel, and get professional medical guidance whenever you need it."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {consultCards.map((card, index) => (
            <article key={card.title} className="card p-8 text-center" data-aos="fade-up" data-aos-delay={index * 120}>
              <card.icon className={`mx-auto mb-5 h-12 w-12 ${card.color}`} />
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
