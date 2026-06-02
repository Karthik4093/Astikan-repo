import { emergencyTreatments } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";

const dotColors = ["bg-emerald-500", "bg-blue-500", "bg-primary"];

export function EmergencyTreatments() {
  return (
    <section id="surgeries" className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <SectionHeader eyebrow="Emergency & Specialized Treatments" title={<>Emergency Treatments at <span className="gradient-text">Government Prices!!</span></>} description="Astikan partners with leading hospitals to deliver affordable and quality treatments for critical medical conditions." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {emergencyTreatments.map((item, index) => (
            <article key={item.title} className="card p-7" data-aos="fade-up" data-aos-delay={index * 70}>
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-md bg-gradient-to-br from-rose-500 to-primary text-white">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 min-h-16 leading-7 text-muted">{item.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {item.points.map((point, pointIndex) => <li key={point} className="flex gap-3"><span className={`mt-1.5 h-2.5 w-2.5 rounded-full ${dotColors[pointIndex]}`} /> {point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
