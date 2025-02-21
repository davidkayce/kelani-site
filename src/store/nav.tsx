import { create } from "zustand";

export interface NavStore {
  navShowing: boolean;
  setNavShowing: (navShowing: boolean) => void;
}

const useNavStore = create<NavStore>((set) => ({
  navShowing: false,
  setNavShowing: (navShowing) => {
    set(() => ({ navShowing }));
  },
}));

export default useNavStore;
