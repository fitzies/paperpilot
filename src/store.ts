import { create } from "zustand";

interface StoreState {
  tokens: number;
  setTokens: (num: number) => void;
}

const useStore = create<StoreState>()((set) => ({
  tokens: 0,
  setTokens: (num: number) => set(() => ({ tokens: num })),
}));

export default useStore;
