import { create } from "zustand";

interface AuthModel {
  isOpen: boolean;
  onChangeOpen: () => void;
  onClose: () => void;
}

const useAuthModel = create<AuthModel>((set) => ({
  isOpen: false,
  onChangeOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  onClose: () => set({ isOpen: false }),
}));

export default useAuthModel;
