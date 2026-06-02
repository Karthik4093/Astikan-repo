export function CTASection() {
  return (
    <section className="bg-surface pb-16">
      <div className="container-page">
        <div className="rounded-lg bg-white px-5 py-10 text-center shadow-card sm:px-8 sm:py-12" data-gsap="zoom-in">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Ready to Experience Complete Healthcare?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">Join thousands of members who have transformed their healthcare experience with Astikan.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a href="#membership-plans" className="gradient-button w-full sm:w-auto">Get Started</a>
            <a href="#contact" className="outline-button w-full sm:w-auto">About Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
