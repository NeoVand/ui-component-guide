import React from 'react';
import { Check } from 'lucide-react';
import { useAppStore } from '../../store/appStore';
import { colorPalettes } from '../../theme/themeConstants';
import { Modal } from '../UI/Modal';

interface PalettePickerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const PalettePicker: React.FC<PalettePickerProps> = ({ isOpen, onClose }) => {
    const { primaryColor, setPrimaryColor } = useAppStore();

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Select Color Palette" maxWidth="max-w-md">
            <div className="grid grid-cols-2 gap-4">
                {Object.entries(colorPalettes).map(([name, palette]) => (
                    <button
                        key={name}
                        onClick={() => {
                            setPrimaryColor(name);
                            onClose();
                        }}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200 ${primaryColor === name
                            ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10'
                            : 'border-[var(--color-border)] hover:border-[var(--color-primary)]/50 bg-[var(--color-surface)]'
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                <div
                                    className="w-8 h-8 rounded-full shadow-sm ring-2 ring-[var(--color-surface)] z-30"
                                    style={{ backgroundColor: palette.colors.primary }}
                                    title="Primary"
                                />
                                <div
                                    className="w-8 h-8 rounded-full shadow-sm ring-2 ring-[var(--color-surface)] z-20"
                                    style={{ backgroundColor: palette.colors.secondary }}
                                    title="Secondary"
                                />
                                <div
                                    className="w-8 h-8 rounded-full shadow-sm ring-2 ring-[var(--color-surface)] z-10"
                                    style={{ backgroundColor: palette.colors.primaryLight }}
                                    title="Light"
                                />
                            </div>
                            <span className="font-medium capitalize text-[var(--color-text)]">
                                {name}
                            </span>
                        </div>
                        {primaryColor === name && (
                            <Check size={20} className="text-[var(--color-primary)]" />
                        )}
                    </button>
                ))}
            </div>
        </Modal>
    );
};
