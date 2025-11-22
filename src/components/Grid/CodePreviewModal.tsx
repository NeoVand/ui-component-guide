import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Modal } from '../UI/Modal';
import type { ComponentItem } from '../../types/registry';

interface CodePreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: ComponentItem;
}

export const CodePreviewModal: React.FC<CodePreviewModalProps> = ({ isOpen, onClose, item }) => {
    const Component = item.component;

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={item.name} maxWidth="max-w-5xl">
            <div className="flex flex-col h-[80vh] -m-6">
                {/* Preview Section */}
                <div className="flex-1 bg-[var(--color-surface-hover)] p-8 flex items-center justify-center border-b border-[var(--color-border)] overflow-y-auto min-h-[300px]">
                    <div className="w-full flex justify-center">
                        <Component />
                    </div>
                </div>

                {/* Code Section */}
                <div className="flex-1 bg-[#1e1e1e] overflow-hidden flex flex-col min-h-[300px] rounded-b-xl">
                    <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-[#3e3e42] text-xs text-gray-400">
                        <span>Example Code</span>
                        <button
                            className="hover:text-white transition-colors"
                            onClick={() => navigator.clipboard.writeText(item.code)}
                        >
                            Copy
                        </button>
                    </div>
                    <div className="flex-1 overflow-auto custom-scrollbar">
                        <SyntaxHighlighter
                            language="tsx"
                            style={vscDarkPlus}
                            customStyle={{ margin: 0, padding: '1.5rem', background: 'transparent', fontSize: '13px' }}
                            showLineNumbers={true}
                            wrapLines={true}
                        >
                            {item.code}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
