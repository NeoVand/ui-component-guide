import React, { useState } from 'react';
import { Code2, Info, Settings2 } from 'lucide-react';
import type { ComponentItem } from '../../types/registry';
import { CodePreviewModal } from './CodePreviewModal';
import { ComponentInfoModal } from './ComponentInfoModal';
import { ComponentSettingsModal } from './ComponentSettingsModal';

interface ComponentCardProps {
    item: ComponentItem;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({ item }) => {
    const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
    
    const Component = item.component;

    return (
        <>
            <div className="group bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] overflow-hidden hover:shadow-lg hover:border-[var(--color-primary)]/30 transition-all duration-300">
                {/* Header */}
                <div className="px-4 py-3 border-b border-[var(--color-border)] flex justify-between items-center bg-[var(--color-surface-hover)]/50">
                    <h3 className="font-medium text-sm text-[var(--color-text)]">{item.name}</h3>
                    <div className="flex items-center gap-1 opacity-100 transition-opacity duration-200">
                        {/* Settings Button - Only if tuner is available */}
                        {item.tuner && (
                            <button
                                onClick={() => setIsSettingsModalOpen(true)}
                                className="p-1.5 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] rounded-md hover:bg-[var(--color-surface-hover)] transition-colors"
                                title="Customize Component"
                            >
                                <Settings2 size={16} />
                            </button>
                        )}

                        {/* Info Button - If aiInfo or description exists */}
                        {(item.aiInfo || item.description) && (
                            <button
                                onClick={() => setIsInfoModalOpen(true)}
                                className="p-1.5 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] rounded-md hover:bg-[var(--color-surface-hover)] transition-colors"
                                title="Component Info"
                            >
                                <Info size={16} />
                            </button>
                        )}
                        
                        {/* Code Button */}
                        <button
                            onClick={() => setIsCodeModalOpen(true)}
                            className="p-1.5 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] rounded-md hover:bg-[var(--color-surface-hover)] transition-colors"
                            title="View Code"
                        >
                            <Code2 size={16} />
                        </button>
                    </div>
                </div>

                {/* Preview Area */}
                <div className="p-8 flex justify-center items-center min-h-[200px] bg-[var(--color-surface)] relative transition-colors duration-200">
                    <div className="w-full flex justify-center">
                        <Component />
                    </div>
                </div>
            </div>

            <CodePreviewModal
                isOpen={isCodeModalOpen}
                onClose={() => setIsCodeModalOpen(false)}
                item={item}
            />

            <ComponentInfoModal
                isOpen={isInfoModalOpen}
                onClose={() => setIsInfoModalOpen(false)}
                item={item}
            />

            <ComponentSettingsModal
                isOpen={isSettingsModalOpen}
                onClose={() => setIsSettingsModalOpen(false)}
                item={item}
            />
        </>
    );
};
