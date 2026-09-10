export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left";
  const titleColor = tone === "dark" ? "text-navy-950" : "text-white";
  const descColor = tone === "dark" ? "text-muted-foreground" : "text-navy-200";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <span className="inline-flex w-fit items-center rounded-full bg-gold-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-500">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heading text-3xl font-bold tracking-tight sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed sm:text-lg ${descColor}`}>{description}</p>
      )}
    </div>
  );
}
