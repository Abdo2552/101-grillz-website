import { images, restaurant } from '../data/restaurantData.js'

export default function About() {
  return (
    <section id="about" className="bg-char-light border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <p className="font-mono font-semibold text-ember tracking-[0.3em] uppercase text-xs mb-3">About us</p>
          <h2 className="font-display text-4xl md:text-5xl text-bone mb-5 flame-rule">{restaurant.name}</h2>
          <p className="text-bone/80 text-base md:text-lg leading-relaxed mb-6 text-balance">
            {restaurant.descriptionShort}
          </p>
          <div className="flex items-center gap-3 text-sm text-bone/70">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-flame shrink-0">
              <path d="M12 22s7-7.58 7-13A7 7 0 0 0 5 9c0 5.42 7 13 7 13Z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            {restaurant.address}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-square rounded-3xl overflow-hidden border border-white/5">
            <img
              src={images.hawawshiPlate}
              alt="Sliced meat hawawshi, freshly grilled"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
