import React, { useState } from 'react';
import { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Ojja Royale',
    description: 'A spicy Tunisian stew simmering with merguez, seafood, and poached eggs.',
    price: '32 TND',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1000&auto=format&fit=crop',
    category: 'main'
  },
  {
    id: '2',
    name: 'Gambas Grillées',
    description: 'Large Mediterranean prawns grilled to perfection with garlic butter and herbs.',
    price: '45 TND',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop',
    category: 'main'
  },
  {
    id: '3',
    name: 'Brik a l\'Oeuf',
    description: 'Crispy malsouka pastry filled with tuna, capers, parsley, and a runny egg.',
    price: '7 TND',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000&auto=format&fit=crop',
    category: 'starter'
  },
  {
    id: '4',
    name: 'Salade de Crevettes',
    description: 'Fresh salad topped with succulent shrimps, avocado, and citrus dressing.',
    price: '22 TND',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=1000&auto=format&fit=crop',
    category: 'starter'
  },
  {
    id: '5',
    name: 'Couscous Djerbien',
    description: 'Traditional steamed semolina with fresh local fish and seasonal vegetables.',
    price: '28 TND',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=1000&auto=format&fit=crop',
    category: 'main'
  },
  {
    id: '6',
    name: 'Filet de Boeuf',
    description: 'Tender beef fillet served with creamy mushroom sauce and homemade fries.',
    price: '42 TND',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1000&auto=format&fit=crop',
    category: 'main'
  },
   {
    id: '7',
    name: 'Thé à la Menthe',
    description: 'Sweet mint tea garnished with crunchy pine nuts.',
    price: '5 TND',
    image: 'https://images.unsplash.com/photo-1576092762791-2f9e902b988f?q=80&w=1000&auto=format&fit=crop',
    category: 'drink'
  }
];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'starter' | 'main' | 'drink'>('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-32 bg-atik-ocean text-atik-cream relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-atik-gold font-ui font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Kitchen</span>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">Culinary Masterpieces</h2>
          <div className="w-24 h-1 bg-atik-terracotta mx-auto"></div>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-8 mb-16 font-ui">
          {['all', 'starter', 'main', 'drink'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${
                activeCategory === cat 
                  ? 'text-atik-gold' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {cat === 'all' ? 'All' : cat + 's'}
              <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-atik-gold transform origin-left transition-transform duration-300 ${activeCategory === cat ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 max-w-6xl mx-auto">
          {filteredItems.map((item) => (
            <div key={item.id} className="group flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-full md:w-48 h-48 overflow-hidden rounded-full border-4 border-atik-terracotta/20 flex-shrink-0 relative">
                 <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
              </div>
              
              <div className="text-center md:text-left flex-1">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-3 border-b border-gray-700 pb-2 border-dashed">
                  <h3 className="text-2xl font-serif font-bold text-atik-cream group-hover:text-atik-gold transition-colors">{item.name}</h3>
                  <span className="text-xl font-bold text-atik-terracotta font-serif">{item.price}</span>
                </div>
                <p className="text-gray-400 text-lg font-light leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-24">
             <a href="https://glovoapp.com/tn/fr" target="_blank" rel="noreferrer" className="inline-block px-10 py-4 border border-atik-gold text-atik-gold font-ui font-bold uppercase tracking-widest text-xs hover:bg-atik-gold hover:text-atik-ocean transition-all">
                Order Delivery
             </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;