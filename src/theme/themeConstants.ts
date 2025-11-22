export interface ColorPalette {
    name: string;
    colors: {
        primary: string;
        primaryHover: string;
        primaryLight: string;
        secondary: string;
        secondaryHover: string;
    };
    dark: {
        background: string;
        surface: string;
        surfaceHover: string;
        border: string;
        selectedBackground: string;
    };
    light: {
        background: string;
        surface: string;
        surfaceHover: string;
        border: string;
        selectedBackground: string;
    };
}

export const colorPalettes: Record<string, ColorPalette> = {
    blue: {
        name: 'Ocean Blue',
        colors: {
            primary: '#3b82f6',
            primaryHover: '#2563eb',
            primaryLight: '#eff6ff',
            secondary: '#64748b',
            secondaryHover: '#475569',
        },
        light: {
            background: '#f8fafc', // slate-50
            surface: '#ffffff',
            surfaceHover: '#f1f5f9', // slate-100
            border: '#e2e8f0', // slate-200
            selectedBackground: '#eff6ff', // slate-50 / primaryLight
        },
        dark: {
            background: '#020617', // slate-950
            surface: '#0f172a', // slate-900
            surfaceHover: '#1e293b', // slate-800
            border: '#1e293b', // slate-800
            selectedBackground: '#172554', // blue-950
        },
    },
    purple: {
        name: 'Royal Purple',
        colors: {
            primary: '#a855f7',
            primaryHover: '#9333ea',
            primaryLight: '#faf5ff',
            secondary: '#ec4899',
            secondaryHover: '#db2777',
        },
        light: {
            background: '#faf5ff', // purple-50
            surface: '#ffffff',
            surfaceHover: '#f3e8ff', // purple-100
            border: '#e9d5ff', // purple-200
            selectedBackground: '#faf5ff', // primaryLight
        },
        dark: {
            background: '#05040a', // Near pitch black purple
            surface: '#0f0e1b', // Very dark purple
            surfaceHover: '#1a172e', // Dark purple
            border: '#252140',
            selectedBackground: '#3b0764', // purple-950
        },
    },
    green: {
        name: 'Forest Green',
        colors: {
            primary: '#22c55e',
            primaryHover: '#16a34a',
            primaryLight: '#f0fdf4',
            secondary: '#eab308',
            secondaryHover: '#ca8a04',
        },
        light: {
            background: '#f0fdf4', // green-50
            surface: '#ffffff',
            surfaceHover: '#dcfce7', // green-100
            border: '#bbf7d0', // green-200
            selectedBackground: '#f0fdf4', // primaryLight
        },
        dark: {
            background: '#010502', // Near pitch black green
            surface: '#05140a', // Very dark green
            surfaceHover: '#0a2412', // Dark green
            border: '#0f361b',
            selectedBackground: '#052e16', // green-950
        },
    },
    orange: {
        name: 'Sunset Orange',
        colors: {
            primary: '#f97316',
            primaryHover: '#ea580c',
            primaryLight: '#fff7ed',
            secondary: '#f43f5e',
            secondaryHover: '#e11d48',
        },
        light: {
            background: '#fff7ed', // orange-50
            surface: '#ffffff',
            surfaceHover: '#ffedd5', // orange-100
            border: '#fed7aa', // orange-200
            selectedBackground: '#fff7ed', // primaryLight
        },
        dark: {
            background: '#080200', // Near pitch black orange
            surface: '#240a04', // Lighter dark orange for visibility
            surfaceHover: '#381006', // Distinct hover
            border: '#5c1f0b',
            selectedBackground: '#431407', // orange-950
        },
    },
    red: {
        name: 'Ruby Red',
        colors: {
            primary: '#ef4444',
            primaryHover: '#dc2626',
            primaryLight: '#fef2f2',
            secondary: '#f59e0b',
            secondaryHover: '#d97706',
        },
        light: {
            background: '#fef2f2', // red-50
            surface: '#ffffff',
            surfaceHover: '#fee2e2', // red-100
            border: '#fecaca', // red-200
            selectedBackground: '#fef2f2', // primaryLight
        },
        dark: {
            background: '#0a0101', // Near pitch black red
            surface: '#260505', // Lighter dark red for visibility
            surfaceHover: '#3d0808', // Distinct hover
            border: '#611010',
            selectedBackground: '#450a0a', // red-950
        },
    },
};

export type PaletteName = keyof typeof colorPalettes;
