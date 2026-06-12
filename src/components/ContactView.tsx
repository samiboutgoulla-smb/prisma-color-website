import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactView() {
  return (
    <section className="py-20 bg-white dark:bg-[#111113] transition-colors duration-300" id="contact-prisma-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Module Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-green-700 dark:text-green-400 mb-2">Service Client dédié</div>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 dark:text-white leading-tight">Discutons de votre projet</h2>
          <p className="text-gray-500 dark:text-gray-400 font-sans text-sm md:text-base font-light mt-4">
            Demande de devis gratuits, assistance technique sur le terrain ou questions sur notre nuancier : notre équipe commerciale est à votre entière écoute.
          </p>
        </div>

        {/* Contact layout */}
        <div className="max-w-2xl mx-auto space-y-8 text-left">

          {/* Brand intro banner */}
          <div className="bg-gray-50 dark:bg-[#18181b] rounded-2xl p-8 border border-gray-150 dark:border-gray-800">
            <h3 className="font-serif text-2xl text-gray-900 dark:text-white mb-3">PRISMA COLOR</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light">
              PRISMA COLOR habille vos intérieurs et protège vos extérieurs. Présents sur les grands chantiers partout au Maroc, nous exportons aussi notre expertise industrielle à l'international, distribuant nos gammes vers d'autres pays et continents.
            </p>
          </div>

          {/* Contact cards */}
          <div className="space-y-4">

            {/* Phone */}
            <div className="flex gap-4 p-5 border border-gray-100 dark:border-gray-800 rounded-xl hover:border-green-200 dark:hover:border-green-800 hover:bg-green-50/20 dark:hover:bg-green-900/10 transition-all">
              <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">Appelez nos experts</h4>
                <a href="tel:+212666342212" className="font-sans font-bold text-base text-gray-900 dark:text-white block hover:text-green-700 dark:hover:text-green-400 mt-1">
                  +212 666342212 <br />
                  +212 535451117
                </a>
                <span className="text-xs text-gray-500 dark:text-gray-400 block mt-0.5">Lundi-Vendredi: 08h30 - 18h30 | Samedi: 9:00 - 13:00</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 p-5 border border-gray-100 dark:border-gray-800 rounded-xl hover:border-green-200 dark:hover:border-green-800 hover:bg-green-50/20 dark:hover:bg-green-900/10 transition-all">
              <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">Écrivez par messagerie</h4>
                <a href="mailto:contact@prisma-color.com" className="font-sans font-bold text-base text-gray-900 dark:text-white block hover:text-green-700 dark:hover:text-green-400 mt-1">
                  contact@prisma-color.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4 p-5 border border-gray-100 dark:border-gray-800 rounded-xl hover:border-green-200 dark:hover:border-green-800 hover:bg-green-50/20 dark:hover:bg-green-900/10 transition-all">
              <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">Siège social industriel</h4>
                <p className="font-sans font-medium text-sm text-gray-800 dark:text-gray-200 leading-relaxed mt-1">
                  Hay Sidi Bouzekri, Route 34, Z.I. Mejjat <br />
                  Meknès, Royaume du Maroc
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}