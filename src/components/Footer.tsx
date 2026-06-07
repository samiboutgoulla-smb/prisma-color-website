import React from 'react';
import logoImg from '../assets/images/logo.png';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-16 px-6 md:px-12 text-left text-gray-600 font-sans text-xs" style={{ minHeight: '378.156px' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        
        {/* Brand signature col (2 Cols wide on large) */}
        <div className="lg:col-span-2 space-y-4">
          <div 
            onClick={() => onNavigate('home')}
            className="flex items-center cursor-pointer group self-start select-none"
          >
            <img 
              src={logoImg} 
              alt="PRISMA COLOR" 
              className="object-contain transition-transform duration-300 group-hover:scale-102"
              style={{ height: '101px', width: '99px' }}
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-gray-500 leading-relaxed font-light max-w-sm mt-3">
            Fabricant de peintures de haute qualité pour les professionnels du bâtiment, architectes, applicateurs agréés et particuliers exigeants au Maroc.
          </p>
        </div>

        {/* Navigation col */}
        <div className="space-y-4">
          <h5 className="text-[10px] uppercase tracking-wider font-extrabold text-gray-900">Produits</h5>
          <ul className="space-y-2 font-medium">
            <li>
              <button onClick={() => onNavigate('products')} className="hover:text-green-600 cursor-pointer">
                Fiche Habitat Intérieur
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('products')} className="hover:text-green-600 cursor-pointer">
                Acryliques Façade Extérieure
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('products')} className="hover:text-green-600 cursor-pointer">
                Enduits décoratifs & Tadelakt
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('products')} className="hover:text-green-600 cursor-pointer">
                Gamme Technique Spéciaux
              </button>
            </li>
          </ul>
        </div>

        {/* Corporate details */}
        <div className="space-y-4">
          <h5 className="text-[10px] uppercase tracking-wider font-extrabold text-gray-900">Notre Entreprise</h5>
          <ul className="space-y-2 font-medium">
            <li>
              <button onClick={() => onNavigate('factory')} className="hover:text-green-600 cursor-pointer">
                Notre usine de Meknès
              </button>
            </li>
          </ul>
        </div>

        {/* Direct Contact shortcut */}
        <div className="space-y-4">
          <h5 className="text-[10px] uppercase tracking-wider font-extrabold text-gray-900">Contact</h5>
          <ul className="space-y-2 font-medium">
            <li>
              <button onClick={() => onNavigate('contact')} className="hover:text-green-600 cursor-pointer">
                Demande de devis gratuit
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('contact')} className="hover:text-green-600 cursor-pointer">
                Support technique chantier
              </button>
            </li>
            <li className="text-[10px] text-gray-400 font-normal leading-normal pt-2 border-t border-gray-200">
              Meknès, Route 34, Maroc<br />
              Tél: +212 (0)666-342212
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Sub bar */}
      <div className="max-w-7xl mx-auto border-t border-gray-200 mt-12 pt-6 flex flex-wrap justify-between items-center gap-4 text-[11px] text-gray-400">
        <p>© {new Date().getFullYear()} PRISMA COLOR Maroc. Tous droits réservés.</p>
        <div className="flex gap-4">
          <span className="hover:text-gray-600 cursor-pointer">Mentions Légales</span>
          <span className="hover:text-gray-600 cursor-pointer">Politique de Confidentialité</span>
        </div>
      </div>
    </footer>
  );
}
