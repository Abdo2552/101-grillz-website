import { images, restaurant } from '../data/restaurantData.js'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <img
        src={images.heroBurger}
        alt="Double smashed cheeseburger, layered and dripping with cheese"
        className="absolute inset-0 w-full h-full object-cover object-[50%_30%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-char via-char/70 to-char/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-char/70 via-transparent to-char/40" />
      <div className="absolute inset-0 bg-grain mix-blend-overlay" />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 md:px-6 pb-14 md:pb-20 pt-40">
        <p className="font-mono font-semibold text-flame tracking-[0.3em] uppercase text-xs md:text-sm mb-4 animate-riseIn">
          Shawarma &amp; More · King Mariout
        </p>

        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl text-bone leading-[0.85] mb-5 animate-riseIn [animation-delay:100ms]">
          <span className="text-ember">101</span> GRILLZ
        </h1>

        <p className="max-w-md text-bone/85 text-base md:text-lg mb-8 text-balance animate-riseIn [animation-delay:200ms]">
          {restaurant.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-3 animate-riseIn [animation-delay:300ms]">
          <a
            href={`tel:${restaurant.phone}`}
            className="inline-flex items-center gap-2 rounded-full bg-ember hover:bg-ember-dark transition-colors text-bone font-bold px-6 py-3.5"
          >
            Order Now
          </a>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full border-2 border-bone/30 hover:border-flame hover:text-flame transition-colors text-bone font-bold px-6 py-3.5"
          >
            View Menu
          </a>
          <a
            href={restaurant.social.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-bone/80 hover:text-flame transition-colors font-semibold px-2 py-3.5 text-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s7-7.58 7-13A7 7 0 0 0 5 9c0 5.42 7 13 7 13Z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}
