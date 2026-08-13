import { menuItems, images, restaurant } from '../data/restaurantData.js'

export default function FeaturedItems() {
  const featured = menuItems.filter((i) => i.featured && i.image)

  return (
    <section className="py-20 md:py-24 bg-char-light border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <p className="font-mono font-semibold text-ember tracking-[0.3em] uppercase text-xs mb-3">Pick of the grill</p>
        <h2 className="font-display text-4xl md:text-5xl text-bone mb-8 flame-rule">Our Favorites</h2>

        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory">
          {featured.map((item) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-[31%] bg-char rounded-2xl overflow-hidden border border-white/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={images[item.image]} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-bone mb-1">{item.name}</h3>
                <p className="text-bone/65 text-sm mb-3 line-clamp-2">{item.description}</p>
                <span className="font-mono font-bold text-flame">
                  From {Math.min(...item.sizes.map((s) => s.price))} {restaurant.currency}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
