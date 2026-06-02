import {
  Activity,
  Baby,
  Building2,
  Heart,
  HeartPulse,
  Pill,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Users,
  Video,
  Wallet
} from "lucide-react";

export const coreServices = [
  { title: "Health Checkups", description: "Regular preventive checkups to keep your health on track.", icon: Heart, color: "bg-rose-500" },
  { title: "Lab Tests", description: "Discounted lab tests at partnered diagnostic centers.", icon: Syringe, color: "bg-violet-500" },
  { title: "Medicine Delivery", description: "Get prescribed medicines delivered to your doorstep.", icon: Pill, color: "bg-blue-600" },
  { title: "Medical Finance", description: "Easy financing options to support your healthcare expenses.", icon: Wallet, color: "bg-emerald-600" },
  { title: "Insurance Benefits", description: "Reduce your health insurance premium with Astikan membership.", icon: ShieldCheck, color: "bg-orange-500" },
  { title: "Telemedicine", description: "Consult doctors online anytime, anywhere with secure video calls.", icon: Video, color: "bg-fuchsia-600" }
];

export const consultCards = [
  { title: "24/7 Online Doctor Consultations", description: "Connect with a certified physician any hour of the day, any day of the week.", icon: Stethoscope, color: "text-blue-600" },
  { title: "Top Specialists Across India", description: "Choose from vetted cardiologists, pediatricians, dermatologists and more.", icon: Sparkles, color: "text-emerald-600" },
  { title: "Secure, Private Video Calls", description: "Encrypted video sessions that are simple to join with no downloads required.", icon: Video, color: "text-rose-500" }
];

export const emergencyTreatments = [
  { title: "Heart & Vascular Care", description: "Advanced heart treatments, angioplasty, and bypass with expert care.", icon: HeartPulse, points: ["Experienced Cardiologists", "Cutting-edge Facilities", "Transparent Costs"] },
  { title: "Women's Health", description: "Dedicated gynecology, maternity, and reproductive health services.", icon: Baby, points: ["Specialized Gynecologists", "Modern Delivery Units", "Preventive Screenings"] },
  { title: "Neurology", description: "Expert care for stroke, epilepsy, migraines, and brain disorders.", icon: Activity, points: ["Leading Neurologists", "Advanced Diagnostics", "Holistic Treatment"] },
  { title: "Orthopedics", description: "Joint replacement, sports injury care, and bone health management.", icon: Users, points: ["Renowned Surgeons", "Modern Rehab Centers", "Pain Management"] },
  { title: "Emergency & ICU", description: "24/7 critical care, trauma management, and advanced ICUs.", icon: ShieldCheck, points: ["Rapid Response Teams", "State-of-the-Art ICUs", "Life-saving Equipment"] },
  { title: "Diagnostics & Pharmacy", description: "Accurate lab tests and affordable medicines under one roof.", icon: Pill, points: ["NABL Accredited Labs", "24/7 Pharmacy Access", "Home Delivery Options"] }
];

export const securityCards = [
  { title: "Secure Platform", description: "Bank-level security for your health data.", icon: ShieldCheck },
  { title: "Family Coverage", description: "Protects your entire family up to 65 years.", icon: Users },
  { title: "Trusted Network", description: "100+ partnered hospitals across India.", icon: Building2 }
];

export const quickActions = ["Schedule Health Checkup", "Talk to Health Counselor", "Download Brochure"];
