/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Modules from './pages/Modules';
import LessonPlayer from './pages/LessonPlayer';
import SupportMaterials from './pages/SupportMaterials';
import CertificateGenerator from './pages/CertificateGenerator';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16 md:pt-20 pb-20 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modulos" element={<Modules />} />
            <Route path="/aula/:moduleId/:lessonId" element={<LessonPlayer />} />
            <Route path="/materiais" element={<SupportMaterials />} />
            <Route path="/certificado" element={<CertificateGenerator />} />
          </Routes>
        </main>
        
        <footer className="py-12 px-6 border-t border-white/5 bg-brand-bg">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-display font-bold text-lg uppercase">
                Academia <span className="text-brand-primary">do</span> Streaming
              </span>
              <p className="text-gray-500 text-sm">© 2026 Academia do Streaming. Todos os direitos reservados.</p>
            </div>
            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Suporte</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

