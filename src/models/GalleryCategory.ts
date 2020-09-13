import { GalleryItem } from "./GalleryItem";

export interface GalleryCategory {
  name: string;
  items: GalleryItem[];
  quote: GalleryQuote;
}

export interface GalleryQuote {
  text: string;
  credit: string;
}
