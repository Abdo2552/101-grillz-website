import Logo from './Logo.jsx'
import { restaurant } from '../data/restaurantData.js'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pb-24 lg:pb-0">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Logo size="sm" tagline />
          <p className="text-bone/60 text-sm mt-4 max-w-[22ch]">{restaurant.descriptionShort}</p>
        </div>

        <div>
          <h4 className="font-body font-bold text-bone mb-3 text-sm uppercase tracking-widest">Navigate</h4>
          <ul className="space-y-2 text-bone/65 text-sm">
            <li><a href="#home" className="hover:text-flame transition-colors">Home</a></li>
            <li><a href="#menu" className="hover:text-flame transition-colors">Menu</a></li>
            <li><a href="#about" className="hover:text-flame transition-colors">About</a></li>
            <li><a href="#gallery" className="hover:text-flame transition-colors">Gallery</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-body font-bold text-bone mb-3 text-sm uppercase tracking-widest">Contact</h4>
          <ul className="space-y-2 text-bone/65 text-sm">
            <li><a href={`tel:${restaurant.phone}`} className="hover:text-flame transition-colors">{restaurant.phone}</a></li>
            <li>{restaurant.address}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-body font-bold text-bone mb-3 text-sm uppercase tracking-widest">Follow</h4>
          <ul className="space-y-2 text-bone/65 text-sm">
            <li><a href={restaurant.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-flame transition-colors">Instagram</a></li>
            <li><a href={restaurant.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-flame transition-colors">Facebook</a></li>
            <li><a href={restaurant.social.googleMaps} target="_blank" rel="noopener noreferrer" className="hover:text-flame transition-colors">Google Maps</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-bone/40 text-xs">
        © {new Date().getFullYear()} {restaurant.name}. All rights reserved.
      </div>
    </footer>
  )
}
