import { MessageCircle } from "lucide-react";

const options = [
  ["Free Consultation", "Speak with our health experts"],
  ["Custom Plans", "Tailored to your family's needs"],
  ["Best Prices", "Maximum value for your money"]
];

export function CustomPlan() {
  return (
    <section className="bg-white py-16">
      <div className="container-page">
        <div className="dark-panel mx-auto max-w-5xl p-8 text-center sm:p-12" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold">Customize Your Plan & Get More Discounts</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">Talk to our health counselors and choose a membership plan that fits your needs at the best price.</p>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {options.map(([title, description]) => (
              <div key={title} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <h3 className="font-bold text-fuchsia-400">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{description}</p>
              </div>
            ))}
          </div>
          <a href="#contact" className="gradient-button mt-8"><MessageCircle className="h-5 w-5" /> Talk to Health Counselor</a>
        </div>
      </div>
    </section>
  );
}
