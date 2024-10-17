import { create } from "zustand";

interface useFavoriteTriggerProps {
  triggerFavorite: boolean;
  setTriggerFavorite: () => void;
}

export const useFavoriteTrigger = create<useFavoriteTriggerProps>((set) => ({
  
  triggerFavorite: false, 
  setTriggerFavorite: () => set((state) => ({ triggerFavorite: !state.triggerFavorite }))
}));