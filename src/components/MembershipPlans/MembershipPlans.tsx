import { Check, Star, Zap } from "lucide-react";
import { plans } from "@/data/plans";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function MembershipPlans() {
  return (
    <section id="membership-plans" className="bg-surface py-16 sm:py-20">
      <div className="container-page">
        <SectionHeader title={<>Our <span className="gradient-text">Membership Plans</span></>} description="Choose a plan that fits your needs. All plans cover families up to 65 years with exclusive benefits." />
        <div className="grid gap-7 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <article key={plan.name} className={`relative rounded-lg bg-white p-8 shadow-card ring-1 ${plan.featured ? "ring-2 ring-primary" : "ring-slate-100"}`} data-aos="fade-up" data-aos-delay={index * 100}>
              {plan.featured ? <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white">Most Popular</span> : null}
              <div className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-md text-white ${plan.featured ? "bg-amber-500" : "bg-slate-700"}`}>
                {plan.featured ? <Star className="h-7 w-7 fill-current" /> : <Zap className="h-7 w-7" />}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-3 text-2xl font-extrabold">~ {plan.price} <span className="text-sm font-semibold text-muted">/ Year (Approx)</span></p>
                <p className="mt-2 font-bold text-primary">{plan.daily}</p>
                <p className="mt-4 text-sm italic text-muted">&quot;{plan.tagline}&quot;</p>
              </div>
              <ul className="mt-7 space-y-3 text-sm">
                {plan.benefits.map((benefit) => <li key={benefit} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-emerald-600" /> {benefit}</li>)}
              </ul>
              <a href="#contact" className={plan.featured ? "gradient-button mt-8 w-full" : "outline-button mt-8 w-full"}>{plan.cta}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
