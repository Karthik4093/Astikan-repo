export function CTASection() {
  return (
    <section className="bg-surface pb-16">
      <div className="container-page">
        <div className="rounded-lg bg-white px-6 py-12 text-center shadow-card" data-aos="zoom-in">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Ready to Experience Complete Healthcare?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">Join thousands of members who have transformed their healthcare experience with Astikan.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#membership-plans" className="gradient-button">Get Started</a>
            <a href="#contact" className="outline-button">About Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
