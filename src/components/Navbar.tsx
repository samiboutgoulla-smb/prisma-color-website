import React, { useState } from 'react';
import { Menu, X, Landmark, Compass, Sliders, MessageSquare, Phone, Palette } from 'lucide-react';
import logoImg from '../assets/images/logo.png';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm flex items-center justify-between px-6 md:px-12" style={{ height: '113px' }}>
      {/* Brand Logo Wrapper */}
      <div 
        onClick={() => handleNavClick('home')}
        className="flex items-center cursor-pointer group select-none"
        id="nav-logo"
      >
        <img 
          src={logoImg} 
          alt="PRISMA COLOR" 
          className="w-auto object-contain transition-transform duration-300 group-hover:scale-102"
          style={{ height: '200px' }}
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center gap-6" id="nav-desktop-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
                }`}
                style={{ fontSize: '17px' }}
              >
                <Icon className="w-3.5 h-3.5" />
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
        id="btn-mobile-menu"
        aria-label="Toggle Menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 bg-white border-b border-gray-200 shadow-xl px-6 py-6 flex flex-col gap-4 lg:hidden animate-fade-in z-40" style={{ top: '113px' }}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-4 px-4 py-3 text-sm font-semibold uppercase tracking-wider rounded-lg transition-colors text-left ${
                  isActive
                    ? 'bg-[#1c1d1f] text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-green-600'
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
