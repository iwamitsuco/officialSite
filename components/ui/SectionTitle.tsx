type SectionTitleProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  headingLevel?: "h1" | "h2";
};

export function SectionTitle({ label, title, description, align = "left", headingLevel = "h2" }: SectionTitleProps) {
  const Heading = headingLevel;

  return (
    <div className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : ""}`}>
      {label ? <p className="eyebrow">{label}</p> : null}
      <Heading className="mt-3 text-3xl font-semibold leading-[1.22] tracking-normal text-apple-text [overflow-wrap:anywhere] md:text-[40px]">
        {title}
      </Heading>
      {description ? <p className="lead mt-5">{description}</p> : null}
    </div>
  );
}
