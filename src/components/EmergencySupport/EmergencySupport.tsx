import { ShieldPlus } from "lucide-react";

export function EmergencySupport() {
  return (
    <section className="bg-white py-12">
      <div className="container-page">
        <div className="rounded-lg border border-rose-100 bg-rose-50/40 px-6 py-12 text-center shadow-card" data-aos="zoom-in">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent text-white">
            <ShieldPlus className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-extrabold">24/7 Emergency Support</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted">Our dedicated support team is available around the clock to assist with immediate hospital admissions and care coordination.</p>
          <a href="tel:+918076257344" className="gradient-button mt-7">Emergency Helpline: +91 80762 57344</a>
        </div>
      </div>
    </section>
  );
}
