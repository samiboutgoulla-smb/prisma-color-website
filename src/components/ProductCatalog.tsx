import React, { useState } from 'react';
import { PRODUCTS_DB, Product } from '../types';
import { Shield, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import ProductDetailsView from './ProductDetailsView';
import { ProductImage } from './ProductImage';

interface ProductCatalogProps {
  onNavigateToContact?: () => void;
  initialProductId?: string | null;      // <-- AJOUTE CETTE LIGNE
  onClearInitialProduct?: () => void;    // <-- AJOUTE CETTE LIGNE
}

export default function ProductCatalog({ onNavigateToContact }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'interior' | 'exterior'>('all');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', label: 'Tous les produits' },
    { id: 'interior', label: 'Intérieur' },
    { id: 'exterior', label: 'Extérieur' }
  ];

  const handleCategoryChange = (catId: 'all' | 'interior' | 'exterior') => {
    setActiveCategory(catId);
    setActiveSubCategory('all');
  };

  const filteredProducts = PRODUCTS_DB.filter(p => {
    // Phase 1: main category filter
    let matchesCategory = true;
    if (activeCategory === 'interior') {
      matchesCategory = p.category === 'interior';
    } else if (activeCategory === 'exterior') {
      matchesCategory = p.category === 'exterior';
    }

    // Phase 2: subcategory filter
    let matchesSubCategory = true;
    if (activeSubCategory !== 'all') {
      matchesSubCategory = p.subCategory === activeSubCategory;
    }

    return matchesCategory && matchesSubCategory;
  });

  // Get active subcategories list
  const subCategories = activeCategory === 'all'
    ? ['all', 'DÉCO', 'IMPRESSION', 'ENDUIT', 'ACRYLIQUE', 'VERNIS', 'HYGIÈNE', 'SOLUTIONS']
    : activeCategory === 'interior'
      ? ['all', 'DÉCO', 'IMPRESSION', 'ENDUIT', 'VERNIS', 'HYGIÈNE', 'ACRYLIQUE', 'SOLUTIONS']
      : ['all', 'DÉCO', 'IMPRESSION', 'ENDUIT', 'ACRYLIQUE', 'VERNIS', 'SOLUTIONS'];

  const getSubCategoryCount = (sub: string) => {
    return PRODUCTS_DB.filter(p => {
      let matchesCategory = true;
      if (activeCategory === 'interior') matchesCategory = p.category === 'interior';
      else if (activeCategory === 'exterior') matchesCategory = p.category === 'exterior';
      
      let matchesSub = sub === 'all' || p.subCategory === sub;
      return matchesCategory && matchesSub;
    }).length;
  };

  // If a product is selected, display its dedicated rich technical sheet page instead of a modal!
  if (selectedProduct) {
    return (
      <section className="py-20 bg-white" id="product-details-container-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 animate-fade-in">
          <ProductDetailsView 
            product={selectedProduct} 
            onBack={() => setSelectedProduct(null)} 
            onNavigateToContact={onNavigateToContact}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#fafafa]" id="products-catalog-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 mb-3">Gamme Premium</div>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight">
            Peintures de haute performance. <br />Des formulations d'excellence.
          </h2>
          <p className="text-gray-550 font-sans text-sm md:text-base font-light mt-4">
            Découvrez nos revêtements acryliques de haute qualité pour résister parfaitement aux contraintes du climat au Maroc. Des caractéristiques techniques d'excellence.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-6" id="catalog-tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id as any)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#1c1d1f] text-white shadow-md font-bold'
                  : 'bg-white border border-gray-100 text-gray-600 hover:bg-gray-100 hover:text-gray-950 font-semibold'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Subcategories Selector */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-12 max-w-4xl mx-auto" id="subcategory-filters">
          {subCategories.map(sub => {
            const count = getSubCategoryCount(sub);
            if (count === 0 && sub !== 'all') return null; // hide empty subcategories for cleanliness
            
            const label = sub === 'all' ? 'Toutes les catégories' : sub;
            return (
              <button
                key={sub}
                onClick={() => setActiveSubCategory(sub)}
                className={`px-3.5 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeSubCategory === sub
                    ? 'bg-green-600 text-white shadow-xs'
                    : 'bg-white border border-gray-100 text-gray-500 hover:bg-gray-50 hover:text-gray-950 shadow-[0_1px_2px_rgba(0,0,0,0.02)]'
                }`}
              >
                <span>{label}</span>
                <span className={`text-[9px] px-1.5 py-0.2 rounded-full ${
                  activeSubCategory === sub
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="product-cards-grid">
          {filteredProducts.map((p, index) => (
            <div
              key={p.id}
              onClick={() => setSelectedProduct(p)}
              className="group bg-white rounded-xl border border-gray-100 hover:border-gray-205/90 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all p-5 cursor-pointer flex flex-col justify-between relative"
            >
              {/* Card Header details */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Category icon picker */}
                  <div className="w-9 h-9 rounded-lg bg-green-50 text-green-700 flex items-center justify-center">
                    {p.category === 'interior' && <Layers className="w-4.5 h-4.5" />}
                    {p.category === 'exterior' && <Shield className="w-4.5 h-4.5" />}
                    {p.category === 'decor' && <Sparkles className="w-4.5 h-4.5" />}
                    {p.category === 'special' && <Layers className="w-4.5 h-4.5" />}
                  </div>
                  
                  {/* Floating Action Arrow */}
                  <span className="w-7 h-7 rounded-full border border-gray-200 group-hover:border-green-650 text-gray-400 group-hover:text-green-650 flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Paint Bucket Image Container */}
                <div className="relative aspect-[4/3] bg-gradient-to-b from-gray-50/70 to-gray-100/45 border border-gray-50/70 rounded-lg overflow-hidden mb-5 flex items-center justify-center p-4">
                  <ProductImage 
                    product={p} 
                    className="max-h-[110px] md:max-h-[130px] w-auto drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                    style={index === 0 || index === 2 ? { width: '198px' } : undefined}
                  />
                  <div className="absolute top-2.5 right-2.5 bg-white/80 backdrop-blur-3xl px-2 py-0.5 rounded text-[8px] font-bold text-gray-500 uppercase tracking-widest border border-gray-100 font-mono">
                    {p.tag}
                  </div>
                </div>

                <div className="text-gray-400 text-[9px] uppercase font-bold tracking-widest">{p.line}</div>
                <h3 className="font-serif text-base text-gray-900 mt-1 mb-2.5 group-hover:text-green-700 transition-colors font-semibold">{p.name}</h3>
                <p className="text-gray-500 font-sans text-xs leading-relaxed mb-4 font-light">{p.description}</p>
              </div>

              {/* Card Footer tags and Direct Technical Sheet Button */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-3">
                <span className="text-[10px] text-gray-400 font-semibold font-sans">{p.coverage}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(p);
                  }}
                  className="flex items-center gap-1.5 bg-green-50 hover:bg-green-600 text-green-750 hover:text-white text-[9.5px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg cursor-pointer transition-all border border-green-100 hover:border-green-600"
                  id={`btn-fiche-${p.id}`}
                >
                  Fiche Technique
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}