import React, { useEffect } from 'react';
import { useAppStore } from '../store/appStore';
import { colorPalettes, type PaletteName } from './themeConstants';

import { createContext } from 'react';

export const ThemeContext = createContext({});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isDarkMode, primaryColor } = useAppStore();

    useEffect(() => {
        const root = document.documentElement;

        // Handle Dark Mode
        if (isDarkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        // Handle Primary Color & Theme Variables
        const palette = colorPalettes[primaryColor as PaletteName] || colorPalettes.blue;
        const themeColors = isDarkMode ? palette.dark : palette.light;

        // Apply Primary Colors
        root.style.setProperty('--color-primary', palette.colors.primary);
        root.style.setProperty('--color-primary-hover', palette.colors.primaryHover);
        root.style.setProperty('--color-primary-light', palette.colors.primaryLight);
        root.style.setProperty('--color-secondary', palette.colors.secondary);

        // Apply Theme-Specific Backgrounds & Surfaces
        root.style.setProperty('--color-background', themeColors.background);
        root.style.setProperty('--color-surface', themeColors.surface);
        root.style.setProperty('--color-surface-hover', themeColors.surfaceHover);
        root.style.setProperty('--color-border', themeColors.border);
        root.style.setProperty('--color-selected-background', themeColors.selectedBackground);

    }, [isDarkMode, primaryColor]);

    return (
        <ThemeContext.Provider value={{}}>
            {children}
        </ThemeContext.Provider>
    );
};
