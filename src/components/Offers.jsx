import { combos, restaurant } from '../data/restaurantData.js'

export default function Offers() {
  return (
    <section id="offers" className="max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-28">
      <p className="font-mono font-semibold text-ember tracking-[0.3em] uppercase text-xs mb-3">Combos</p>
      <h2 className="font-display text-4xl md:text-5xl text-bone mb-10 flame-rule">Special Offers</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {combos.map((combo) => (
          <div
            key={combo.id}
            className="ticket-edge relative flex items-center gap-4 bg-char-light border border-white/5 rounded-xl p-5"
          >
            <div className="absolute inset-y-3 left-[92px] sm:left-[100px] border-l-2 border-dashed border-white/10" />
            <div className="shrink-0 w-[76px] sm:w-[84px] flex flex-col items-center justify-center">
              <span className="font-display text-3xl sm:text-4xl text-flame leading-none">{combo.price}</span>
              <span className="font-mono text-[11px] text-smoke uppercase tracking-widest">{restaurant.currency}</span>
            </div>
            <div className="pl-2">
              <p className="font-body font-bold text-bone leading-snug">{combo.name}</p>
              <p className="text-smoke text-xs mt-1" dir="rtl">{combo.nameAr}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
