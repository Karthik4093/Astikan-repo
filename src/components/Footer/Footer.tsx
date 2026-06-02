import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const columns = [
  ["Quick Links", ["Home", "Health Pocket", "Astikan Plus", "Contact Us"]],
  ["Our Services", ["Health Checkups", "Lab Tests", "Medicine Delivery", "Medical Finance", "Telemedicine", "Emergency Support"]],
  ["Legal & Support", ["Privacy Policy", "Terms & Conditions", "Refund Policy", "Disclaimer", "Grievance Portal", "FAQ's"]]
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-page grid gap-8 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-10" data-gsap="fade-up">
        <div>
          <Image src="/logos/astikan-logo.webp" alt="Astikan Healthcare" width={160} height={45} className="mb-5 h-auto w-32 brightness-0 invert sm:w-36" />
          <p className="leading-7 text-slate-300">Empowering India&apos;s health with affordable and accessible solutions. Your trusted partner for healthcare coverage and wellness.</p>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <p className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-primary" /> B-45, Sector 56, Noida, Uttar Pradesh, India</p>
            <p className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-primary" /> +91 99900 71792, +91 73033 34931</p>
            <p className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-primary" /> care@astikan.com</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <a key={index} href="#" aria-label="Social profile" className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white hover:bg-primary">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        {columns.map(([title, links]) => (
          <div key={title as string} className="min-w-0">
            <h3 className="mb-5 font-bold">{title as string}</h3>
            <ul className="space-y-3 text-slate-300">
              {(links as string[]).map((link) => <li key={link}><a href="#" className="transition hover:text-white">{link}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">
        © 2026 Astikan Healthcare. All rights reserved.
      </div>
    </footer>
  );
}
