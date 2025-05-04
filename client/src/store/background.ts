import { create } from 'zustand';

const images = import.meta.glob<{default: string}>('/src/assets/backgrounds/*.jpg', {
  eager: true
}) as Record<string, {default: string}>
const imageList = Object.values(images).map((img) => img.default);


interface BackgroundStore {
  images: string[];
  selectedImage: string;
  setSelectedImage: (img: string) => void;
}

const useBackgroundStore = create<BackgroundStore>((set) => ({
  images: imageList,
  selectedImage: imageList[0],
  setSelectedImage: (img) => set({ selectedImage: img }),
}));

export default useBackgroundStore;

