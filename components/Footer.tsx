import React from 'react';
import { Facebook, Instagram, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-atik-ocean text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          {/* Brand */}
          <div className="max-w-md">
            <h3 className="text-4xl font-serif font-bold text-atik-gold mb-6">Al Atik</h3>
            <p className="text-gray-400 font-light leading-relaxed mb-8 text-lg">
              Authentic flavors of Tunisia served with love in the heart of Djerba. A place where tradition meets taste.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 border border-gray-600 flex items-center justify-center hover:bg-atik-gold hover:border-atik-gold hover:text-white transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 border border-gray-600 flex items-center justify-center hover:bg-atik-gold hover:border-atik-gold hover:text-white transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="mailto:elatikrestaurant@yahoo.com" className="w-12 h-12 border border-gray-600 flex items-center justify-center hover:bg-atik-gold hover:border-atik-gold hover:text-white transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-16 font-ui">
             <div>
               <h4 className="text-xs font-bold uppercase tracking-widest text-atik-stone mb-6">Explore</h4>
               <ul className="space-y-4 text-sm tracking-wide">
                  <li><a href="#about" className="hover:text-atik-gold transition-colors">Our Story</a></li>
                  <li><a href="#menu" className="hover:text-atik-gold transition-colors">The Menu</a></li>
                  <li><a href="#gallery" className="hover:text-atik-gold transition-colors">Gallery</a></li>
               </ul>
             </div>
             <div>
               <h4 className="text-xs font-bold uppercase tracking-widest text-atik-stone mb-6">Visit</h4>
               <ul className="space-y-4 text-sm tracking-wide">
                  <li><a href="#contact" className="hover:text-atik-gold transition-colors">Location</a></li>
                  <li><a href="#contact" className="hover:text-atik-gold transition-colors">Reservations</a></li>
                  <li><a href="mailto:elatikrestaurant@yahoo.com" className="hover:text-atik-gold transition-colors">Contact</a></li>
               </ul>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center font-ui text-xs text-gray-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Al Atik Restaurant.</p>
          <button onClick={scrollToTop} className="flex items-center gap-2 hover:text-white transition-colors mt-4 md:mt-0">
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;