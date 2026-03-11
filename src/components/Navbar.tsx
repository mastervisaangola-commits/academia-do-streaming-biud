/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Play, Grid, FileText, Award, Home, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Módulos', path: '/modulos', icon: Grid },
    { name: 'Materiais', path: '/materiais', icon: FileText },
    { name: 'Certificado', path: '/certificado', icon: Award },
  ];

  return (
    <>
      {/* Top Navbar - Desktop & Mobile Branding */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism px-4 md:px-6 py-3 md:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-primary rounded-lg flex items-center justify-center cinematic-glow overflow-hidden">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <span className="font-display font-bold text-lg md:text-xl tracking-tighter uppercase">
              Academia <span className="text-brand-primary">do</span> <span className="hidden xs:inline">Streaming</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors hover:text-brand-primary",
                  location.pathname === item.path ? "text-brand-primary" : "text-gray-400"
                )}
              >
                <item.icon size={18} />
                {item.name}
              </Link>
            ))}
            <Link 
              to="/modulos" 
              className="bg-brand-primary px-6 py-2 rounded-full text-sm font-bold hover:bg-opacity-80 transition-all active:scale-95"
            >
              Acessar
            </Link>
          </div>

          {/* Mobile Profile/Search placeholder to balance */}
          <div className="md:hidden flex items-center gap-4">
             <div className="w-8 h-8 rounded-full bg-brand-secondary border border-white/10 flex items-center justify-center text-[10px] font-bold">
               AS
             </div>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation - Mobile Only */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-morphism border-t border-white/10 px-2 py-2 flex items-center justify-around">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center gap-1 p-2 transition-colors",
              location.pathname === item.path ? "text-brand-primary" : "text-gray-500"
            )}
          >
            <item.icon size={20} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">{item.name}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
