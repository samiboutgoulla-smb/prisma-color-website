import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import FactorySection from './components/FactorySection';
import ContactView from './components/ContactView';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  // Nouvel état pour mémoriser le produit sélectionné depuis l'accueil
  const [targetProductId, setTargetProductId] = useState<string | null>(null);

  const handleNavigateToProduct = (productId: string) => {
    setTargetProductId(productId); // Enregistre l'ID du produit
    setActiveSection('products');  // Change de section vers le catalogue
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#fcfcfc] text-gray-900 selection:bg-green-100 selection:text-green-800">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="flex-grow">
        {activeSection === 'home' && (
          <div className="animate-fade-in">
            {/* On transmet la fonction de redirection au Hero */}
            <Hero onNavigate={setActiveSection} onNavigateToProduct={handleNavigateToProduct} />
            <FactorySection />
            <ContactView />
          </div>
        )}

        {activeSection === 'products' && (
          <div className="pt-[113px] animate-fade-in">
            {/* On transmet l'ID cible et une fonction pour réinitialiser le choix */}
            <ProductCatalog 
              onNavigateToContact={() => setActiveSection('contact')} 
              initialProductId={targetProductId}
              onClearInitialProduct={() => setTargetProductId(null)}
            />
          </div>
        )}

        {activeSection === 'factory' && (
          <div className="pt-[113px] animate-fade-in">
            <FactorySection />
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="pt-[113px] animate-fade-in">
            <ContactView />
          </div>
        )}
      </main>

      <Footer onNavigate={setActiveSection} />
    </div>
  );
}