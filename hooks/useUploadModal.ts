import { create } from "zustand";

interface UploadModal {
  isOpen: boolean;
  onChangeOpen: () => void;
  onClose: () => void;
}

const useUploadModal = create<UploadModal>((set) => ({
  isOpen: false,
  onChangeOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  onClose: () => set({ isOpen: false }),
}));

export default useUploadModal;
