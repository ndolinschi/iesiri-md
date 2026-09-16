export type Language = "ro" | "ru";

export type Zone =
  | "Centru"
  | "Buiucani"
  | "Botanica"
  | "Râșcani"
  | "Ciocana"
  | "Telecentru";

export type PlaceCategory = "parc" | "muzeu" | "cafe" | "plimbare";

export type PriceTag = "gratis" | "ieftin" | "moderat";

export interface LocalizedString {
  ro: string;
  ru: string;
}

export interface LocalizedStringArray {
  ro: string[];
  ru: string[];
}

export interface Place {
  id: string;
  name: LocalizedString;
  shortDescription: LocalizedString;
  fullDescription: LocalizedString;
  category: PlaceCategory;
  priceLevel: PriceTag;
  tags: string[]; // e.g. ["gratis", "parc", "plimbare", "lac", "familie"]
  zone: Zone;
  address: string;
  duration?: LocalizedString; // e.g. "1.5 – 2 ore" / "1.5 – 2 часа"
  bestTime?: LocalizedString; // e.g. "Apus de soare / Weekend dimineața"
  localTip?: LocalizedString; // Local insider tip
  highlights: LocalizedStringArray;
  iconName?: string;
  accentColor?: string;
}

export interface FilterState {
  searchQuery: string;
  selectedZone: Zone | "all";
  selectedTag: string | "all";
  selectedCategory: PlaceCategory | "all";
}
