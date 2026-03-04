export interface Case {
  id: string;
  title: string;
  tag: string;
  description: string;
  image: string;
}

export interface Ingredient {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
}
