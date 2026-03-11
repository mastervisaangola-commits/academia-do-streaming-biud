/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Module } from './types';

export const COURSES_DATA: Module[] = [
  {
    id: 'modulo-1',
    title: 'Conta Visa',
    description: 'Aprenda a criar e gerenciar sua conta Visa digital e cartões internacionais.',
    thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
    lessons: [
      {
        id: 'v1',
        title: 'Criação da conta Visa Bybit',
        videoUrl: 'https://drive.google.com/file/d/1VjG7448C6SpzOCxZet1QxRVEJaey6LF-/view',
        description: 'Criação de cartão Visa digital passo a passo.'
      },
      {
        id: 'v2',
        title: 'Criar conta na Binance',
        videoUrl: 'https://www.youtube.com/embed/EiQq9apCYZ0',
        description: 'Abertura de conta na maior exchange do mundo.'
      },
      {
        id: 'v3',
        title: 'Segurança na Binance',
        videoUrl: 'https://www.youtube.com/embed/2amks0rGpM4',
        description: 'Proteja seus ativos com as melhores práticas.'
      },
      {
        id: 'v4',
        title: 'Comprar dólar com Kwanza',
        videoUrl: 'https://www.youtube.com/embed/pq137SDON1Y',
        description: 'Como converter sua moeda local em dólar digital.'
      },
      {
        id: 'v5',
        title: 'Retirar dólares para Visa',
        videoUrl: 'https://drive.google.com/file/d/1Vjr7y58POyZtrp7A74VRpuWTgDBrehLS/view',
        description: 'Transferência de fundos para seu cartão Visa.'
      }
    ]
  },
  {
    id: 'modulo-2',
    title: 'Ascensão do Streamer',
    description: 'O guia definitivo para se tornar um streamer de sucesso e monetizar seu conteúdo.',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop',
    lessons: [
      {
        id: 's1',
        title: 'Fornecedores de Streaming',
        videoUrl: 'https://drive.google.com/file/d/125YuGzfa0GRiifAmo6fgSooM1TDHGAZN/view'
      },
      {
        id: 's2',
        title: 'Comprar Acessos',
        videoUrl: 'https://drive.google.com/file/d/1v_FzqeNaewvMCLUxGRqvd8_YZHKcm3u2/view'
      },
      {
        id: 's3',
        title: 'Design & Identidade',
        videoUrl: 'https://drive.google.com/file/d/1QIojnO9MtHRhTBA-1aEby2QAOaf2naCh/view'
      },
      {
        id: 's4',
        title: 'Precificação',
        videoUrl: 'https://drive.google.com/file/d/1M29PB08oPQ0WfgH888CjSMvg3QQ9mtSv/view'
      },
      {
        id: 's5',
        title: 'Tráfego Pago',
        videoUrl: 'https://drive.google.com/file/d/1yV2cuid4UpNK0DrMFmNhNorkw8Gy47to/view'
      },
      {
        id: 's6',
        title: 'Tráfego na Prática',
        videoUrl: 'https://drive.google.com/file/d/1Pp0gJdjh77AWKFaM5LQSGQzFKpGIric9/view'
      },
      {
        id: 's7',
        title: 'Conversão de Clientes',
        videoUrl: 'https://drive.google.com/file/d/1z4Xj-PQXTTJK-iBZbJiL8Nh_R-P9DPIa/view'
      }
    ]
  },
  {
    id: 'modulo-3',
    title: 'Cursos Premium',
    description: 'Acesso exclusivo aos conteúdos mais avançados da Academia.',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
    isPremium: true,
    lessons: []
  }
];

export const WHATSAPP_CONFIG = {
  number: '+244955346296',
  message: 'Quero adquirir os cursos premium com desconto de aluno da Academia do Streaming'
};
