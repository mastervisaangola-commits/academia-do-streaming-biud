/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Award, Type, Palette, Layout, User, FileText, Check } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function CertificateGenerator() {
  const [studentName, setStudentName] = useState('Seu Nome Completo');
  const [courseName, setCourseName] = useState('Academia do Streaming');
  const [theme, setTheme] = useState<'dark' | 'light' | 'gold'>('dark');
  const [primaryColor, setPrimaryColor] = useState('#E50914');
  const [fontSize, setFontSize] = useState(48);
  const [isGenerating, setIsGenerating] = useState(false);
  
  const certificateRef = useRef<HTMLDivElement>(null);

  const downloadCertificate = async () => {
    if (!certificateRef.current) return;
    
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 3, // High quality
        useCORS: true,
        backgroundColor: null,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save(`Certificado_${studentName.replace(/\s+/g, '_')}.pdf`);
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const themes = {
    dark: {
      bg: 'bg-[#0B0F1A]',
      text: 'text-white',
      border: 'border-white/10',
      accent: 'text-brand-primary'
    },
    light: {
      bg: 'bg-white',
      text: 'text-gray-900',
      border: 'border-gray-200',
      accent: 'text-brand-primary'
    },
    gold: {
      bg: 'bg-[#1A1A1A]',
      text: 'text-[#D4AF37]',
      border: 'border-[#D4AF37]/30',
      accent: 'text-[#D4AF37]'
    }
  };

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto w-full">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-display font-black uppercase tracking-tighter mb-4">
          Gerador de <span className="text-brand-primary">Certificado</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Personalize seu certificado de conclusão com design cinematográfico. 
          Edite as informações abaixo e faça o download em alta qualidade.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Editor Controls */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="bg-brand-card p-8 rounded-3xl border border-white/5 flex flex-col gap-6">
            <div className="flex items-center gap-2 mb-2">
              <User className="text-brand-primary" size={20} />
              <h3 className="font-bold uppercase text-sm tracking-widest">Informações</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-500 font-bold uppercase">Nome do Aluno</label>
                <input 
                  type="text" 
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="bg-brand-bg border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-500 font-bold uppercase">Nome do Curso</label>
                <input 
                  type="text" 
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  className="bg-brand-bg border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4 mb-2">
              <Palette className="text-brand-primary" size={20} />
              <h3 className="font-bold uppercase text-sm tracking-widest">Estilo</h3>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {(['dark', 'light', 'gold'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`py-3 rounded-xl border text-xs font-bold capitalize transition-all ${
                    theme === t ? 'border-brand-primary bg-brand-primary/10 text-brand-primary' : 'border-white/10 text-gray-400'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-gray-500 font-bold uppercase">Cor Primária</label>
              <div className="flex gap-3">
                {['#E50914', '#F43F5E', '#8B5CF6', '#10B981', '#3B82F6'].map((color) => (
                  <button
                    key={color}
                    onClick={() => setPrimaryColor(color)}
                    className={`w-8 h-8 rounded-full transition-transform ${primaryColor === color ? 'scale-125 border-2 border-white' : ''}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-gray-500 font-bold uppercase">Tamanho da Fonte: {fontSize}px</label>
              <input 
                type="range" 
                min="24" 
                max="72" 
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                className="accent-brand-primary"
              />
            </div>

            <button
              onClick={downloadCertificate}
              disabled={isGenerating}
              className="mt-4 w-full bg-brand-primary py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-80 transition-all active:scale-95 disabled:opacity-50 cinematic-glow"
            >
              {isGenerating ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Download size={20} />
              )}
              {isGenerating ? 'Gerando...' : 'Baixar Certificado'}
            </button>
          </div>
        </div>

        {/* Preview Area */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="flex items-center justify-between px-4">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <Layout size={14} /> Preview em Tempo Real
            </span>
            <span className="text-[10px] text-gray-600 font-mono">1920 x 1080 PX</span>
          </div>

          <div className="bg-black/50 p-4 md:p-8 rounded-[30px] md:rounded-[40px] border border-white/5 shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <div 
                ref={certificateRef}
                className={`aspect-[1.414/1] min-w-[600px] md:min-w-0 w-full relative overflow-hidden border-8 ${themes[theme].bg} ${themes[theme].text} ${themes[theme].border} flex flex-col items-center justify-center p-10 md:p-20 text-center`}
                style={{ borderColor: theme === 'custom' ? primaryColor : undefined }}
              >
              {/* Background Decorative Elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4" />
              
              <div className="relative z-10 flex flex-col items-center w-full">
                <Award className="mb-8" size={80} style={{ color: primaryColor }} />
                
                <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-4 opacity-60">Certificado de Conclusão</h4>
                
                <p className="text-xl font-light mb-12 opacity-80">Este certificado é concedido a</p>
                
                <h2 
                  className="font-display font-black mb-12 leading-tight uppercase tracking-tighter"
                  style={{ fontSize: `${fontSize}px`, color: theme === 'gold' ? undefined : primaryColor }}
                >
                  {studentName}
                </h2>
                
                <p className="max-w-xl text-lg opacity-80 leading-relaxed mb-16">
                  Por ter concluído com êxito o treinamento intensivo de <span className="font-bold">{courseName}</span>, 
                  demonstrando domínio nas técnicas e ferramentas de streaming e marketing digital.
                </p>
                
                <div className="w-full flex justify-between items-end mt-auto">
                  <div className="flex flex-col items-start gap-2">
                    <div className="w-48 h-px bg-current opacity-20" />
                    <span className="text-xs font-bold uppercase tracking-widest opacity-60">Data de Emissão</span>
                    <span className="text-sm font-medium">{new Date().toLocaleDateString('pt-BR')}</span>
                  </div>
                  
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-brand-primary rounded-xl flex items-center justify-center cinematic-glow">
                      <Award size={32} className="text-white" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Academia do Streaming</span>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div className="w-48 h-px bg-current opacity-20" />
                    <span className="text-xs font-bold uppercase tracking-widest opacity-60">Assinatura Digital</span>
                    <span className="text-sm font-display italic font-medium">Diretoria Academia</span>
                  </div>
                </div>
              </div>

              {/* Border Frame */}
              <div className="absolute inset-4 border border-current opacity-10 pointer-events-none" />
              <div className="absolute inset-8 border border-current opacity-5 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
