import React, { useState } from 'react';
import { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Royal Couscous',
    description: 'Steamed semolina served with tender lamb, chicken, merguez, and seasonal vegetables.',
    price: '28 TND',
    image: 'https://images.unsplash.com/photo-1604579278540-db36e39527e2?q=80&w=1000&auto=format&fit=crop',
    category: 'main'
  },
  {
    id: '2',
    name: 'Grilled Daurade (Sea Bream)',
    description: 'Fresh local sea bream grilled over charcoal, served with tastira and fries.',
    price: '30 TND',
    image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?q=80&w=1000&auto=format&fit=crop',
    category: 'main'
  },
  {
    id: '3',
    name: 'Brik à l\'Oeuf',
    description: 'Crispy pastry triangle filled with egg, tuna, parsley, and capers.',
    price: '6 TND',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000&auto=format&fit=crop',
    category: 'starter'
  },
  {
    id: '4',
    name: 'Tunisian Salad',
    description: 'Finely chopped tomatoes, cucumbers, onions, and peppers with olive oil and tuna.',
    price: '8 TND',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000&auto=format&fit=crop',
    category: 'starter'
  },
  {
    id: '5',
    name: 'Mint Tea with Pine Nuts',
    description: 'Traditional hot sweet tea served with pine nuts.',
    price: '4 TND',
    image: 'https://images.unsplash.com/photo-1576092762791-2f9e902b988f?q=80&w=1000&auto=format&fit=crop',
    category: 'drink'
  },
  {
    id: '6',
    name: 'Ojja Merguez',
    description: 'Spicy scrambled eggs with tomato sauce and spicy sausages.',
    price: '18 TND',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1000&auto=format&fit=crop',
    category: 'main'
  }
];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'starter' | 'main' | 'drink'>('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-tunisian-sand/20 rounded-bl-full -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-tunisian-blue font-bold uppercase tracking-widest text-sm mb-2 block">Delicious & Fresh</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Our Specialties</h2>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {['all', 'starter', 'main', 'drink'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-tunisian-blue text-white shadow-lg transform scale-105' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat === 'all' ? 'All Dishes' : cat + 's'}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-md mb-4 h-64">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-lg tracking-wider border-b-2 border-tunisian-gold pb-1">Taste It</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-1 group-hover:text-tunisian-blue transition-colors">{item.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
                <span className="text-lg font-bold text-tunisian-gold whitespace-nowrap">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <p className="text-gray-500 italic text-sm">Menu items and prices are subject to seasonal changes.</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;