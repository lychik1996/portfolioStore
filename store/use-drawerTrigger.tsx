import { create } from "zustand";

interface useDrawerTriggerProps {
  trigger: boolean;
  setTrigger: () => void;
}

export const useDrawerTrigger = create<useDrawerTriggerProps>((set) => ({
  trigger: false, 
  setTrigger: () => set((state) => ({ trigger: !state.trigger }))
}));