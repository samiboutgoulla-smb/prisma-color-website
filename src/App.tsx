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
  const [showTop, setShowTop] = useState(false);
  const [dark, setDark] = useState<boolean>(() => {
    return localStorage.getItem('prisma-theme') === 'dark';
  });

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

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleDark = () => setDark((prev) => !prev);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

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

          {/* Bouton retour en haut */}
          {showTop && (
            <button
              onClick={scrollToTop}
              aria-label="Retour en haut"
              className="fixed bottom-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-[#1e1e23] border border-gray-200 dark:border-gray-700 shadow-md text-gray-500 dark:text-gray-400 hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 animate-fade-in"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 12V4M4 7.5l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
      </LanguageProvider>
    </ThemeContext.Provider>
  );
}