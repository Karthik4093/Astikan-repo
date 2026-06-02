import { Heart } from "lucide-react";

export function Newsletter() {
  return (
    <section className="bg-black py-16">
      <div className="container-page">
        <div className="mx-auto max-w-4xl rounded-lg bg-gradient-to-r from-primary to-rose-500 p-6 text-center text-white sm:p-8 lg:p-10" data-gsap="zoom-in">
          <h2 className="flex items-center justify-center gap-3 text-2xl font-extrabold"><Heart className="h-6 w-6" /> Stay Healthy, Stay Informed</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">Subscribe to our newsletter for health tips, wellness insights, and exclusive offers on our healthcare services.</p>
          <form className="mx-auto mt-7 flex w-full max-w-xl flex-col gap-2 rounded-md bg-white p-2 sm:flex-row sm:gap-3">
            <input className="min-h-12 w-full min-w-0 flex-1 px-4 text-sm text-ink outline-none" type="email" placeholder="Enter your email" aria-label="Email address" />
            <button type="button" className="w-full rounded-md px-5 py-3 text-sm font-bold text-primary sm:w-auto">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
