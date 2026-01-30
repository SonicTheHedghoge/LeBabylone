import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="antialiased text-gray-800 bg-white">
      <Navigation />
      <Hero />
      <About />
      <Menu />
      
      {/* Gallery Strip */}
      <section id="gallery" className="py-0">
        <div className="grid grid-cols-2 md:grid-cols-4 h-64 md:h-80">
          <div className="relative group overflow-hidden">
            <img src="https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Tunisian Vibes" />
             <div className="absolute inset-0 bg-tunisian-blue/20 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="relative group overflow-hidden">
            <img src="https://images.unsplash.com/photo-1544025162-d76690b67f61?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Food" />
            <div className="absolute inset-0 bg-tunisian-blue/20 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="relative group overflow-hidden">
             <img src="https://images.unsplash.com/photo-1560717845-968823efbee1?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Seafood" />
             <div className="absolute inset-0 bg-tunisian-blue/20 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="relative group overflow-hidden">
             <img src="https://images.unsplash.com/photo-1528629297340-d1d466945dc5?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Architecture" />
             <div className="absolute inset-0 bg-tunisian-blue/20 group-hover:bg-transparent transition-colors"></div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;