/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronRight, Star, Clock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COURSES_DATA } from '../constants';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/logo.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40 scale-110 blur-sm"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-transparent to-transparent" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-3 md:gap-4 max-w-2xl"
          >
            <div className="flex items-center gap-2 text-brand-primary font-bold tracking-widest uppercase text-[10px] md:text-sm">
              <Star size={14} fill="currentColor" />
              <span>Destaque da Semana</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-display font-black leading-tight uppercase">
              Ascensão do <br />
              <span className="text-brand-primary">Streamer</span>
            </h1>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed max-w-md">
              Domine as ferramentas, estratégias e segredos das maiores plataformas de streaming do mundo. Transforme sua paixão em uma carreira lucrativa.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-4">
              <Link 
                to="/modulos" 
                className="bg-brand-primary px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base flex items-center gap-2 hover:bg-opacity-80 transition-all active:scale-95 cinematic-glow"
              >
                <Play size={18} fill="currentColor" />
                Começar
              </Link>
              <button className="bg-white/10 backdrop-blur-md border border-white/10 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base hover:bg-white/20 transition-all">
                Detalhes
              </button>
            </div>

            <div className="flex items-center gap-6 md:gap-8 mt-6 md:mt-8 text-[10px] md:text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>12+ Horas</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={14} />
                <span>+5.000 Alunos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Previews (Carousel Style) */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-display font-bold uppercase tracking-tight">Nossos Módulos</h2>
          <Link to="/modulos" className="text-brand-primary flex items-center gap-1 text-sm font-bold hover:underline">
            Ver Todos <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COURSES_DATA.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={module.thumbnail} 
                alt={module.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                <p className="text-sm text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                  {module.description}
                </p>
                <Link 
                  to="/modulos" 
                  className="mt-4 inline-flex items-center gap-2 text-brand-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-all"
                >
                  Ver Módulo <ChevronRight size={16} />
                </Link>
              </div>
              {module.isPremium && (
                <div className="absolute top-4 right-4 bg-brand-highlight px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Premium
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-brand-card/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4 text-center items-center">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary">
              <Play size={32} />
            </div>
            <h3 className="text-xl font-bold">Qualidade 4K</h3>
            <p className="text-gray-400">Aulas gravadas com a melhor tecnologia para você não perder nenhum detalhe.</p>
          </div>
          <div className="flex flex-col gap-4 text-center items-center">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold">Comunidade VIP</h3>
            <p className="text-gray-400">Troque experiências com outros alunos e cresça junto com a rede.</p>
          </div>
          <div className="flex flex-col gap-4 text-center items-center">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold">Certificado Oficial</h3>
            <p className="text-gray-400">Ao concluir os cursos, você recebe um certificado com design exclusivo.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
