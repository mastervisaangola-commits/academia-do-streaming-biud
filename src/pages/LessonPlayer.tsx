/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, CheckCircle, Download, FileText, Share2, Info } from 'lucide-react';
import { COURSES_DATA } from '../constants';

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function LessonPlayer() {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  
  const module = COURSES_DATA.find(m => m.id === moduleId);
  const lesson = module?.lessons.find(l => l.id === lessonId);
  const lessonIndex = module?.lessons.findIndex(l => l.id === lessonId) ?? -1;
  
  const nextLesson = module?.lessons[lessonIndex + 1];
  const prevLesson = module?.lessons[lessonIndex - 1];

  if (!module || !lesson) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] gap-4">
        <h2 className="text-2xl font-bold">Aula não encontrada</h2>
        <Link to="/modulos" className="text-brand-primary hover:underline">Voltar para módulos</Link>
      </div>
    );
  }

  // Helper to format video URL for iframe
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return url; // Already formatted in constants
    }
    if (url.includes('drive.google.com')) {
      // Convert view link to preview link for iframe
      return url.replace('/view', '/preview');
    }
    return url;
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)] bg-brand-bg">
      {/* Main Content Area */}
      <div className="flex-grow flex flex-col">
        {/* Video Player Container - Sticky on mobile */}
        <div className="sticky top-14 md:relative md:top-0 z-40 aspect-video w-full bg-black shadow-2xl">
          <iframe
            src={getEmbedUrl(lesson.videoUrl)}
            className="absolute inset-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Lesson Info */}
        <div className="p-4 md:p-8 max-w-4xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex flex-col gap-1">
              <span className="text-brand-primary text-[10px] md:text-xs font-black uppercase tracking-widest">
                {module.title} • Aula {lessonIndex + 1} de {module.lessons.length}
              </span>
              <h1 className="text-xl md:text-3xl font-display font-bold">{lesson.title}</h1>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="p-2 md:p-3 bg-brand-card rounded-xl border border-white/5 hover:border-brand-primary/30 transition-all text-gray-400 hover:text-white">
                <Share2 size={18} />
              </button>
              <button className="p-2 md:p-3 bg-brand-card rounded-xl border border-white/5 hover:border-brand-primary/30 transition-all text-gray-400 hover:text-white">
                <Info size={18} />
              </button>
            </div>
          </div>

          <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-8">
            {lesson.description || "Nesta aula, exploramos os conceitos fundamentais deste tópico. Siga o passo a passo para dominar as técnicas apresentadas."}
          </p>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between py-6 md:py-8 border-t border-white/5">
            <button
              disabled={!prevLesson}
              onClick={() => navigate(`/aula/${moduleId}/${prevLesson?.id}`)}
              className="flex items-center gap-2 text-xs md:text-sm font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:text-brand-primary transition-colors"
            >
              <ChevronLeft size={18} />
              Anterior
            </button>
            
            <button
              disabled={!nextLesson}
              onClick={() => navigate(`/aula/${moduleId}/${nextLesson?.id}`)}
              className="flex items-center gap-2 text-xs md:text-sm font-bold disabled:opacity-30 disabled:cursor-not-allowed bg-brand-primary px-4 md:px-6 py-2 md:py-3 rounded-xl hover:bg-opacity-80 transition-all"
            >
              Próxima
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Support Materials */}
          {moduleId === 'modulo-2' && (
            <div className="mt-12 p-8 bg-brand-card rounded-3xl border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="text-brand-primary" size={24} />
                <h2 className="text-xl font-bold">Materiais de Apoio</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-brand-bg rounded-2xl border border-white/5 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary">
                      <Download size={18} />
                    </div>
                    <span className="text-sm font-medium">Pack de Imagens</span>
                  </div>
                  <button className="text-xs font-bold text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity">Baixar</button>
                </div>
                <div className="p-4 bg-brand-bg rounded-2xl border border-white/5 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary">
                      <Download size={18} />
                    </div>
                    <span className="text-sm font-medium">Guia de Precificação</span>
                  </div>
                  <button className="text-xs font-bold text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity">Baixar</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar - Lesson List */}
      <div className="w-full lg:w-96 bg-brand-card border-l border-white/5 overflow-y-auto max-h-screen lg:max-h-none">
        <div className="p-6 border-b border-white/5">
          <h3 className="font-display font-bold text-lg uppercase tracking-tight">Conteúdo do Módulo</h3>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex-grow h-1 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-brand-primary" 
                style={{ width: `${((lessonIndex + 1) / module.lessons.length) * 100}%` }} 
              />
            </div>
            <span className="text-[10px] font-bold text-gray-500 whitespace-nowrap">
              {Math.round(((lessonIndex + 1) / module.lessons.length) * 100)}% Concluído
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          {module.lessons.map((l, idx) => (
            <Link
              key={l.id}
              to={`/aula/${moduleId}/${l.id}`}
              className={cn(
                "p-6 flex items-start gap-4 border-b border-white/5 transition-all hover:bg-white/5",
                l.id === lessonId ? "bg-brand-primary/10 border-l-4 border-l-brand-primary" : ""
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold",
                idx <= lessonIndex ? "bg-brand-primary text-white" : "bg-white/5 text-gray-500"
              )}>
                {idx <= lessonIndex ? <CheckCircle size={16} /> : idx + 1}
              </div>
              <div className="flex flex-col gap-1">
                <span className={cn(
                  "text-sm font-medium leading-tight",
                  l.id === lessonId ? "text-brand-primary" : "text-gray-300"
                )}>
                  {l.title}
                </span>
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                  {l.duration || "10:00"} • Vídeo
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


