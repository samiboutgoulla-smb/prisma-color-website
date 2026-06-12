import React, { useState } from 'react';
import { Menu, X, Landmark, Compass, Phone, Palette, Sun, Moon } from 'lucide-react';
import logoLight from '../assets/images/logo.png';
import logoDark from '../assets/images/logo-dark.png';
import { useTheme } from '../App';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { dark, toggleDark } = useTheme();

  const menuItems = [
    { id: 'home', label: 'Accueil', icon: Compass },
    { id: 'products', label: 'Produits', icon: Palette },
    { id: 'factory', label: 'Notre Usine', icon: Landmark },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#18181b]/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between px-6 md:px-12 transition-colors duration-300" style={{ height: '113px' }}>
      {/* Brand Logo — bascule selon le thème */}
      <div
        onClick={() => handleNavClick('home')}
        className="flex items-center cursor-pointer group select-none"
        id="nav-logo"
      >
        <img
          src={dark ? logoDark : logoLight}
          alt="PRISMA COLOR"
          className="w-auto object-contain transition-all duration-300 group-hover:scale-102"
          style={{ height: '200px' }}
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center gap-4" id="nav-desktop-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                style={{ fontSize: '17px' }}
              >
                <Icon className="w-3.5 h-3.5" />
                {item.label}
              </button>
            </li>
          );
        })}

        {/* Dark mode toggle */}
        <li>
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 ml-2"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </li>
      </ul>

      {/* Mobile: toggle + menu btn */}
      <div className="lg:hidden flex items-center gap-2">
        <button
          onClick={toggleDark}
          aria-label="Toggle dark mode"
          className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
        >
          {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          id="btn-mobile-menu"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 bg-white dark:bg-[#18181b] border-b border-gray-200 dark:border-gray-800 shadow-xl px-6 py-6 flex flex-col gap-4 lg:hidden animate-fade-in z-40" style={{ top: '113px' }}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-4 px-4 py-3 text-sm font-semibold uppercase tracking-wider rounded-lg transition-colors text-left ${
                  isActive
                    ? 'bg-[#1c1d1f] dark:bg-white text-white dark:text-gray-900'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-green-600 dark:hover:text-green-400'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}