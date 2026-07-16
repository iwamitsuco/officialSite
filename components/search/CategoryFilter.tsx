type CategoryFilterProps = {
  categories: string[];
  value: string;
  onChange: (value: string) => void;
};

export function CategoryFilter({ categories, value, onChange }: CategoryFilterProps) {
  return (
    <div className="flex max-w-full flex-wrap gap-2" aria-label="カテゴリ">
      <button
        className={`min-h-11 max-w-full rounded-full px-4 text-sm font-semibold ${value === "" ? "bg-apple-text text-white" : "bg-white text-apple-text ring-1 ring-apple-border"}`}
        type="button"
        onClick={() => onChange("")}
      >
        すべて
      </button>
      {categories.map((category) => (
        <button
          className={`min-h-11 max-w-full rounded-full px-4 text-sm font-semibold ${value === category ? "bg-apple-text text-white" : "bg-white text-apple-text ring-1 ring-apple-border"}`}
          key={category}
          type="button"
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
