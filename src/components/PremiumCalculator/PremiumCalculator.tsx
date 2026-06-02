"use client";

import { Calculator, Shield, TrendingDown, Users } from "lucide-react";
import { useState } from "react";
import { usePremiumEstimate, type PremiumInputs } from "@/hooks/usePremiumEstimate";
import { formatCurrency } from "@/lib/utils";

const selectClass = "w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

export function PremiumCalculator() {
  const [inputs, setInputs] = useState<PremiumInputs>({
    ageBand: "36-45 years",
    coverage: 1000000,
    adults: 2,
    children: 1,
    teleconsultations: 0,
    labTests: 0,
    opdVisits: 0,
    medicineBuckets: 0,
    paSumInsured: 50000
  });
  const premium = usePremiumEstimate(inputs);

  const update = (key: keyof PremiumInputs, value: string) => {
    setInputs((current) => ({ ...current, [key]: key === "ageBand" ? value : Number(value) }));
  };

  return (
    <section id="premium-calculator" className="bg-white py-16 sm:py-20">
      <div className="container-page grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-start">
        <form className="overflow-hidden rounded-lg bg-white shadow-soft ring-1 ring-slate-100" data-gsap="fade-right">
          <div className="bg-gradient-to-r from-primary to-rose-500 p-6 text-white">
            <h2 className="flex items-center gap-3 text-2xl font-bold"><Calculator className="h-6 w-6" /> Health Premium Calculator</h2>
            <p className="text-sm text-white/85">Instantly calculate your health plan premium</p>
          </div>
          <div className="grid gap-4 p-5 sm:grid-cols-2 sm:gap-5 sm:p-6">
            <label className="space-y-2 text-sm font-medium">Select Age Band
              <select className={selectClass} value={inputs.ageBand} onChange={(e) => update("ageBand", e.target.value)}>
                {["18-35 years", "36-45 years", "46-55 years", "56-65 years"].map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label className="space-y-2 text-sm font-medium">Coverage Amount
              <select className={selectClass} value={inputs.coverage} onChange={(e) => update("coverage", e.target.value)}>
                {[500000, 1000000, 1500000, 2500000].map((item) => <option key={item} value={item}>{formatCurrency(item)}</option>)}
              </select>
            </label>
            {[
              ["adults", "Number of Adults", [1, 2, 3, 4]],
              ["children", "Number of Children", [0, 1, 2, 3]],
              ["teleconsultations", "Teleconsultations", [0, 4, 8, 12]],
              ["labTests", "LAB Tests", [0, 2, 4, 6]],
              ["opdVisits", "OPD Visits", [0, 2, 6, 10]],
              ["medicineBuckets", "Medicine Buckets", [0, 2, 4, 6]]
            ].map(([key, label, values]) => (
              <label key={key as string} className="space-y-2 text-sm font-medium">{label as string}
                <select className={selectClass} value={inputs[key as keyof PremiumInputs] as number} onChange={(e) => update(key as keyof PremiumInputs, e.target.value)}>
                  {(values as number[]).map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </label>
            ))}
            <label className="space-y-2 text-sm font-medium sm:col-span-2">Personal Accident (PA-AD) Sum Insured
              <select className={selectClass} value={inputs.paSumInsured} onChange={(e) => update("paSumInsured", e.target.value)}>
                {[50000, 100000, 200000, 500000].map((item) => <option key={item} value={item}>{formatCurrency(item)}</option>)}
              </select>
            </label>
            <button type="button" className="gradient-button sm:col-span-2">Calculate Premium</button>
            <div className="rounded-lg bg-slate-50 p-5 text-center sm:col-span-2">
              <p className="text-sm text-muted">Estimated Annual Premium</p>
              <p className="mt-1 text-3xl font-extrabold text-primary">{formatCurrency(premium)}</p>
              <p className="mt-1 text-sm font-medium text-emerald-600">Save up to 30% with Astikan Membership</p>
            </div>
          </div>
        </form>
        <div data-gsap="fade-left">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Reduce Your <span className="gradient-text">Health Insurance Premium</span></h2>
          <p className="mt-5 leading-8 text-muted">With Astikan Membership, significantly reduce your health insurance costs while getting enhanced coverage and benefits for your entire family.</p>
          <div className="mt-7 space-y-4">
            {[
              [TrendingDown, "Reduce Premium", "Lower your health insurance costs significantly"],
              [Shield, "Enhanced Coverage", "Get better coverage with Astikan membership"],
              [Users, "Family Protection", "Covers entire family up to 65 years"]
            ].map(([Icon, title, description]) => (
              <div key={title as string} className="card flex items-center gap-4 p-5">
                <Icon className="h-6 w-6 text-primary" />
                <div><h3 className="font-bold">{title as string}</h3><p className="text-sm text-muted">{description as string}</p></div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 text-center sm:grid-cols-2 sm:gap-6">
            <div><p className="text-4xl font-extrabold text-primary">30%</p><p className="text-sm text-muted">Average Savings</p></div>
            <div><p className="text-4xl font-extrabold text-rose-500">24/7</p><p className="text-sm text-muted">Support Available</p></div>
          </div>
          <a href="#contact" className="gradient-button mt-8">Get Personalized Quote</a>
        </div>
      </div>
    </section>
  );
}
