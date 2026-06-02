import { Heart } from "lucide-react";

export function Newsletter() {
  return (
    <section className="bg-black py-16">
      <div className="container-page">
        <div className="mx-auto max-w-4xl rounded-lg bg-gradient-to-r from-primary to-rose-500 p-8 text-center text-white" data-aos="zoom-in">
          <h2 className="flex items-center justify-center gap-3 text-2xl font-extrabold"><Heart className="h-6 w-6" /> Stay Healthy, Stay Informed</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">Subscribe to our newsletter for health tips, wellness insights, and exclusive offers on our healthcare services.</p>
          <form className="mx-auto mt-7 flex max-w-xl flex-col gap-3 rounded-md bg-white p-2 sm:flex-row">
            <input className="min-h-12 flex-1 px-4 text-sm text-ink outline-none" type="email" placeholder="Enter your email" aria-label="Email address" />
            <button type="button" className="rounded-md px-5 py-3 text-sm font-bold text-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
