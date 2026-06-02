import { hospitals } from "@/data/hospitals";

export function HospitalNetwork() {
  return (
    <section className="bg-white py-12">
      <div className="container-page">
        <div className="dark-panel p-8 text-center sm:p-12" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold">Trusted Hospital Network</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">We&apos;ve partnered with India&apos;s leading hospitals to ensure you receive world-class treatment at government prices.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hospitals.map((hospital) => (
              <div key={hospital} className="rounded-lg bg-white/10 p-7">
                <h3 className="text-xl font-bold">{hospital}</h3>
                <p className="mt-2 text-sm text-slate-400">Hospital Partner</p>
              </div>
            ))}
          </div>
          <p className="mt-10 font-bold text-accent">+ Many More Leading Hospitals</p>
          <p className="mt-2 text-sm text-slate-400">Our network is continuously expanding to serve you better.</p>
        </div>
      </div>
    </section>
  );
}
