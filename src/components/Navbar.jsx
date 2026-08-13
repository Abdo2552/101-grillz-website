import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { restaurant } from '../data/restaurantData.js'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#offers', label: 'Offers' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#location', label: 'Location' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-char/95 backdrop-blur border-b border-white/5' : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 h-16 md:h-20">
        <a href="#home" aria-label="101 Grillz home">
          <Logo size="sm" />
        </a>

        <ul className="hidden lg:flex items-center gap-7 font-body font-semibold text-sm text-bone/90">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-flame transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${restaurant.phone}`}
            className="hidden md:inline-flex items-center rounded-full bg-ember hover:bg-ember-dark transition-colors text-bone font-body font-bold text-sm px-5 py-2.5"
          >
            Order Now
          </a>
          <button
            className="lg:hidden text-bone p-2 -mr-2"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-char border-t border-white/5 px-4 pb-6 pt-2 animate-riseIn">
          <ul className="flex flex-col gap-1 font-body font-semibold text-bone/90">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 border-b border-white/5 hover:text-flame transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${restaurant.phone}`}
            className="mt-4 flex items-center justify-center rounded-full bg-ember text-bone font-bold py-3"
          >
            Order Now — {restaurant.phone}
          </a>
        </div>
      )}
    </header>
  )
}
