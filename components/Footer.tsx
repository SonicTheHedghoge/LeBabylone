import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-serif font-bold text-tunisian-gold">Le Babylone</h3>
            <p className="text-gray-400 leading-relaxed">
              Authentic Tunisian cuisine in the heart of Houmt Souk. Experience the tradition, the flavor, and the hospitality of Djerba.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-tunisian-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-tunisian-blue transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold uppercase tracking-widest text-gray-200">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-tunisian-gold shrink-0 mt-1" size={18} />
                <span>Houmt Souk, Djerba, Tunisia <br/>(Lat: 33.8795, Long: 10.8646)</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-tunisian-gold shrink-0" size={18} />
                <a href="tel:+21650382335" className="hover:text-white transition-colors">+216 50 382 335</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Clock className="text-tunisian-gold shrink-0" size={18} />
                <span>Daily ~12:00 – 15:00</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
             <h4 className="text-lg font-bold uppercase tracking-widest text-gray-200">Links</h4>
             <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-tunisian-gold transition-colors">About Us</a></li>
                <li><a href="#menu" className="hover:text-tunisian-gold transition-colors">Our Menu</a></li>
                <li><a href="#gallery" className="hover:text-tunisian-gold transition-colors">Gallery</a></li>
                <li><a href="https://lebabylone-djerba.com/" target="_blank" rel="noreferrer" className="hover:text-tunisian-gold transition-colors">Official Website</a></li>
             </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Restaurant Le Babylone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;