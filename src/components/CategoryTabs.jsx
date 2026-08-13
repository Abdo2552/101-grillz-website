export default function CategoryTabs({ categories, active, onSelect }) {
  return (
    <div className="sticky top-16 md:top-20 z-30 -mx-4 px-4 md:mx-0 md:px-0 mb-8">
      <div className="flex gap-2 overflow-x-auto no-scrollbar py-3 bg-char/95 backdrop-blur border-b border-white/5">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-body font-bold transition-colors border ${
              active === cat.id
                ? 'bg-ember border-ember text-bone'
                : 'border-white/10 text-bone/70 hover:border-flame/60 hover:text-flame'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  )
}
