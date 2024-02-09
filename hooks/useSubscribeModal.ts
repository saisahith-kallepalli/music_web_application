import { create } from "zustand";

interface SubscribeModal {
  isOpen: boolean;
  onChangeOpen: () => void;
  onClose: () => void;
  onOpen: () => void;
}

const useSubscribeModal = create<SubscribeModal>((set) => ({
  isOpen: false,
  onChangeOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useSubscribeModal;
