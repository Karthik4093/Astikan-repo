type SectionHeaderProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  light?: boolean;
};

export function SectionHeader({ eyebrow, title, description, light = false }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10" data-aos="fade-up">
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full bg-fuchsia-50 px-4 py-1 text-xs font-semibold text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-3xl font-extrabold leading-tight tracking-normal sm:text-4xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {description ? <p className={`mt-4 text-sm leading-7 sm:text-base sm:leading-8 ${light ? "text-slate-300" : "text-muted"}`}>{description}</p> : null}
    </div>
  );
}
