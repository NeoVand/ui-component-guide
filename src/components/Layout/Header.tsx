import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Moon, Sun, Palette, Search } from 'lucide-react';
import { useAppStore } from '../../store/appStore';
import { PalettePicker } from '../Theme/PalettePicker';
import { SearchDropdown } from '../Search/SearchDropdown';
import { searchComponents, type SearchResult } from '../../utils/searchUtils';
import type { Registry } from '../../types/registry';

interface HeaderProps {
    registry: Registry;
}

export const Header: React.FC<HeaderProps> = ({ registry }) => {
    const { isDarkMode, toggleTheme, currentLibraryId, setFamily } = useAppStore();
    const [isPaletteOpen, setIsPaletteOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Perform search when query changes
    useEffect(() => {
        if (searchQuery.trim()) {
            const results = searchComponents(registry, currentLibraryId, searchQuery);
            setSearchResults(results);
            setIsSearchOpen(results.length > 0);
            setSelectedIndex(0);
        } else {
            setSearchResults([]);
            setIsSearchOpen(false);
        }
    }, [searchQuery, currentLibraryId, registry]);

    // Handle component selection
    const handleSelectComponent = useCallback((result: SearchResult) => {
        setFamily(result.familyName);
        setSearchQuery('');
        setIsSearchOpen(false);
        searchInputRef.current?.blur();
    }, [setFamily]);

    // Handle keyboard navigation
    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!isSearchOpen || searchResults.length === 0) return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex((prev) => 
                    prev < searchResults.length - 1 ? prev + 1 : prev
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
                break;
            case 'Enter':
                e.preventDefault();
                if (searchResults[selectedIndex]) {
                    handleSelectComponent(searchResults[selectedIndex]);
                }
                break;
            case 'Escape':
                e.preventDefault();
                setIsSearchOpen(false);
                searchInputRef.current?.blur();
                break;
        }
    }, [isSearchOpen, searchResults, selectedIndex, handleSelectComponent]);

    const currentLibrary = currentLibraryId ? registry[currentLibraryId] : null;

    return (
        <>
            <header className="h-16 border-b border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-6 transition-colors duration-200">
                {/* Search Bar */}
                <div className="flex-1 max-w-md">
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)] group-focus-within:text-[var(--color-primary)] transition-colors" size={18} />
                        <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search components..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            onFocus={() => {
                                if (searchQuery.trim() && searchResults.length > 0) {
                                    setIsSearchOpen(true);
                                }
                            }}
                            className="w-full pl-10 pr-4 py-2 bg-[var(--color-surface-hover)] border-none rounded-lg text-sm focus:ring-2 focus:ring-[var(--color-primary)] focus:bg-[var(--color-surface)] transition-all outline-none text-[var(--color-text)] placeholder-[var(--color-text-secondary)]"
                        />
                        <SearchDropdown
                            results={searchResults}
                            isOpen={isSearchOpen}
                            onSelect={handleSelectComponent}
                            onClose={() => setIsSearchOpen(false)}
                            selectedIndex={selectedIndex}
                            libraryName={currentLibrary?.name}
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
