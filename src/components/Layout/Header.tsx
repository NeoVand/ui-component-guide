import React, { useState } from 'react';
import { Moon, Sun, Palette, Search } from 'lucide-react';
import { useAppStore } from '../../store/appStore';
import { PalettePicker } from '../Theme/PalettePicker';

export const Header: React.FC = () => {
    const { isDarkMode, toggleTheme } = useAppStore();
    const [isPaletteOpen, setIsPaletteOpen] = useState(false);

    return (
        <>
            <header className="h-16 border-b border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-6 transition-colors duration-200">
                {/* Search Bar (Placeholder for now) */}
                <div className="flex-1 max-w-md">
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)] group-focus-within:text-[var(--color-primary)] transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="Search components..."
                            className="w-full pl-10 pr-4 py-2 bg-[var(--color-surface-hover)] border-none rounded-lg text-sm focus:ring-2 focus:ring-[var(--color-primary)] focus:bg-[var(--color-surface)] transition-all outline-none text-[var(--color-text)] placeholder-[var(--color-text-secondary)]"
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 ml-4">
                    <button
                        onClick={() => setIsPaletteOpen(true)}
                        className="p-2 text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)] rounded-lg transition-colors"
                        title="Change Color Palette"
                    >
                        <Palette size={20} />
                    </button>

                    <div className="w-px h-6 bg-[var(--color-border)] mx-1" />

                    <button
                        onClick={toggleTheme}
                        className="p-2 text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)] rounded-lg transition-colors"
                        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </header>

            <PalettePicker isOpen={isPaletteOpen} onClose={() => setIsPaletteOpen(false)} />
        </>
    );
};
