import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Info Side */}
          <div className="lg:w-1/3 p-12 bg-tunisian-blue text-white relative overflow-hidden">
             {/* Decor */}
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
             <div className="absolute bottom-10 right-10 w-60 h-60 bg-tunisian-gold/20 rounded-full blur-3xl"></div>

             <h2 className="text-3xl font-serif font-bold mb-8 relative z-10">Visit Us</h2>
             
             <div className="space-y-8 relative z-10">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest opacity-70 mb-2">Location</h3>
                  <p className="text-lg font-light leading-relaxed">
                    Houmt Souk<br/>
                    Djerba Island, Tunisia
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest opacity-70 mb-2">Hours</h3>
                  <p className="text-lg font-light">
                    Midday Service<br/>
                    ~12:00 – 15:00
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest opacity-70 mb-2">Booking</h3>
                  <p className="text-2xl font-bold font-serif mb-2">+216 50 382 335</p>
                  <p className="text-sm opacity-70">Call us to reserve your table on the terrace.</p>
                </div>
             </div>
          </div>

          {/* Map Side */}
          <div className="lg:w-2/3 relative h-96 lg:h-auto bg-gray-200">
            {/* Since we don't have a Google Maps API Key for the embed, we use a static placeholder with a link */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" 
              alt="Map Placeholder" 
              className="w-full h-full object-cover filter grayscale opacity-60 hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=33.8795232,10.8646445" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white text-tunisian-blue px-8 py-4 rounded-full shadow-lg font-bold flex items-center gap-3 hover:scale-110 transition-transform duration-300"
              >
                <MapPin size={24} className="text-tunisian-red" />
                Get Directions
              </a>
            </div>
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded text-xs text-gray-600 shadow-sm">
              Houmt Souk, Djerba
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;