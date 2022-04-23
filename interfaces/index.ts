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
  image: string;
  body: string;
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

export interface IPost {
  title: string;
  coverImage: string;
  slug: string;
  brief: string;
  dateAdded: string;
}
export interface ITimeline {
  year: number;
  text: string;
}
