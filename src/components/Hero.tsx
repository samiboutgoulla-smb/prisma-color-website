import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
  onNavigateToProduct?: (productId: string) => void; // <-- AJOUTE CETTE LIGNE
}

export default function Hero({ onNavigate }: HeroProps) {
  // 1. Liste des chemins de tes images (tu peux utiliser ton dossier hero-carousel si tu l'as créé)
  const images = [
    "/images/Ecologia.png",
    "/images/Fongex.png", 
    "/images/Antihumidite.png",
    "/images/PrismaFibre.png"

  ];

  // 2. État pour suivre quelle image afficher
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3. Effet pour changer d'image automatiquement toutes les 3 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(timer); // Nettoyage propre pour éviter les fuites de mémoire (et les crashs !)
  }, [images.length]);

  return (
    <div className="relative pt-[113px] min-h-screen bg-gradient-to-br from-white to-gray-50 overflow-hidden flex flex-col justify-between">
      {/* Lueur de fond dynamique */}
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-radial from-green-500/10 to-transparent blur-3xl -z-10" />

      {/* Conteneur principal de la grille */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Colonne Gauche : Textes et Boutons */}
        <div className="flex flex-col space-y-6 md:space-y-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 text-xs font-bold tracking-widest uppercase rounded-full self-start">
            <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-ping" />
            Fabricant marocain - plus de 20 ans d'expérience
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
Plus de 20 ans d'expertise en solutions de peinture innovantes.          </h1>
          
          <p className="text-gray-500 font-sans text-sm md:text-base max-w-lg leading-relaxed font-light">
            Découvrez des gammes de peintures innovantes conçues pour sublimer vos intérieurs et protéger durablement vos façades extérieures.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button 
              onClick={() => onNavigate('products')}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-sm transition-all cursor-pointer"
            >
              Explorer le Catalogue
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Colonne Droite : Le carrousel d'images SÉCURISÉ (sans le clic qui crash) */}
        <div className="flex items-center justify-center w-full h-full max-h-[460px]">
          <img 
            key={currentIndex} 
            src={images[currentIndex]} 
            alt="Prisma Color Gammes" 
            className="w-full h-auto max-h-[420px] object-contain drop-shadow-2xl scale-130 animate-fade-in"
          />
        </div>

      </div>

      {/* Barre des Statistiques au Bas de la page */}
      <div className="bg-white border-t border-gray-100 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full px-6 md:px-12">
        <div className="text-center lg:text-left border-b lg:border-b-0 lg:border-r border-gray-200 pb-6 lg:pb-0 lg:pr-8">
          <div className="font-serif text-4xl font-bold text-gray-900 leading-none">
            2000 <span className="text-green-600 font-sans font-bold">+</span>
          </div>
          <div className="text-xs uppercase tracking-wider text-gray-500 font-bold mt-2">Teintes Disponibles</div>
        </div>
        
        <div className="text-center lg:text-left border-b lg:border-b-0 lg:border-r border-gray-200 pb-6 lg:pb-0 lg:pr-8">
          <div className="font-serif text-4xl font-bold text-gray-900 leading-none">
            +20 <span className="text-green-600 font-sans font-bold">Ans</span>
          </div>
          <div className="text-xs uppercase tracking-wider text-gray-500 font-bold mt-2">D'Expertise Industrielle</div>
        </div>

        <div className="text-center lg:text-left border-b lg:border-b-0 lg:border-r border-gray-200 pb-6 lg:pb-0 lg:pr-8">
          <div className="font-serif text-4xl font-bold text-gray-900 leading-none">
            100 <span className="text-green-600 font-sans font-bold">%</span>
          </div>
          <div className="text-xs uppercase tracking-wider text-gray-500 font-bold mt-2">Matière de haute Qualité</div>
        </div>

        <div className="text-center lg:text-left">
          <div className="font-serif text-4xl font-bold text-gray-900 leading-none">
            32 <span className="text-green-600 font-sans font-bold">+</span>
          </div>
          <div className="text-xs uppercase tracking-wider text-gray-500 font-bold mt-2">Grands Chantiers Realisés</div>
        </div>
      </div>
    </div>
  );
}