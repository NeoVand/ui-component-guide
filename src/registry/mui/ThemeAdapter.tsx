import React, { useMemo } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { useAppStore } from '../../store/appStore';
import { colorPalettes, type PaletteName } from '../../theme/themeConstants';

export const MuiThemeAdapter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isDarkMode, primaryColor } = useAppStore();

    const theme = useMemo(() => {
        const palette = colorPalettes[primaryColor as PaletteName] || colorPalettes.blue;

        return createTheme({
            palette: {
                mode: isDarkMode ? 'dark' : 'light',
                primary: {
                    main: palette.colors.primary,
                    light: palette.colors.primaryLight,
                    dark: palette.colors.primaryHover,
                },
                secondary: {
                    main: palette.colors.secondary,
                    dark: palette.colors.secondaryHover,
                },
                background: {
                    default: isDarkMode ? (palette.dark?.background || '#020617') : (palette.light?.background || '#ffffff'),
                    paper: isDarkMode ? (palette.dark?.surface || '#0f172a') : (palette.light?.surface || '#ffffff'),
                },
            },
            components: {
                MuiCard: {
                    styleOverrides: {
                        root: {
                            backgroundImage: 'none', // Remove default gradient in dark mode
                        },
                    },
                },
            },
        });
    }, [isDarkMode, primaryColor]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
