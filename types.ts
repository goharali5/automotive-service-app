
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
  avatar: string;
}

export interface DiagnosticResult {
  likelyCauses: string[];
  recommendation: string;
  estimatedTime: string;
  severity: 'low' | 'medium' | 'high';
}
