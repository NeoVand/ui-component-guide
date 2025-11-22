import React from 'react';
import { useAppStore } from '../../store/appStore';
import type { Registry } from '../../types/registry';

interface LibrarySelectorProps {
    registry: Registry;
}

export const LibrarySelector: React.FC<LibrarySelectorProps> = ({ registry }) => {
    const { currentLibraryId, setLibrary } = useAppStore();

    const libraries = Object.values(registry);

    return (
        <div className="px-3 py-4 border-b border-[var(--color-border)]">
            <h2 className="pl-3 text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-3">
                Select Library
            </h2>
            <div className="space-y-2">
                {libraries.map((lib) => (
                    <button
                        key={lib.id}
                        onClick={() => setLibrary(lib.id)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-3 ${currentLibraryId === lib.id
                            ? 'bg-[var(--color-selected-background)] text-[var(--color-primary)]'
                            : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text)]'
                            }`}
                    >
                        {lib.logo && (
                            <span className="flex items-center justify-center text-[1.125rem]">
                                {lib.logo}
                            </span>
                        )}
                        {lib.name}
                    </button>
                ))}
            </div>
        </div>
    );
};
