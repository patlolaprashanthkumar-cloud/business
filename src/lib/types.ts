export type Service = {
  id: string;
  title: string;
  description: string;
  explanation: string;
  deliverables: string[];
  iconName: string;
};

export type Industry = {
  id: string;
  name: string;
  useCase: string;
  iconName: string;
};

export type Article = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readingTime: string;
  content: string[];
  keywords: string;
};

export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  period?: string;
  includes: string[];
  popular?: boolean;
};

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type FAQ = {
  question: string;
  answer: string;
};
