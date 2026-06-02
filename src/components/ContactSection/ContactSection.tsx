import { Building2, Clock, Download, Heart, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { quickActions } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";

const inputClass = "w-full rounded-md border border-slate-200 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

export function ContactSection() {
  return (
    <section id="contact" className="bg-slate-100 py-16 sm:py-20">
      <div className="container-page">
        <SectionHeader title={<>Get in <span className="gradient-text">Touch</span></>} description="Have questions about your health coverage? Our expert team is here to help you choose the right plan." />
        <div className="grid gap-8 lg:grid-cols-[1.5fr_.85fr]">
          <form className="card p-6 sm:p-8" data-aos="fade-right">
            <p className="mb-6 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-primary to-rose-500 px-5 py-3 font-bold text-white"><Heart className="h-5 w-5 fill-current" /> Send us a message</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <input className={inputClass} aria-label="First name" placeholder="First Name" />
              <input className={inputClass} aria-label="Last name" placeholder="Last Name" />
              <input className={`${inputClass} sm:col-span-2`} aria-label="Phone" placeholder="+91 98765 43210" />
              <input className={`${inputClass} sm:col-span-2`} aria-label="Email" placeholder="your.email@example.com" type="email" />
              <input className={`${inputClass} sm:col-span-2`} aria-label="Subject" placeholder="How can we help you?" />
              <textarea className={`${inputClass} min-h-36 sm:col-span-2`} aria-label="Message" placeholder="Tell us about your health coverage needs, questions about our plans, or any other queries..." />
              <label className="flex gap-3 text-sm text-muted sm:col-span-2">
                <input type="checkbox" defaultChecked className="mt-1 h-4 w-4 rounded border-slate-300 accent-primary" />
                I agree to receive communications from Astikan Healthcare and consent to processing my personal data for consultation purposes.
              </label>
              <button type="button" className="gradient-button sm:col-span-2">Send Message</button>
            </div>
          </form>
          <aside className="space-y-5" data-aos="fade-left">
            {[
              [MapPin, "Registered Office", "B-45, Sector 56, Noida, Uttar Pradesh, India Pin: 201301"],
              [Building2, "Branch Office", "C-22, Sector 62, Noida, Uttar Pradesh, India Pin: 201309"],
              [Phone, "Call Us", "Executives: +91 99900 71792, +91 73033 34931"],
              [Mail, "Email Us", "care@astikan.com | letstalk@astikan.com"],
              [Clock, "Business Hours", "Mon-Fri: 9:00 AM - 8:00 PM, Sat: 9:00 AM - 6:00 PM"]
            ].map(([Icon, title, body]) => (
              <div key={title as string} className="card p-6">
                <Icon className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-bold">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{body as string}</p>
              </div>
            ))}
            <div className="card p-6">
              <h3 className="font-bold">Emergency Support</h3>
              <p className="mt-2 text-sm leading-6 text-muted">For medical emergencies, our 24/7 helpline is always available.</p>
              <a href="tel:+919990071792" className="gradient-button mt-4 w-full">Emergency: +91 99900 71792</a>
            </div>
            <div className="card p-6">
              <h3 className="font-bold">Quick Actions</h3>
              <div className="mt-4 space-y-3">
                {quickActions.map((action, index) => {
                  const Icon = index === 0 ? Heart : index === 1 ? MessageCircle : Download;
                  return <button key={action} className="flex w-full items-center gap-3 rounded-md border border-slate-200 px-4 py-3 text-left text-sm font-semibold"><Icon className="h-5 w-5 text-primary" /> {action}</button>;
                })}
              </div>
            </div>
            <div className="card p-6">
              <h3 className="font-bold">Response Time</h3>
              <p className="mt-3 text-sm text-muted">General Inquiries: <b>Within 2 hours</b></p>
              <p className="mt-2 text-sm text-muted">Health Consultation: <b>Within 30 minutes</b></p>
              <p className="mt-2 text-sm text-muted">Emergency Support: <b className="text-rose-500">Immediate</b></p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
