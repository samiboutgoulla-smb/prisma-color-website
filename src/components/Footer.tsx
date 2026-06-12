import React from 'react';
import logoLight from '../assets/images/logo.png';
import logoDark from '../assets/images/logo-dark.png';
import { useTheme } from '../App';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { dark } = useTheme();

  return (
    <footer className="bg-gray-100 dark:bg-[#0d0d0f] border-t border-gray-200 dark:border-gray-800 py-16 px-6 md:px-12 text-left text-gray-600 dark:text-gray-400 font-sans text-xs transition-colors duration-300" style={{ minHeight: '378.156px' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

        {/* Brand signature */}
        <div className="lg:col-span-2 space-y-4">
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center cursor-pointer group self-start select-none"
          >
            {/* Logo bascule selon le thème */}
            <img
              src={dark ? logoDark : logoLight}
              alt="PRISMA COLOR"
              className="object-contain transition-all duration-300 group-hover:scale-102"
              style={{ height: '101px', width: '99px' }}
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-gray-500 dark:text-gray-500 leading-relaxed font-light max-w-sm mt-3">
            Fabricant de peintures de haute qualité pour les professionnels du bâtiment, architectes, applicateurs agréés et particuliers exigeants au Maroc.
          </p>

          {/* Social links */}
          <div className="flex items-center space-x-4 pt-2">
            <a href="https://www.facebook.com/profile.php?id=61561976823351" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/prisma_color_peinture/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.37-.899 3.736 3.736 0 0 1-.894-1.38c-.165-.42-.359-1.065-.412-2.235-.057-1.274-.07-1.649-.07-4.859 0-3.211.015-3.586.074-4.859.061-1.171.256-1.816.421-2.236.216-.563.476-.96.895-1.37.42-.42.819-.679 1.381-.894.422-.165 1.057-.359 2.227-.412C8.414 2.175 8.794 2.16 12 2.163zm0-2.163c-3.26 0-3.667.014-4.947.072-1.277.057-2.149.261-2.913.558a5.83 5.83 0 0 0-2.126 1.384 5.83 5.83 0 0 0-1.384 2.126c-.297.764-.499 1.636-.558 2.913-.058 1.28-.072 1.687-.072 4.947s.014 3.667.072 4.947c.059 1.277.261 2.148.558 2.913a5.83 5.83 0 0 0 1.384 2.126A5.83 5.83 0 0 0 4.14 23.37c.764.297 1.636.499 2.913.558C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c1.277-.059 2.148-.261 2.913-.558a5.83 5.83 0 0 0 2.126-1.384 5.83 5.83 0 0 0 1.384-2.126c.297-.764.499-1.636.558-2.913.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.059-1.277-.261-2.148-.558-2.913a5.83 5.83 0 0 0-1.384-2.126A5.83 5.83 0 0 0 19.86.63c-.764-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/prisma-color-peintures/?originalSubdomain=ma" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Products col */}
        <div className="space-y-4">
          <h5 className="text-[10px] uppercase tracking-wider font-extrabold text-gray-900 dark:text-white">Produits</h5>
          <ul className="space-y-2 font-medium">
            {['Fiche Habitat Intérieur', 'Acryliques Façade Extérieure', 'Enduits décoratifs & Tadelakt', 'Gamme Technique Spéciaux'].map((label) => (
              <li key={label}>
                <button onClick={() => onNavigate('products')} className="hover:text-green-600 dark:hover:text-green-400 cursor-pointer transition-colors">
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Company col */}
        <div className="space-y-4">
          <h5 className="text-[10px] uppercase tracking-wider font-extrabold text-gray-900 dark:text-white">Notre Entreprise</h5>
          <ul className="space-y-2 font-medium">
            <li>
              <button onClick={() => onNavigate('factory')} className="hover:text-green-600 dark:hover:text-green-400 cursor-pointer transition-colors">
                Notre usine de Meknès
              </button>
            </li>
          </ul>
        </div>

        {/* Contact col */}
        <div className="space-y-4">
          <h5 className="text-[10px] uppercase tracking-wider font-extrabold text-gray-900 dark:text-white">Contact</h5>
          <ul className="space-y-2 font-medium">
            <li>
              <button onClick={() => onNavigate('contact')} className="hover:text-green-600 dark:hover:text-green-400 cursor-pointer transition-colors">
                Demande de devis gratuit
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('contact')} className="hover:text-green-600 dark:hover:text-green-400 cursor-pointer transition-colors">
                Support technique chantier
              </button>
            </li>
            <li className="text-[10px] text-gray-400 dark:text-gray-600 font-normal leading-normal pt-2 border-t border-gray-200 dark:border-gray-800">
              Meknès, Route 34, Maroc<br />
              Tél: +212 (0)666-342212
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright bar */}
      <div className="max-w-7xl mx-auto border-t border-gray-200 dark:border-gray-800 mt-12 pt-6 flex flex-wrap justify-between items-center gap-4 text-[11px] text-gray-400 dark:text-gray-600">
        <p>© {new Date().getFullYear()} PRISMA COLOR Maroc. Tous droits réservés.</p>
        <div className="flex gap-4">
          <span className="hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">Mentions Légales</span>
          <span className="hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">Politique de Confidentialité</span>
        </div>
      </div>
    </footer>
  );
}