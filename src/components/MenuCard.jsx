import { images, restaurant } from '../data/restaurantData.js'

export default function MenuCard({ item }) {
  const img = item.image ? images[item.image] : null
  const singlePrice = item.sizes.length === 1

  return (
    <article className="group bg-char-light rounded-2xl overflow-hidden border border-white/5 hover:border-flame/40 transition-colors flex flex-col">
      {img && (
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={img}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-char-light via-transparent to-transparent" />
          {item.badge && (
            <span className="absolute top-3 left-3 rounded-full bg-flame text-char text-[11px] font-bold uppercase tracking-wide px-2.5 py-1">
              {item.badge}
            </span>
          )}
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="font-display text-xl text-bone leading-tight">{item.name}</h3>
          {singlePrice && (
            <span className="font-mono font-bold text-flame text-lg whitespace-nowrap">
              {item.sizes[0].price} {restaurant.currency}
            </span>
          )}
        </div>
        {item.nameAr && <p className="text-smoke text-sm mb-2" dir="rtl">{item.nameAr}</p>}
        {item.description && <p className="text-bone/70 text-sm mb-4 flex-1">{item.description}</p>}

        {!singlePrice && (
          <div className="mb-4 flex flex-col gap-1.5">
            {item.sizes.map((s) => (
              <div key={s.label} className="flex items-center justify-between text-sm border-b border-dashed border-white/10 py-1">
                <span className="text-bone/80">{s.label}</span>
                <span className="font-mono font-bold text-flame">
                  {s.price} {restaurant.currency}
                </span>
              </div>
            ))}
          </div>
        )}

        <a
          href={`tel:${restaurant.phone}`}
          className="mt-auto inline-flex items-center justify-center rounded-full border-2 border-ember text-ember hover:bg-ember hover:text-bone transition-colors font-bold text-sm py-2.5"
        >
          Order
        </a>
      </div>
    </article>
  )
}
