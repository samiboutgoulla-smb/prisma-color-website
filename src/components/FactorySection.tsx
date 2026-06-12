import React, { useState } from 'react';

export default function FactorySection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Recherche & Développement",
      desc: "Grâce à un laboratoire de pointe et des partenariats européens stratégiques, PRISMA COLOR développe des solutions de revêtement innovantes. Le choix d'une haute performance durable et respectueuse de l'environnement."
    },
    {
      num: "02",
      title: "Équipement de Production",
      desc: "Doté d'équipements de haute qualité, PRISMA COLOR produit tous types de peintures. Notre grande capacité de production nous permet de répondre efficacement et rapidement à tous vos besoins."
    },
    {
      num: "03",
      title: "Contrôle de qualité",
      desc: "Grâce à notre station de traitement d'eau Osmosis et à nos équipements de contrôle rigoureux, PRISMA COLOR vous garantit un produit fini d'exception et une qualité constante au fil du temps."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#16161a] border-t border-b border-gray-200 dark:border-gray-800 transition-colors duration-300" id="factory-about-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400 mb-3">Savoir-Faire Industriel</div>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 dark:text-white leading-tight">
            Une unité moderne de production <br />synonyme d'excellence.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-sans text-sm md:text-base font-light mt-4">
            Notre site industriel de pointe allie automatisation technologique, laboratoires R&D de premier niveau et contrôles qualité appliqués à chaque lot de production.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto w-full">
          <div className="flex flex-col space-y-4">
            {steps.map((st, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={st.num}
                  onClick={() => setActiveStep(idx)}
                  className={`p-8 rounded-2xl border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-white dark:bg-[#1e1e23] border-green-600 shadow-xl'
                      : 'bg-white/40 dark:bg-[#1a1a1f]/40 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:bg-white dark:hover:bg-[#1e1e23]'
                  }`}
                >
                  <div className="flex gap-6 items-start">
                    <div className="text-lg font-bold tracking-widest text-green-600 dark:text-green-400 font-sans mt-1">
                      {st.num}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-serif text-xl text-gray-900 dark:text-white flex items-center justify-between">
                        {st.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 font-sans text-sm mt-3 leading-relaxed font-light">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}