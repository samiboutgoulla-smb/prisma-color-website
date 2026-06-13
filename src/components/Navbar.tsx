import React, { useState } from 'react';
import { Menu, X, Landmark, Compass, Phone, Palette, Sun, Moon, Globe, Check } from 'lucide-react';
import logoLight from '../assets/images/logo.png';
import logoDark from '../assets/images/logo-dark.png';
import { useTheme } from '../App';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGES } from '../i18n/translations';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { dark, toggleDark } = useTheme();
  const { lang, setLang, t } = useLanguage();

  const menuItems = [
    { id: 'home', label: t('nav_home'), icon: Compass },
    { id: 'products', label: t('nav_products'), icon: Palette },
    { id: 'factory', label: t('nav_factory'), icon: Landmark },
    { id: 'contact', label: t('nav_contact'), icon: Phone },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  const currentLangData = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  const handleLangSelect = (code: typeof lang) => {
    setLang(code);
    setLangMenuOpen(false);
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

        {/* Language selector */}
        <li className="relative">
          <button
            onClick={() => setLangMenuOpen((prev) => !prev)}
            aria-label={t('nav_language')}
            className="flex items-center gap-1.5 h-9 px-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 ml-2 text-xs font-bold uppercase tracking-wider"
          >
            <Globe className="w-4 h-4" />
            <span>{currentLangData.flag} {lang.toUpperCase()}</span>
          </button>

          {langMenuOpen && (
            <>
              {/* Backdrop to close on click outside */}
              <div className="fixed inset-0 z-40" onClick={() => setLangMenuOpen(false)} />
              <ul className="absolute right-0 mt-2 w-44 bg-white dark:bg-[#1a1a1f] border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl overflow-hidden z-50 animate-fade-in">
                {LANGUAGES.map((l) => (
                  <li key={l.code}>
                    <button
                      onClick={() => handleLangSelect(l.code)}
                      className={`w-full flex items-center justify-between gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${
                        lang === l.code
                          ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </span>
                      {lang === l.code && <Check className="w-3.5 h-3.5" />}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </li>

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

          {/* Mobile language selector */}
          <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
            <div className="px-4 pt-3 pb-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 flex items-center gap-2">
              <Globe className="w-3.5 h-3.5" />
              {t('nav_language')}
            </div>
            <div className="flex flex-col gap-1">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => handleLangSelect(l.code)}
                  className={`flex items-center justify-between gap-2 px-4 py-3 text-sm font-semibold uppercase tracking-wider rounded-lg transition-colors text-left ${
                    lang === l.code
                      ? 'bg-[#1c1d1f] dark:bg-white text-white dark:text-gray-900'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-green-600 dark:hover:text-green-400'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </span>
                  {lang === l.code && <Check className="w-4 h-4" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
