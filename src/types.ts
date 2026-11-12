export type Language = 'en' | 'te';

export interface Coordinator {
  name: string;
  nameTe: string;
  phone: string;
  role: string;
  roleTe: string;
}

export interface CurriculumDay {
  day: number;
  title: string;
  titleTe: string;
  subtitle: string;
  subtitleTe: string;
  description: string;
  descriptionTe: string;
  exercises: string[];
  exercisesTe: string[];
  benefit: string;
  benefitTe: string;
}

export interface FaqItem {
  id: string;
  question: string;
  questionTe: string;
  answer: string;
  answerTe: string;
}

export interface RegistrationData {
  fullName: string;
  email: string;
  whatsappNumber: string;
  challenge: string;
  preferredBatch: string;
}
