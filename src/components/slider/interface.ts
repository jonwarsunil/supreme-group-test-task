export interface Slide {
  id: string;
  image: string;
  text: string;
}

export interface SliderProps {
  slides: Slide[];
  className?: string;
}
