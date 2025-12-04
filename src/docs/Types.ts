export interface CompanyType {
  company: string;
  industry: string;
  size: string;
  founded: number;
  phone: string;
  email: string;
  location: string;
}


export interface JobType {
  id: number;
  title: string;
  company: string;
  logo: string;
  position: string;
  location: string;
  salary: string;
  rate: string;
  weeklyHours: string;
  expirationDate: string;
  skills: string[];
  postedDate: string;
  description: string;
  matchPercentage: number;
  type: string[];
  category: string;
}