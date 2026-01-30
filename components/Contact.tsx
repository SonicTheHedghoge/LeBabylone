import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-0 relative">
      <div className="flex flex-col lg:flex-row h-auto lg:h-[600px]">
        
        {/* Map Side (Left) */}
        <div className="w-full lg:w-1/2 bg-gray-200 relative min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?q=80&w=2670&auto=format&fit=crop" 
            alt="Djerba Streets" 
            className="w-full h-full object-cover grayscale opacity-80"
          />
          <div className="absolute inset-0 bg-atik-ocean/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
             <a 
                href="https://www.google.com/maps/search/?api=1&query=Al+Atik+Restaurant+Djerba" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white/90 backdrop-blur text-atik-ocean px-8 py-4 shadow-2xl font-ui font-bold flex items-center gap-3 hover:scale-105 transition-transform duration-300 uppercase tracking-widest text-sm"
              >
                <MapPin size={18} className="text-atik-terracotta" />
                Open in Maps
              </a>
          </div>
        </div>

        {/* Info Side (Right) */}
        <div className="w-full lg:w-1/2 bg-atik-cream p-12 lg:p-24 flex flex-col justify-center">
           <span className="text-atik-terracotta font-ui font-bold uppercase tracking-widest text-xs mb-4">Reservations</span>
           <h2 className="text-5xl font-serif text-atik-ocean font-bold mb-10">Join Our Table</h2>
           
           <div className="space-y-8 font-serif">
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-white shadow-md text-atik-gold group-hover:bg-atik-gold group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                   <h3 className="font-bold text-atik-ocean text-xl mb-1">Address</h3>
                   <p className="text-atik-stone text-lg">Houmt Souk, Djerba Island<br/>Medenine, Tunisia (VVG5+CRW)</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-white shadow-md text-atik-gold group-hover:bg-atik-gold group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                   <h3 className="font-bold text-atik-ocean text-xl mb-1">Phone</h3>
                   <a href="tel:+21699113370" className="text-atik-stone text-lg hover:text-atik-terracotta transition-colors">+216 99 113 370</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-white shadow-md text-atik-gold group-hover:bg-atik-gold group-hover:text-white transition-colors">
                  <Clock size={24} />
                </div>
                <div>
                   <h3 className="font-bold text-atik-ocean text-xl mb-1">Hours</h3>
                   <p className="text-atik-stone text-lg">Daily: 12:00 PM – 10:00 PM</p>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;