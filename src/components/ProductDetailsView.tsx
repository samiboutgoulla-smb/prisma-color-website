import React, { useState } from 'react';
import { Product } from '../types';
import { ProductImage } from './ProductImage';
import { 
  ArrowLeft, 
  Calendar, 
  Check, 
  Download,
  Calculator, 
  CornerDownRight, 
  ShieldAlert, 
  Sparkles, 
  TrendingUp, 
  FileText, 
  ArrowRight,
  Info,
  PlayCircle
} from 'lucide-react';
import { motion } from 'motion/react';

interface ProductDetailsViewProps {
  product: Product;
  onBack: () => void;
  onNavigateToContact?: () => void;
}

// ==========================================
// FONCTIONS UTILITAIRES POUR LE CALCULATEUR
// ==========================================
const getConditionnementsInKg = (productName: string): number[] => {
  const name = productName.toUpperCase();
  
  if (name.includes("CHROMIA") || name.includes("FLUORINA") || name.includes("VEGA STAR") || name.includes("IRIDIUM")) {
    return [2.5, 10, 20];
  }
  if (name.includes("CIRA MINERALIA") || name.includes("PRISMA CIRE")) {
    return [0.8]; // 800 g
  }
  if (name.includes("ONYX") || name.includes("MINERALIA") || name.includes("PRISMA TEINTE") || name.includes("PRISMA PATE") || name.includes("PRISMA PRET")) {
    return [5, 25];
  }
  if (name.includes("PRISMA LUX")) {
    return [0.12, 0.4]; // 120 g et 400 g
  }
  if (name.includes("PRISMA PRIM EXTRA") || name.includes("PRISMA BLANC FIX") || name.includes("BLANC FIXE")) {
    return [2.5, 15];
  }
  if (name.includes("PRISMA FONDO")) {
    return [10];
  }
  if (name.includes("PRISMA STOP")) {
    return [5, 20];
  }
  if (name.includes("PRISMA PORES") || name.includes("PRISMA WOOD")) {
    return [0.75]; // 750 g
  }
  if (name.includes("ANTIBACTÉRIENNE") || name.includes("ANTIBACTERIENNE")) {
    return [4, 15];
  }
  if (name.includes("PRISMA PLAST")) {
    return [5, 10, 30, 45];
  }
  if (name.includes("PRISMA VINYL") || name.includes("ECOLOGIA")) {
    return [1, 5, 10, 30, 45];
  }
  if (name.includes("CARRELAGE")) {
    return [4];
  }
  if (name.includes("MONOCOUCHE")) {
    return [25];
  }
  if (name.includes("PRISMA REX")) {
    return [30];
  }
  if (name.includes("ENDUIT FACADE")) {
    return [5, 25];
  }
  if (name.includes("VERNIS PIO")) {
    return [1];
  }
  if (name.includes("PRISMA PROTECT")) {
    return [5];
  }
  if (name.includes("ANTIFISSURE")) {
    return [2];
  }
  if (name.includes("ANTIHUMIDITÉ") || name.includes("ANTIHUMIDITE") || name.includes("PRISMA FIBRE")) {
    return [4, 20];
  }
  if (name.includes("PRISMA FLEX") || name.includes("FONGEX")) {
    return [5, 15]; // ou 5, 20 selon le produit exact
  }
  if (name.includes("PRIMA FIX")) {
    return [4, 15];
  }
  if (name.includes("IZO 10")) {
    return [13];
  }
  
  return [5, 25]; // Valeur par défaut
};

const formatWeightLabel = (weight: number): string => {
  if (weight < 1) {
    return `${weight * 1000} g`;
  }
  return `${weight} kg`;
};

export default function ProductDetailsView({ product, onBack, onNavigateToContact }: ProductDetailsViewProps) {
  // Détermination des conditionnements disponibles pour ce produit
  const conditionnements = getConditionnementsInKg(product.name);

  const [surfaceArea, setSurfaceArea] = useState<number | ''>('');
  const [layersCount, setLayersCount] = useState<number>(2);
  const [selectedWeight, setSelectedWeight] = useState<number>(conditionnements[0] || 5);

  // Sécurité : Mettre à jour le poids sélectionné si on change de produit
  React.useEffect(() => {
    if (conditionnements.length > 0) {
      setSelectedWeight(conditionnements[0]);
    }
  }, [product.id]);

  const handleDownload = () => {
    if (product.pdfUrl) {
      const link = document.createElement('a');
      // On combine la base URL et on retire le premier slash du pdfUrl pour éviter un double slash
      link.href = `${import.meta.env.BASE_URL}${product.pdfUrl.replace(/^\//, '')}`;
      link.download = `Fiche_Technique_${product.name}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("Aucune fiche technique disponible pour ce produit.");
    }
  };

  // ==================== LOGIQUE DE CALCUL ====================
  // On utilise le coverageMultiplier défini dans types.ts (m²/kg)
  const rendementParKg = product.coverageMultiplier || 10;
  
  // Total estimé en kilos
  const totalKgNeeded = rendementParKg > 0 && surfaceArea && surfaceArea > 0
    ? (Number(surfaceArea) * layersCount) / rendementParKg 
    : 0;
    
  // Nombre de seaux/emballages nécessaires
  const calculatedBuckets = selectedWeight > 0 && totalKgNeeded > 0
    ? Math.ceil(totalKgNeeded / selectedWeight) 
    : 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="space-y-12 pb-20"
      id={`product-details-${product.id}`}
    >
      {/* Dynamic Print Styles ONLY injected on compilation to handle clean print sheet layout! */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #print-area, #print-area * {
            visibility: visible;
          }
          #print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>

      {/* Breadcrumb Navigation header - Corrigé sans doublon */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-6 print:hidden">
        <button
          onClick={onBack}
          className="group flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-green-700 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Retour au catalogue
        </button>
        <span className="text-xs text-gray-400 font-mono tracking-wider">
          Référence technique / {product.id.toUpperCase()}
        </span>
      </div>

      {/* Main Column Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="print-area">
        
        {/* Left Column: Visual display, datasheet download, calculator */}
        <div className="lg:col-span-5 space-y-8 print:col-span-12">
          
          {/* Brand/Product Cover Container */}
          <div className="relative bg-gradient-to-b from-gray-50 to-gray-100/50 border border-gray-100 rounded-2xl overflow-hidden p-8 flex flex-col items-center justify-center min-h-[300px] md:min-h-[420px]">
            {/* Visual accent circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-green-50/40 mix-blend-multiply blur-2xl pointer-events-none" />
            <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-amber-50/30 mix-blend-multiply blur-xl pointer-events-none" />

            <ProductImage
              product={product}
              className="relative max-h-[220px] md:max-h-[320px] w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-xs border border-gray-100 px-3 py-1.5 rounded-lg">
              <span className="text-[10px] font-mono text-gray-500 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                Produit de qualité 
              </span>
            </div>
          </div>

        
        {/* Buttons: technical datasheet actions list */}
          <div className="flex flex-col gap-3 print:hidden">
            <button
              onClick={handleDownload}
              className="flex items-center justify-center gap-3 w-full bg-[#1c1d1f] hover:bg-green-600 text-white text-xs font-bold uppercase tracking-wider py-4 px-6 rounded-xl transition-all shadow-sm cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Télécharger la Fiche Technique
            </button>

            {/* Nouveau bouton Vidéo d'application */}
            {product.VideoUrl && (
              <a
                href={product.VideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-white border-2 border-gray-200 hover:border-green-600 hover:text-green-700 text-gray-800 text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-sm cursor-pointer"
              >
                <PlayCircle className="w-5 h-5" />
                Regarder la vidéo d'application
              </a>
            )}
          </div>

          {/* Interactive Paint Calculator */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xs space-y-4 print:hidden">
            <div className="flex items-center gap-2.5 border-b border-gray-50 pb-3">
              <div className="p-1.5 bg-green-50 text-green-700 rounded-lg">
                <Calculator className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-sm font-semibold text-gray-900">Calculateur d'application personnalisé</h4>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed font-light">
              Estimez précisément la quantité nécessaire pour votre chantier de <strong>{product.name}</strong> au rendement théorique de {product.coverage}.
            </p>

            <div className="space-y-4 pt-2">
              {/* Row 1: Surface input */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  Surface à peindre (en m²)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    placeholder="Ex: 45"
                    value={surfaceArea}
                    onChange={(e) => setSurfaceArea(e.target.value === '' ? '' : Math.max(0, Number(e.target.value)))}
                    className="w-full text-sm py-2.5 pl-4 pr-12 rounded-lg border border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none transition-all"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">m²</span>
                </div>
              </div>

              {/* Row 2: Parameters split */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    Nombre de couches
                  </label>
                  <select
                    value={layersCount}
                    onChange={(e) => setLayersCount(Number(e.target.value))}
                    className="w-full text-sm py-2.5 px-3 rounded-lg border border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none bg-white transition-all"
                  >
                    <option value={1}>1 couche</option>
                    <option value={2}>2 couches (Conseillé)</option>
                    <option value={3}>3 couches</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    Format disponible
                  </label>
                  <select
                    value={selectedWeight}
                    onChange={(e) => setSelectedWeight(Number(e.target.value))}
                    className="w-full text-sm py-2.5 px-3 rounded-lg border border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none bg-white transition-all"
                  >
                    {conditionnements.map((weight) => (
                      <option key={weight} value={weight}>
                        {formatWeightLabel(weight)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Display Result boxes */}
              {surfaceArea && surfaceArea > 0 ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-green-50/70 border border-green-100 rounded-xl grid grid-cols-2 gap-4 text-center mt-6"
                >
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-green-700/70 tracking-widest">Total Requis</span>
                    <span className="text-xl md:text-2xl font-bold text-green-900 font-sans">{totalKgNeeded.toFixed(1)} {totalKgNeeded < 1 ? 'g' : 'kg'}</span>
                  </div>
                  <div className="border-l border-green-200/50">
                    <span className="block text-[10px] uppercase font-bold text-green-700/70 tracking-widest">Emballages</span>
                    <span className="text-xl md:text-2xl font-bold text-green-900 font-sans">{calculatedBuckets} </span>
                  </div>
                </motion.div>
              ) : (
                <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl text-center mt-6">
                  <span className="text-xs text-gray-400 italic">Saisissez une surface pour lancer l'estimation</span>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Right Column: Characteristics details, technical sheets official rows list, support prep */}
        <div className="lg:col-span-7 space-y-10 print:col-span-12">
          
          {/* Main Titles and Badges */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">
                {product.line}
              </span>
              {product.subCategory && (
                <span className="text-[10px] font-bold uppercase tracking-widest bg-green-50 text-green-850 border border-green-150 px-3 py-1 rounded-full font-mono">
                  Spécialité : {product.subCategory}
                </span>
              )}
              <span className="text-[10px] font-bold uppercase tracking-widest bg-gray-100 text-gray-700 border border-gray-200 px-3 py-1 rounded-full">
                {product.tag}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest bg-amber-50 text-amber-800 border border-amber-100 px-3 py-1 rounded-full">
                Peinture Formulée
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-5xl text-gray-900 leading-tight">
              {product.name}
            </h1>

            <p className="text-gray-500 font-sans text-sm md:text-base font-light leading-relaxed">
              {product.longDescription}
            </p>
          </div>

          {/* Technical Sheet Official Data Sheet Table block */}
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xs">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-serif text-sm font-semibold text-gray-900 uppercase tracking-widest text-[11px] flex items-center gap-2">
                <FileText className="w-4 h-4 text-green-700" />
                Fiche de Caractéristiques Nationales (Peinture)
              </h3>
              <span className="text-[9px] font-mono font-medium text-gray-400 uppercase">Document Certifié</span>
            </div>

            <div className="divide-y divide-gray-100 font-sans text-xs">
              
              {/* Row 1: Rendement */}
              <div className="grid grid-cols-1 md:grid-cols-12 p-4 hover:bg-gray-50/50 transition-colors">
                <div className="md:col-span-4 text-gray-400 font-bold uppercase tracking-wider text-[10px] flex items-center">
                  Rendement Moyen
                </div>
                <div className="md:col-span-8 text-gray-800 font-semibold text-[13px] mt-1 md:mt-0">
                  {product.coverage}
                </div>
              </div>

              {/* Row 2: Séchage */}
              <div className="grid grid-cols-1 md:grid-cols-12 p-4 hover:bg-gray-50/50 transition-colors">
                <div className="md:col-span-4 text-gray-400 font-bold uppercase tracking-wider text-[10px] flex items-center">
                  Temps de Séchage
                </div>
                <div className="md:col-span-8 text-gray-800 font-semibold text-[13px] mt-1 md:mt-0">
                  {product.dryingTime}
                </div>
              </div>

              {/* Row 3: Finitions */}
              <div className="grid grid-cols-1 md:grid-cols-12 p-4 hover:bg-gray-50/50 transition-colors">
                <div className="md:col-span-4 text-gray-400 font-bold uppercase tracking-wider text-[10px] flex items-center">
                  Finitions / Aspects
                </div>
                <div className="md:col-span-8 text-gray-800 font-semibold text-[13px] mt-1 md:mt-0">
                  {product.finishes.join(' | ')}
                </div>
              </div>

              {/* Row 4: Dilution */}
              <div className="grid grid-cols-1 md:grid-cols-12 p-4 hover:bg-gray-50/50 transition-colors">
                <div className="md:col-span-4 text-gray-400 font-bold uppercase tracking-wider text-[10px] flex items-center">
                  Dilution d'Apprêt
                </div>
                <div className="md:col-span-8 text-gray-800 font-medium leading-relaxed mt-1 md:mt-0 whitespace-pre-line">
                  {product.dilution}
                </div>
              </div>

              {/* Row 5: Densité */}
              <div className="grid grid-cols-1 md:grid-cols-12 p-4 hover:bg-gray-50/50 transition-colors">
                <div className="md:col-span-4 text-gray-400 font-bold uppercase tracking-wider text-[10px] flex items-center">
                  Densité Spécifique
                </div>
                <div className="md:col-span-8 text-gray-800 font-semibold text-[13px] mt-1 md:mt-0">
                  {product.density}
                </div>
              </div>

              {/* Row 6: Teneur en COV */}
              <div className="grid grid-cols-1 md:grid-cols-12 p-4 hover:bg-gray-50/50 transition-colors">
                <div className="md:col-span-4 text-gray-400 font-bold uppercase tracking-wider text-[10px] flex items-center">
                  Taux Limite de COV
                </div>
                <div className="md:col-span-8 text-green-700 font-bold text-[12px] mt-1 md:mt-0">
                  {product.cov}
                </div>
              </div>

              {/* Row 7: Outils recommandés */}
              <div className="grid grid-cols-1 md:grid-cols-12 p-4 hover:bg-gray-50/50 transition-colors">
                <div className="md:col-span-4 text-gray-400 font-bold uppercase tracking-wider text-[10px] flex items-center">
                  Outils d'Application
                </div>
                <div className="md:col-span-8 text-gray-700 font-medium leading-relaxed mt-1 md:mt-0">
                  {product.outils}
                </div>
              </div>

            </div>
          </div>

          {/* Formules et Atouts de Formulation précis */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium text-gray-900 border-b border-gray-100 pb-2">
              Bénéfices de Formulation Évoluée
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feat, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 bg-gray-50/40 border border-gray-50 p-4 rounded-xl leading-relaxed text-xs text-gray-600 hover:bg-green-50/30 hover:border-green-100 transition-colors"
                >
                  <span className="w-5 h-5 bg-green-100 text-green-700 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <div>
                    <span className="font-semibold text-gray-800 block text-[13px] mb-0.5">Atout {idx + 1}</span>
                    <span>{feat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Preparation Info Block */}
          <div className="bg-amber-50/30 border border-amber-100/65 rounded-xl p-6 space-y-3 font-sans text-xs">
            <h4 className="font-serif text-sm font-semibold text-amber-900 flex items-center gap-2">
              <Info className="w-4.5 h-4.5 text-amber-700 shrink-0" />
              Directives Pratiques de Rénovation et Préparation
            </h4>
            <p className="text-gray-600 leading-relaxed font-light">
              {product.preparation}
            </p>
          </div>

          {/* Contact Integration CTA container */}
          {onNavigateToContact && (
            <div className="bg-[#1c1d1f] rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 print:hidden">
              <div className="space-y-1.5 text-center md:text-left">
                <span className="text-[10px] font-mono uppercase tracking-wider text-green-400">Prise de contact directe</span>
                <h4 className="font-serif text-xl font-medium">Besoin d'un devis ou d'un conseil technique ?</h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed max-w-md">
                  Notre département technique  vous conseille gratuitement sur le volume optimal pour vos projets résidentiels ou industriels.
                </p>
              </div>
              <button 
                onClick={onNavigateToContact}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl shadow shrink-0 cursor-pointer transition-all"
              >
                Formulaire Devis
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>

      </div>

    </motion.div>
  );
}