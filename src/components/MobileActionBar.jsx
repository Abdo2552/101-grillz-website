import { restaurant } from '../data/restaurantData.js'

const ITEMS = [
  {
    label: 'Home',
    href: '#home',
    icon: <path d="M3 11.5 12 4l9 7.5M5 10v10h5v-6h4v6h5V10" />,
  },
  {
    label: 'Menu',
    href: '#menu',
    icon: <path d="M4 6h16M4 12h16M4 18h16" />,
  },
  {
    label: 'Order',
    href: `tel:${restaurant.phone}`,
    icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />,
    primary: true,
  },
  {
    label: 'Location',
    href: '#location',
    icon: (
      <>
        <path d="M12 22s7-7.58 7-13A7 7 0 0 0 5 9c0 5.42 7 13 7 13Z" />
        <circle cx="12" cy="9" r="2.5" />
      </>
    ),
  },
]

export default function MobileActionBar() {
  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-char/95 backdrop-blur border-t border-white/10 pb-[env(safe-area-inset-bottom)]"
      aria-label="Quick navigation"
    >
      <div className="flex items-stretch justify-around px-2">
        {ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center justify-center gap-1 py-2.5 flex-1 text-[11px] font-bold ${
              item.primary ? 'text-ember' : 'text-bone/70 hover:text-flame'
            }`}
          >
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {item.icon}
            </svg>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
