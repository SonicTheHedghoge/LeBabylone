import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1549590143-d5855148a9d5?q=80&w=2564&auto=format&fit=crop')", // Tunisian style architecture/food
          backgroundAttachment: 'fixed' 
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="block text-tunisian-sand tracking-[0.2em] uppercase font-bold text-sm md:text-base mb-4 animate-fade-in-up">
          Houmt Souk, Djerba
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Taste of <br/> <span className="text-tunisian-gold italic">Tradition</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Experience the authentic flavors of Tunisia in a serene, welcoming atmosphere. 
          Fresh seafood, aromatic couscous, and the warmth of Djerbian hospitality.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a href="#menu" className="px-8 py-3 bg-white text-gray-900 font-bold uppercase tracking-wider hover:bg-tunisian-sand transition-colors duration-300 w-48">
            View Menu
          </a>
          <a href="#contact" className="px-8 py-3 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-colors duration-300 w-48">
            Find Us
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float text-white/80">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;