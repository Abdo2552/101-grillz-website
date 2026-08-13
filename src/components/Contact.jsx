import { restaurant } from '../data/restaurantData.js'

const CONTACT_ITEMS = [
  {
    label: 'Call',
    value: restaurant.phone,
    href: `tel:${restaurant.phone}`,
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    ),
  },
  {
    label: 'WhatsApp',
    value: restaurant.whatsapp,
    href: `https://wa.me/20${restaurant.whatsapp.replace(/^0/, '')}`,
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    ),
  },
  {
    label: 'Instagram',
    value: '@101_grillz',
    href: restaurant.social.instagram,
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
  },
  {
    label: 'Facebook',
    value: '101 Grillz',
    href: restaurant.social.facebook,
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-28">
      <p className="font-mono font-semibold text-ember tracking-[0.3em] uppercase text-xs mb-3">Get in touch</p>
      <h2 className="font-display text-4xl md:text-5xl text-bone mb-10 flame-rule">Contact</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CONTACT_ITEMS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group flex flex-col items-start gap-3 rounded-2xl border border-white/5 bg-char-light p-5 hover:border-flame/50 transition-colors"
          >
            <span className="flex items-center justify-center w-11 h-11 rounded-full bg-ember/15 text-ember group-hover:bg-ember group-hover:text-bone transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {c.icon}
              </svg>
            </span>
            <div>
              <p className="text-smoke text-xs uppercase tracking-widest font-mono">{c.label}</p>
              <p className="text-bone font-bold">{c.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
