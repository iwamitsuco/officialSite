type TagFilterProps = {
  tags: string[];
  selectedTags: string[];
  onToggle: (tag: string) => void;
};

export function TagFilter({ tags, selectedTags, onToggle }: TagFilterProps) {
  return (
    <div className="flex max-w-full flex-wrap gap-2" aria-label="タグ">
      {tags.map((tag) => {
        const active = selectedTags.includes(tag);
        return (
          <button
            className={`min-h-11 max-w-full rounded-full px-4 text-sm font-semibold ${active ? "bg-apple-blue text-white" : "bg-white text-apple-sub ring-1 ring-apple-border"}`}
            key={tag}
            type="button"
            onClick={() => onToggle(tag)}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
