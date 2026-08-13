import { galleryImages } from '../data/restaurantData.js'

export default function Gallery() {
  return (
    <section id="gallery" className="max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-28">
      <p className="font-mono font-semibold text-ember tracking-[0.3em] uppercase text-xs mb-3">From the grill</p>
      <h2 className="font-display text-4xl md:text-5xl text-bone mb-10 flame-rule">Gallery</h2>

      <div className="columns-2 md:columns-3 gap-4 [column-fill:balance]">
        {galleryImages.map((img, i) => (
          <div key={i} className="mb-4 break-inside-avoid rounded-2xl overflow-hidden border border-white/5">
            <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </section>
  )
}
