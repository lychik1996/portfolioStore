import { create } from 'zustand';
interface FilterState {
  sizes: string[];
  colors: string[];
  prices: string[];
  brands: string[];
  collections: string;
  tags: string[];
  setSizes: (sizes: string[]) => void;
  setColors: (colors: string[]) => void;
  setPrices: (prices: string[]) => void;
  setBrands: (brands: string[]) => void;
  setCollections: (collections: string) => void;
  setTags: (tags: string[]) => void;
}
export const useFilterStore = create<FilterState>((set) => ({
  sizes: [],
  colors: [],
  prices: [],
  brands: [],
  collections: 'All products',
  tags: [],
  setSizes: (sizes) => set({ sizes }),
  setColors: (colors) => set({ colors }),
  setPrices: (prices) => set({ prices }),
  setBrands: (brands) => set({ brands }),
  setCollections: (collections) => set({ collections }),
  setTags: (tags) => set({ tags }),
}));
