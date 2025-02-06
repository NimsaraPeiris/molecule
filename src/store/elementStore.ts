import { create } from 'zustand';
import { Element } from '../types/element';

interface ElementStore {
  detectedElements: Element[];
  setDetectedElements: (elements: Element[]) => void;
}

export const useElementStore = create<ElementStore>((set) => ({
  detectedElements: [],
  setDetectedElements: (elements) => set({ detectedElements: elements }),
}));