import React, { useState, createContext, useContext, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import FactorySection from './components/FactorySection';
import ContactView from './components/ContactView';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

// ─── Theme Context ────────────────────────────────────────────────────────────
interface ThemeContextType {
  dark: boolean;
  toggleDark: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  dark: false,
  toggleDark: () => {},
});

export const useTheme = () => useContext(ThemeContext);
// ─────────────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [targetProductId, setTargetProductId] = useState<string | null>(null);
  const [dark, setDark] = useState<boolean>(() => {
    // Persist preference in localStorage
    return localStorage.getItem('prisma-theme') === 'dark';
  });

  // Apply / remove the "dark" class on <html> whenever `dark` changes
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('prisma-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('prisma-theme', 'light');
    }
  }, [dark]);

  const toggleDark = () => setDark((prev) => !prev);

  const handleNavigateToProduct = (productId: string) => {
    setTargetProductId(productId);
    setActiveSection('products');
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col justify-between bg-[#fcfcfc] dark:bg-[#111113] text-gray-900 dark:text-gray-100 selection:bg-green-100 selection:text-green-800 transition-colors duration-300">
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

          <main className="flex-grow">
            {activeSection === 'home' && (
              <div className="animate-fade-in">
                <Hero onNavigate={setActiveSection} onNavigateToProduct={handleNavigateToProduct} />
                <FactorySection />
                <ContactView />
              </div>
            )}

            {activeSection === 'products' && (
              <div className="pt-[113px] animate-fade-in">
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
      </LanguageProvider>
    </ThemeContext.Provider>
  );
}
