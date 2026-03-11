/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Image as ImageIcon, FileArchive, Search } from 'lucide-react';

export default function SupportMaterials() {
  const materials = [
    { name: 'Pack de Imagens - Ascensão do Streamer', type: 'ZIP', size: '124 MB', icon: FileArchive },
    { name: 'Guia de Precificação Profissional', type: 'PDF', size: '2.4 MB', icon: FileText },
    { name: 'Checklist de Configuração OBS', type: 'PDF', size: '1.1 MB', icon: FileText },
    { name: 'Assets Visuais para Overlays', type: 'PNG', size: '45 MB', icon: ImageIcon },
    { name: 'Planilha de Gestão de Clientes', type: 'XLSX', size: '0.8 MB', icon: FileText },
  ];

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto w-full">
      <header className="mb-12">
        <h1 className="text-4xl font-display font-black uppercase tracking-tighter mb-4">
          Materiais de <span className="text-brand-primary">Apoio</span>
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Baixe os recursos exclusivos para acelerar seu aprendizado. 
          Todos os materiais estão disponíveis para download imediato.
        </p>
      </header>

      <div className="flex flex-col gap-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          <input 
            type="text" 
            placeholder="Buscar materiais..." 
            className="w-full bg-brand-card border border-white/10 rounded-2xl py-4 pl-12 pr-6 focus:border-brand-primary outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {materials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-card p-6 rounded-2xl border border-white/5 flex items-center justify-between group hover:border-brand-primary/30 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                  <item.icon size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-gray-200">{item.name}</span>
                  <span className="text-xs text-gray-500 uppercase font-black tracking-widest">{item.type} • {item.size}</span>
                </div>
              </div>
              
              <button className="bg-brand-secondary p-3 rounded-xl hover:bg-brand-primary transition-all active:scale-95">
                <Download size={20} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20 p-12 bg-gradient-to-br from-brand-primary/20 to-transparent rounded-[40px] border border-brand-primary/20 text-center">
        <h2 className="text-3xl font-display font-bold mb-4">Precisa de algo específico?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Se você não encontrou o material que procurava, entre em contato com nosso suporte técnico.
        </p>
        <button className="bg-brand-primary px-8 py-4 rounded-2xl font-bold hover:bg-opacity-80 transition-all active:scale-95 cinematic-glow">
          Solicitar Material
        </button>
      </div>
    </div>
  );
}
