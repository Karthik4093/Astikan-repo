import { ChartNoAxesCombined, HeartPulse, Stethoscope } from "lucide-react";

export function WealthForHealth() {
  return (
    <section className="bg-white py-12">
      <div className="container-page">
        <div className="dark-panel grid gap-10 p-8 sm:p-12 lg:grid-cols-2" data-aos="fade-up">
          <div>
            <h2 className="gradient-text text-3xl font-extrabold">Wealth for Health</h2>
            <p className="mt-5 leading-8 text-slate-200">Astikan helps you create wealth from health with its smart Health Pocket card.</p>
            <ul className="mt-6 space-y-4">
              {[[HeartPulse, "Monitor your vitals"], [Stethoscope, "Connect with doctors"], [ChartNoAxesCombined, "Save money on bills"]].map(([Icon, label]) => (
                <li key={label as string} className="flex items-center gap-3 text-slate-100"><Icon className="h-5 w-5 text-accent" /> {label as string}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-7">
            <h3 className="text-2xl font-bold">Earn HealthCredit Points</h3>
            <p className="mt-3 text-slate-300">Earn points with every purchase and redeem them for discounts on:</p>
            <ul className="mt-5 space-y-3 text-slate-100">
              {["Hospital bills", "Lab tests", "Doctor visits", "Insurance premiums", "Pharmacy purchases"].map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-accent" /> {item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
