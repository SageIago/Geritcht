import images from "./images";
import meal from "../assets/meal.mp4";
import { wines, awards, cocktails } from "./data";

// THIS IS THE INTERFACES
export interface WineType {
  title: string;
  price: string;
  tags: string;
  index?: number;
}

export interface CockTailType {
  title: string;
  price: string;
  tags: string;
  index?: number;
}

export interface AwardsType {
  imgUrl: string;
  title: string;
  subtitle?: string;
}

export { images, meal, wines, awards, cocktails };

export const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
] as const
