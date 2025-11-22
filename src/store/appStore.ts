import { create } from 'zustand';

interface AppState {
    currentLibraryId: string | null;
    currentFamilyName: string | null;
    isDarkMode: boolean;
    primaryColor: string;

    // Actions
    setLibrary: (libraryId: string) => void;
    setFamily: (familyName: string) => void;
    toggleTheme: () => void;
    setPrimaryColor: (color: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
    currentLibraryId: null,
    currentFamilyName: null,
    isDarkMode: false, // Default to light mode
    primaryColor: 'blue', // Default primary color

    setLibrary: (libraryId) => set({ currentLibraryId: libraryId, currentFamilyName: null }),
    setFamily: (familyName) => set({ currentFamilyName: familyName }),
    toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    setPrimaryColor: (color) => set({ primaryColor: color }),
}));
