import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onNavigate: (section: string) => void;
  onNavigateToProduct?: (productId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { t } = useLanguage();

 const images = [
    `${import.meta.env.BASE_URL}images/Ecologia.png`,
    `${import.meta.env.BASE_URL}images/Fongex.png`,
    `${import.meta.env.BASE_URL}images/antihumidite.png`,
    `${import.meta.env.BASE_URL}images/PrismaFibre.png`,
    `${import.meta.env.BASE_URL}images/EffetBeton.png`,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const stats = [
    { value: '2000', unit: '+', label: t('hero_stat_1_label') },
    { value: '+20', unit: 'Ans', label: t('hero_stat_2_label') },
    { value: '100', unit: '%', label: t('hero_stat_3_label') },
    { value: '32', unit: '+', label: t('hero_stat_4_label') },
  ];

  return (
    <div className="relative pt-[113px] min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-[#111113] dark:to-[#18181b] overflow-hidden flex flex-col justify-between transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-radial from-green-500/10 to-transparent blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: Text & CTA */}
        <div className="flex flex-col space-y-6 md:space-y-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold tracking-widest uppercase rounded-full self-start">
            <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-ping" />
            {t('hero_badge')}
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            {t('hero_title')}
          </h1>

          <p className="text-gray-500 dark:text-gray-400 font-sans text-sm md:text-base max-w-lg leading-relaxed font-light">
            {t('hero_subtitle')}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('products')}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-sm transition-all cursor-pointer"
            >
              {t('hero_cta')}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Image carousel */}
        <div className="flex items-center justify-center w-full h-full max-h-[460px]">
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Prisma Color Gammes"
            className="w-full h-auto max-h-[420px] object-contain drop-shadow-2xl scale-130 animate-fade-in"
          />
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-white dark:bg-[#18181b] border-t border-gray-100 dark:border-gray-800 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full px-6 md:px-12 transition-colors duration-300">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`text-center lg:text-left pb-6 lg:pb-0 ${
              i < 3 ? 'border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700 lg:pr-8' : ''
            }`}
          >
            <div className="font-serif text-4xl font-bold text-gray-900 dark:text-white leading-none">
              {stat.value} <span className="text-green-600 font-sans font-bold">{stat.unit}</span>
            </div>
            <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-bold mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
