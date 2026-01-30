import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-tunisian-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Images Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=1000&auto=format&fit=crop" 
              alt="Restaurant Interior" 
              className="w-full h-80 object-cover rounded-sm transform translate-y-8 shadow-xl"
            />
            <img 
              src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=1000&auto=format&fit=crop" 
              alt="Tunisian Dish" 
              className="w-full h-80 object-cover rounded-sm shadow-xl"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-tunisian-gold"></div>
              <span className="text-tunisian-blue font-bold uppercase tracking-widest text-sm">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 font-bold mb-8">
              A Hidden Gem in <br/><span className="text-tunisian-blue">Houmt Souk</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Nestled in the heart of Djerba, <strong>Le Babylone</strong> is more than just a restaurant; it is a culinary sanctuary. 
              Rated 4.7/5 stars by our guests, we pride ourselves on delivering an authentic Tunisian dining experience.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Whether you are craving the catch of the day grilled to perfection or a comforting bowl of Royal Couscous, 
              our kitchen celebrates the rich heritage of North African cuisine. Enjoy our sun-drenched terrace or our 
              cool, clean indoor dining area.
            </p>
            
            <div className="grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
              <div>
                <span className="block text-3xl font-serif font-bold text-tunisian-gold">4.7</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Rating</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-tunisian-gold">20+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Years</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-tunisian-gold">100%</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Halal</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;