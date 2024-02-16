import { create } from "zustand";

export const useAppStore = create((set) => ({
  fileId: null,
  setFileId: (fileId) => set(() => ({ fileId })),

  fileName: "",
  setFileName: (fileName) => set(() => ({ fileName })),

  isDeleteModalOpen: false,
  setIsDeleteModalOpen: (open) => set(() => ({ isDeleteModalOpen: open })),

  // isRenameModalOpen: false,
  // setIsRenameModalOpen: (open) => set(() => ({ isRenameModalOpen: open })),
}));
