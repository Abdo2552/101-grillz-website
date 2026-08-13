import { useState } from 'react'
import { menuCategories, menuItems } from '../data/restaurantData.js'
import CategoryTabs from './CategoryTabs.jsx'
import MenuCard from './MenuCard.jsx'

export default function Menu() {
  const [active, setActive] = useState(menuCategories[0].id)
  const items = menuItems.filter((i) => i.category === active)
  const activeCat = menuCategories.find((c) => c.id === active)

  return (
    <section id="menu" className="max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-28">
      <div className="mb-10">
        <p className="font-mono font-semibold text-ember tracking-[0.3em] uppercase text-xs mb-3">The Menu</p>
        <h2 className="font-display text-4xl md:text-5xl text-bone flame-rule">Real food, real prices</h2>
      </div>

      <CategoryTabs categories={menuCategories} active={active} onSelect={setActive} />

      <div className="flex items-baseline gap-3 mb-6">
        <h3 className="font-display text-2xl text-flame">{activeCat.label}</h3>
        <span className="text-smoke text-sm" dir="rtl">{activeCat.labelAr}</span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
