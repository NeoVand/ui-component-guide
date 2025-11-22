import React from 'react';
import { Copy, Check } from 'lucide-react';
import type { ComponentItem } from '../../types/registry';
import { Modal } from '../UI/Modal';

interface ComponentInfoModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: ComponentItem;
}

export const ComponentInfoModal: React.FC<ComponentInfoModalProps> = ({ isOpen, onClose, item }) => {
    const [copied, setCopied] = React.useState(false);
    const { aiInfo, description } = item;

    const handleCopy = () => {
        if (aiInfo?.prompt) {
            navigator.clipboard.writeText(aiInfo.prompt);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={aiInfo ? `Use ${item.name} with AI` : `About ${item.name}`}>
            <div className="space-y-6">
                {description && (
                    <div>
                        <h4 className="text-sm font-medium text-[var(--color-text-secondary)] mb-2 uppercase tracking-wide">Description</h4>
                        <p className="text-sm text-[var(--color-text)] leading-relaxed">{description}</p>
                    </div>
                )}

                {aiInfo && (
                    <>
                        <div>
                            <h4 className="text-sm font-medium text-[var(--color-text-secondary)] mb-2 uppercase tracking-wide">Component Name</h4>
                            <div className="p-3 bg-[var(--color-surface-hover)] rounded-lg border border-[var(--color-border)] font-mono text-sm text-[var(--color-primary)]">
                                {aiInfo.componentName}
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide">Prompt</h4>
                                <button
                                    onClick={handleCopy}
                                    className="text-xs flex items-center gap-1 text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors"
                                >
                                    {copied ? <Check size={14} /> : <Copy size={14} />}
                                    {copied ? 'Copied' : 'Copy'}
                                </button>
                            </div>
                            <div className="relative">
                                <pre className="p-4 bg-[var(--color-surface-hover)] rounded-lg border border-[var(--color-border)] text-sm overflow-x-auto whitespace-pre-wrap">
                                    {aiInfo.prompt}
                                </pre>
                            </div>
                        </div>

                        {aiInfo.tips && aiInfo.tips.length > 0 && (
                            <div>
                                <h4 className="text-sm font-medium text-[var(--color-text-secondary)] mb-2 uppercase tracking-wide">Tips</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-[var(--color-text)] opacity-80">
                                    {aiInfo.tips.map((tip, index) => (
                                        <li key={index}>{tip}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </>
                )}
            </div>
        </Modal>
    );
};

