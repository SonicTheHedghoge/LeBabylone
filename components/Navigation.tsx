import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, UtensilsCrossed } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Story', href: '#about' },
    { name: 'Cuisine', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Find Us', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 font-ui ${scrolled ? 'bg-atik-cream/90 backdrop-blur-md shadow-lg py-4 border-b border-atik-gold/20' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`flex items-center gap-2 group ${scrolled ? 'text-atik-ocean' : 'text-atik-cream'}`}>
          <div className={`p-2 rounded-full border-2 transition-colors ${scrolled ? 'border-atik-ocean group-hover:bg-atik-ocean group-hover:text-white' : 'border-atik-cream group-hover:bg-atik-cream group-hover:text-atik-ocean'}`}>
             <UtensilsCrossed size={20} />
          </div>
          <span className="text-2xl font-serif font-bold tracking-widest uppercase">
            Al Atik
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-bold uppercase tracking-[0.2em] hover:text-atik-gold transition-colors duration-300 ${scrolled ? 'text-atik-ocean' : 'text-atik-cream'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="tel:+21699113370" className={`px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${scrolled ? 'border-atik-ocean text-atik-ocean hover:bg-atik-ocean hover:text-white' : 'border-atik-cream text-atik-cream hover:bg-atik-cream hover:text-atik-ocean'}`}>
            Book Table
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? 'text-atik-ocean' : 'text-atik-cream'} /> : <Menu className={scrolled ? 'text-atik-ocean' : 'text-atik-cream'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-atik-cream border-t border-gray-200 py-8 flex flex-col items-center space-y-6 shadow-2xl animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-atik-ocean text-lg font-serif font-bold tracking-widest uppercase hover:text-atik-terracotta"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;