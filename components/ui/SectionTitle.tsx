type SectionTitleProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({ label, title, description, align = "left" }: SectionTitleProps) {
  return (
    <div className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : ""}`}>
      {label ? <p className="eyebrow">{label}</p> : null}
      <h2 className="mt-3 text-3xl font-semibold leading-[1.22] tracking-normal text-apple-text [overflow-wrap:anywhere] md:text-[40px]">
        {title}
      </h2>
      {description ? <p className="lead mt-5">{description}</p> : null}
    </div>
  );
}
