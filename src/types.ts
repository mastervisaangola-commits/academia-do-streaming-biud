/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Lesson {
  id: string;
  title: string;
  videoUrl: string;
  description?: string;
  duration?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  lessons: Lesson[];
  isPremium?: boolean;
}

export interface CertificateData {
  studentName: string;
  courseName: string;
  date: string;
  additionalInfo?: string;
  theme: 'dark' | 'light' | 'custom';
  primaryColor: string;
  fontSize: number;
}
