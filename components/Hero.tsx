import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-atik-ocean">
      {/* Background Image with Slow Pan and Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center animate-slow-pan"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2570&auto=format&fit=crop')", // High end restaurant interior/food
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-atik-ocean/60 via-atik-ocean/40 to-atik-ocean/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 flex justify-center">
            <div className="w-[1px] h-20 bg-atik-gold animate-fade-in-up"></div>
        </div>
        
        <span className="block text-atik-gold font-ui tracking-[0.4em] uppercase font-bold text-xs md:text-sm mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Houmt Souk, Djerba
        </span>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-atik-cream font-bold mb-8 leading-none animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Al Atik
        </h1>
        
        <p className="text-gray-300 text-xl md:text-2xl font-light italic max-w-3xl mx-auto mb-12 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.6s' }}>
          Where the Mediterranean breeze meets the warmth of Tunisian heritage. 
          <br className="hidden md:block"/>Authentic flavors, family traditions.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in-up font-ui" style={{ animationDelay: '0.8s' }}>
          <a href="#menu" className="px-10 py-4 bg-atik-terracotta text-white font-bold uppercase tracking-widest text-xs hover:bg-atik-gold transition-colors duration-500 shadow-xl">
            Discover Menu
          </a>
          <a href="#contact" className="px-10 py-4 border border-atik-cream text-atik-cream font-bold uppercase tracking-widest text-xs hover:bg-atik-cream hover:text-atik-ocean transition-colors duration-500">
            Book a Table
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float text-atik-cream/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;