/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Lock, MessageCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COURSES_DATA, WHATSAPP_CONFIG } from '../constants';

export default function Modules() {
  const handlePremiumClick = () => {
    const url = `https://wa.me/${WHATSAPP_CONFIG.number.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_CONFIG.message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto w-full">
      <header className="mb-12">
        <h1 className="text-4xl font-display font-black uppercase tracking-tighter mb-4">
          Catálogo de <span className="text-brand-primary">Cursos</span>
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Explore nossos módulos cinematográficos e aprenda com os melhores do mercado. 
          Cada módulo foi desenhado para oferecer uma experiência imersiva e prática.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COURSES_DATA.map((module, index) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-brand-card rounded-3xl overflow-hidden border border-white/5 hover:border-brand-primary/30 transition-all group"
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={module.thumbnail} 
                alt={module.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />
              
              {module.isPremium ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-brand-primary p-4 rounded-full cinematic-glow">
                    <Lock size={24} />
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/20">
                    <Play size={24} fill="white" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
                  {module.lessons.length} Aulas
                </span>
                {module.isPremium && (
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-highlight bg-brand-highlight/10 px-3 py-1 rounded-full">
                    Premium
                  </span>
                )}
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-primary transition-colors">
                {module.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-2">
                {module.description}
              </p>

              {module.isPremium ? (
                <button 
                  onClick={handlePremiumClick}
                  className="w-full bg-brand-highlight py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-80 transition-all active:scale-95"
                >
                  <MessageCircle size={20} />
                  Adquirir Acesso
                </button>
              ) : (
                <Link 
                  to={`/aula/${module.id}/${module.lessons[0]?.id}`}
                  className="w-full bg-brand-secondary py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-primary transition-all active:scale-95 group/btn"
                >
                  Continuar Assistindo
                  <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
