import React, { useState, useEffect } from 'react';
import { RotateCcw, Code, Eye, ChevronDown } from 'lucide-react';
import type { ComponentItem, PropDefinition } from '../../types/registry';
import { Modal } from '../UI/Modal';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ComponentSettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: ComponentItem;
}

export const ComponentSettingsModal: React.FC<ComponentSettingsModalProps> = ({ isOpen, onClose, item }) => {
    const { tuner } = item;
    // Initialize state with default values
    const [settings, setSettings] = useState<Record<string, any>>({});
    const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

    useEffect(() => {
        if (tuner && isOpen) {
            const defaults: Record<string, any> = {};
            tuner.props.forEach(prop => {
                if (prop.defaultValue !== undefined) {
                    defaults[prop.name] = prop.defaultValue;
                }
            });
            setSettings(defaults);
        }
    }, [tuner, isOpen]);

    if (!tuner) return null;

    const TunerComponent = tuner.component;

    const handleReset = () => {
        const defaults: Record<string, any> = {};
        tuner.props.forEach(prop => {
            if (prop.defaultValue !== undefined) {
                defaults[prop.name] = prop.defaultValue;
            }
        });
        setSettings(defaults);
    };

    const generateCode = () => {
        const importStr = tuner.imports.join('\n');
        const propsStr = Object.entries(settings)
            .filter(([key, value]) => key !== 'children' && value !== undefined && value !== '' && value !== false)
            .map(([key, value]) => {
                if (value === true) return key;
                if (typeof value === 'string') return `${key}="${value}"`;
                return `${key}={${value}}`;
            })
            .join('\n    ');

        const children = settings.children || 'Button'; // Fallback for now
        const componentName = item.aiInfo?.componentName || 'Component';

        return `${importStr}

export const Example = () => (
  <${componentName}
    ${propsStr}
  >
    ${children}
  </${componentName}>
);`;
    };

    const renderControl = (prop: PropDefinition) => {
        switch (prop.type) {
            case 'select':
                return (
                    <div className="relative">
                            <select
                                value={settings[prop.name] || ''}
                                onChange={(e) => setSettings({ ...settings, [prop.name]: e.target.value })}
                                className="w-full p-2 pr-8 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-md text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-inset focus:border-transparent transition-shadow text-[var(--color-text)]"
                            >
                            {prop.options?.map(opt => (
                                <option key={opt} value={opt} className="bg-[var(--color-surface)] text-[var(--color-text)]">{opt}</option>
                            ))}
                        </select>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-secondary)]">
                            <ChevronDown size={16} />
                        </div>
                    </div>
                );
            case 'boolean':
                return (
                    <div className="flex items-center">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={settings[prop.name] || false}
                                onChange={(e) => setSettings({ ...settings, [prop.name]: e.target.checked })}
                                className="sr-only peer"
                            />
                            <div className="w-9 h-5 bg-[var(--color-border)] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[var(--color-primary)] peer-focus:ring-inset rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--color-primary)]"></div>
                            <span className="ml-2 text-sm text-[var(--color-text-secondary)]">Enabled</span>
                        </label>
                    </div>
                );
            case 'string':
                return (
                        <input
                            type="text"
                            value={settings[prop.name] || ''}
                            onChange={(e) => setSettings({ ...settings, [prop.name]: e.target.value })}
                            className="w-full p-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-inset focus:border-transparent transition-shadow text-[var(--color-text)] placeholder-[var(--color-text-secondary)]"
                            placeholder={`Enter ${prop.name}...`}
                        />
                );
            default:
                return null;
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={`Customize ${item.name}`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[600px]">
                {/* Controls Panel */}
                <div className="lg:col-span-4 overflow-y-auto pr-2 border-r border-[var(--color-border)]">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wide">Settings</h4>
                        <button
                            onClick={handleReset}
                            className="p-1.5 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] rounded-md hover:bg-[var(--color-surface-hover)] transition-colors"
                            title="Reset to Defaults"
                        >
                            <RotateCcw size={16} />
                        </button>
                    </div>
                    
                    <div className="space-y-6">
                        {tuner.props.map(prop => (
                            <div key={prop.name}>
                                <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                                    {prop.name}
                                    {prop.description && (
                                        <span className="ml-1 text-xs text-[var(--color-text-secondary)] font-normal">
                                            - {prop.description}
                                        </span>
                                    )}
                                </label>
                                {renderControl(prop)}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Preview Panel */}
                <div className="lg:col-span-8 flex flex-col h-full">
                    <div className="flex items-center space-x-1 bg-[var(--color-surface-hover)] p-1 rounded-lg mb-4 w-fit">
                        <button
                            onClick={() => setActiveTab('preview')}
                            className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${
                                activeTab === 'preview'
                                    ? 'bg-[var(--color-surface)] text-[var(--color-primary)] shadow-sm'
                                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
                            }`}
                        >
                            <Eye size={16} />
                            Preview
                        </button>
                        <button
                            onClick={() => setActiveTab('code')}
                            className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${
                                activeTab === 'code'
                                    ? 'bg-[var(--color-surface)] text-[var(--color-primary)] shadow-sm'
                                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
                            }`}
                        >
                            <Code size={16} />
                            Code
                        </button>
                    </div>

                    <div className="flex-1 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] overflow-hidden relative">
                        {activeTab === 'preview' ? (
                            <div className="absolute inset-0 flex items-center justify-center bg-[url('/grid-pattern.svg')]">
                                <div className="transform scale-150"> {/* Scale up for better visibility */}
                                    <TunerComponent {...settings} />
                                </div>
                            </div>
                        ) : (
                            <div className="absolute inset-0 overflow-auto">
                                <SyntaxHighlighter
                                    language="tsx"
                                    style={vscDarkPlus}
                                    customStyle={{ margin: 0, height: '100%', borderRadius: 0 }}
                                >
                                    {generateCode()}
                                </SyntaxHighlighter>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Modal>
    );
};

