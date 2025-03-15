interface SectionHeaderProps {
  title: string
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function SectionHeader({ title, categories, activeCategory, onCategoryChange }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full ${
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
} 