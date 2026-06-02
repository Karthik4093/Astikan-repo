import { hospitals } from "@/data/hospitals";

export function TrustedHospitals() {
  return (
    <section className="bg-white pb-16">
      <div className="container-page text-center" data-gsap="fade-up">
        <h2 className="text-xl font-bold">Trusted by leading hospitals across India</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-4">
          {[...hospitals, "+ Many More"].map((hospital) => (
            <span key={hospital} className="rounded-md bg-white px-5 py-3 text-sm font-semibold shadow-card ring-1 ring-slate-100 sm:px-8">
              {hospital}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
