export interface Vegetable {
  id: string;
  name: string;
  role: string;
  reason: string;
  color: string;
  glowColor: string;
  position: [number, number, number];
  emoji: string;
}

export interface PHLevel {
  range: string;
  label: string;
  color: string;
  textColor: string;
  ph: string;
  examples: string[];
  indicatorColor: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  color: string;
  label: string;
}
