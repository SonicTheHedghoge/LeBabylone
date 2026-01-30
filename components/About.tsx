import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-atik-cream relative overflow-hidden">
      {/* Decorative Text */}
      <span className="absolute top-10 left-0 text-[12rem] leading-none text-gray-200 font-serif opacity-30 select-none -z-10 transform -translate-x-20">
        Heritage
      </span>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Images Layout */}
          <div className="w-full lg:w-1/2 relative">
             <div className="absolute -top-4 -left-4 w-full h-full border-2 border-atik-gold/30 z-0"></div>
             <img 
               src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2670&auto=format&fit=crop" 
               alt="Restaurant Ambience" 
               className="relative z-10 w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
             />
             <div className="absolute -bottom-10 -right-10 bg-atik-ocean text-atik-cream p-8 max-w-xs z-20 shadow-xl hidden md:block">
                <p className="font-serif text-2xl italic leading-tight">"A culinary jewel in the heart of Djerba."</p>
             </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-[1px] bg-atik-terracotta"></div>
              <span className="text-atik-terracotta font-ui font-bold uppercase tracking-[0.2em] text-xs">Since 1998</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-serif text-atik-ocean font-bold mb-8 leading-tight">
              The Heart of <br/><span className="text-atik-gold italic">Tunisian</span> Flavor
            </h2>
            
            <p className="text-atik-stone text-xl leading-relaxed mb-6 font-light">
              Located in the vibrant center of <strong>Houmt Souk</strong>, Al Atik Restaurant is a sanctuary for those seeking the true taste of Djerba. We are not just a restaurant; we are a family tradition.
            </p>
            
            <p className="text-atik-stone text-xl leading-relaxed mb-10 font-light">
              From our sizzling <em>Ojja Royale</em> to the delicate spices of our fresh seafood, every dish tells a story of the Mediterranean. Whether you join us for a sunny lunch on the terrace or an intimate dinner, you are family here.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 border-t border-gray-300 pt-10 font-ui">
              <div>
                <span className="block text-4xl font-bold text-atik-ocean mb-1">4.2<span className="text-atik-gold text-2xl">★</span></span>
                <span className="text-xs text-atik-stone uppercase tracking-widest">Guest Rating</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-atik-ocean mb-1">Local</span>
                <span className="text-xs text-atik-stone uppercase tracking-widest">Ingredients</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-atik-ocean mb-1">Family</span>
                <span className="text-xs text-atik-stone uppercase tracking-widest">Atmosphere</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;