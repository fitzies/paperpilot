import { create } from "zustand";

interface OptionState {
  option: Option;
  set: (by: Option) => void;
}

const useStore = create<OptionState>()((set) => ({
  option: "Humanize",
  set: (by) => set(() => ({ option: by })),
}));

export default useStore;
