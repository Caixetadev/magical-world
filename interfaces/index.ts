export interface IPotion {
  title: string;
  slug: string;
  excerpt: string;
  ingredients: string[];
}

export interface IParchment {
  title: string;
  slug: string;
  excerpt: string;
}

export interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  source: string;
  visit: string;
}
