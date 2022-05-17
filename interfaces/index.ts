export interface IPotion {
  title: string;
  slug: string;
  excerpt: string;
  ingredients: string[];
}
export interface PotionProps {
  potions: IPotion[];
}

export interface IParchment {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  body: string;
}
export interface ParchmentProps {
  parchments: IParchment[];
}

export interface ISpell {
  name: string;
  link?: string;
  image?: string;
}

export interface SpellProps {
  spells: ISpell[];
}

export interface ITestimonial {
  name: string;
  message: string;
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
export interface ProjectProps {
  projects: IProject[];
}
export interface IPost {
  title: string;
  coverImage: string;
  slug: string;
  brief: string;
  dateAdded: string;
  contentMarkdown: string;
}
export interface ITimeline {
  year: number;
  text: string;
}
