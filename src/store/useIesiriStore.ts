import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Language, Zone, PlaceCategory } from "@/types";

interface IesiriStoreState {
  // i18n
  language: Language;
  setLanguage: (lang: Language) => void;

  // Favorites
  favorites: string[]; // array of place ids
  toggleFavorite: (placeId: string) => void;
  isFavorite: (placeId: string) => boolean;
  clearFavorites: () => void;

  // Filters
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTag: string; // 'all' or specific tag
  setSelectedTag: (tag: string) => void;
  selectedZone: Zone | "all";
  setSelectedZone: (zone: Zone | "all") => void;
  selectedCategory: PlaceCategory | "all";
  setSelectedCategory: (cat: PlaceCategory | "all") => void;
  resetFilters: () => void;

  // Detail modal/sheet (for quick viewing without navigation if desired)
  activePlaceId: string | null;
  setActivePlaceId: (id: string | null) => void;
}

export const useIesiriStore = create<IesiriStoreState>()(
  persist(
    (set, get) => ({
      // i18n default RO
      language: "ro",
      setLanguage: (language: Language) => set({ language }),

      // Favorites
      favorites: ["valea-morilor", "parcul-dendrariu"], // helpful initial seeds
      toggleFavorite: (placeId: string) => {
        const { favorites } = get();
        const exists = favorites.includes(placeId);
        if (exists) {
          set({ favorites: favorites.filter((id) => id !== placeId) });
        } else {
          set({ favorites: [...favorites, placeId] });
        }
      },
      isFavorite: (placeId: string) => {
        return get().favorites.includes(placeId);
      },
      clearFavorites: () => set({ favorites: [] }),

      // Filters
      searchQuery: "",
      setSearchQuery: (searchQuery: string) => set({ searchQuery }),
      selectedTag: "all",
      setSelectedTag: (selectedTag: string) => set({ selectedTag }),
      selectedZone: "all",
      setSelectedZone: (selectedZone: Zone | "all") => set({ selectedZone }),
      selectedCategory: "all",
      setSelectedCategory: (selectedCategory: PlaceCategory | "all") =>
        set({ selectedCategory }),
      resetFilters: () =>
        set({
          searchQuery: "",
          selectedTag: "all",
          selectedZone: "all",
          selectedCategory: "all",
        }),

      // Active detail
      activePlaceId: null,
      setActivePlaceId: (activePlaceId: string | null) => set({ activePlaceId }),
    }),
    {
      name: "iesiri_md_storage_v1",
      storage: createJSONStorage(() => {
        if (typeof window !== "undefined") {
          return window.localStorage;
        }
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        };
      }),
      // persist language, favorites, and filter preferences
      partialize: (state) => ({
        language: state.language,
        favorites: state.favorites,
        selectedZone: state.selectedZone,
        selectedCategory: state.selectedCategory,
      }),
    }
  )
);
