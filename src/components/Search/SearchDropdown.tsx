import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import type { SearchResult } from '../../utils/searchUtils';

interface SearchDropdownProps {
  results: SearchResult[];
  isOpen: boolean;
  onSelect: (result: SearchResult) => void;
  onClose: () => void;
  selectedIndex: number;
  libraryName?: string;
}

export const SearchDropdown: React.FC<SearchDropdownProps> = ({
  results,
  isOpen,
  onSelect,
  onClose,
  selectedIndex,
  libraryName,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen || results.length === 0) {
    return null;
  }

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full left-0 right-0 mt-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg shadow-lg overflow-hidden z-50 max-h-[400px] overflow-y-auto"
    >
      {libraryName && (
        <div className="px-3 py-2 text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider bg-[var(--color-surface-hover)] border-b border-[var(--color-border)]">
          Searching in {libraryName}
        </div>
      )}
      <div className="py-1">
        {results.map((result, index) => (
          <button
            key={`${result.familyName}-${result.componentName}`}
            onClick={() => onSelect(result)}
            className={`w-full text-left px-4 py-3 transition-colors flex items-start gap-3 group ${
              index === selectedIndex
                ? 'bg-[var(--color-selected-background)] text-[var(--color-text)]'
                : 'text-[var(--color-text)] hover:bg-[var(--color-surface-hover)]'
            }`}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{result.componentName}</span>
                <ChevronRight
                  size={14}
                  className={`text-[var(--color-text-secondary)] transition-transform ${
                    index === selectedIndex ? 'translate-x-1' : ''
                  }`}
                />
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-[var(--color-text-secondary)]">
                  {result.familyName}
                </span>
                {result.description && (
                  <>
                    <span className="text-[var(--color-text-secondary)]">•</span>
                    <span className="text-xs text-[var(--color-text-secondary)] truncate">
                      {result.description}
                    </span>
                  </>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

