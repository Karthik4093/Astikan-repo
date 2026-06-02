import { coreServices } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CoreServices() {
  return (
    <section id="lab-tests" className="bg-surface py-16 sm:py-20">
      <div className="container-page">
        <SectionHeader title={<>Our <span className="gradient-text">Core Services</span></>} description="Comprehensive healthcare solutions designed to meet all your medical needs under one convenient membership." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service, index) => (
            <article key={service.title} className="card p-8" data-aos="fade-up" data-aos-delay={index * 70}>
              <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-md text-white ${service.color}`}>
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-3 leading-7 text-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
