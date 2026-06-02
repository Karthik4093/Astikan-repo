import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "aos/dist/aos.css";
import "./globals.scss";
import { AOSProvider } from "@/components/AOSProvider/AOSProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Astikan Health | Complete Digital Healthcare Partner",
  description:
    "Astikan Health brings doctor consultations, lab tests, medicine delivery, hospital care, health memberships, and medical finance into one digital healthcare platform.",
  keywords: ["Astikan", "healthcare", "health pocket", "doctor consultation", "medical finance"],
  openGraph: {
    title: "Astikan Health",
    description: "Your complete digital healthcare partner.",
    type: "website"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
} satisfies Metadata["viewport"];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins bg-surface text-ink antialiased`}>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
