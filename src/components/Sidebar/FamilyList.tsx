import React from 'react';
import { useAppStore } from '../../store/appStore';
import type { Registry } from '../../types/registry';

interface FamilyListProps {
    registry: Registry;
}

export const FamilyList: React.FC<FamilyListProps> = ({ registry }) => {
    const { currentLibraryId, currentFamilyName, setFamily } = useAppStore();

    if (!currentLibraryId || !registry[currentLibraryId]) {
        return (
            <div className="p-4 text-sm text-gray-500">
                Please select a library to view components.
            </div>
        );
    }

    const families = registry[currentLibraryId].families;

    return (
        <div className="flex-1 overflow-y-auto py-6">
            <div className="space-y-1 px-3">
                {families.map((family) => (
                    <button
                        key={family.name}
                        onClick={() => setFamily(family.name)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-3 ${currentFamilyName === family.name
                            ? 'bg-[var(--color-surface-hover)] text-[var(--color-text)] font-medium'
                            : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)]'
                            }`}
                    >
                        {family.icon && <span className="opacity-70">{family.icon}</span>}
                        {family.name}
                    </button>
                ))}
            </div>
        </div>
    );
};
