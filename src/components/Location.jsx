import { restaurant, images } from '../data/restaurantData.js'

export default function Location() {
  return (
    <section id="location" className="bg-char-light border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="font-mono font-semibold text-ember tracking-[0.3em] uppercase text-xs mb-3">Find us</p>
          <h2 className="font-display text-4xl md:text-5xl text-bone mb-6 flame-rule">Location</h2>
          <p className="text-bone/80 text-lg mb-8">{restaurant.address}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={restaurant.social.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ember hover:bg-ember-dark transition-colors text-bone font-bold px-6 py-3.5"
            >
              Get Directions
            </a>
            <a
              href={`tel:${restaurant.phone}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-bone/30 hover:border-flame hover:text-flame transition-colors text-bone font-bold px-6 py-3.5"
            >
              Call to Order
            </a>
          </div>
        </div>
        <a
          href={restaurant.social.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="block aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 relative group"
        >
          <img
            src={images.storefront02}
            alt="101 Grillz storefront sign"
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-char/20 group-hover:bg-char/0 transition-colors" />
        </a>
      </div>
    </section>
  )
}
