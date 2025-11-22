import React from 'react';
import { LibrarySelector } from '../components/Sidebar/LibrarySelector';
import { FamilyList } from '../components/Sidebar/FamilyList';
import { Header } from '../components/Layout/Header';
import type { Registry } from '../types/registry';
import { ThemeProvider } from '../theme/ThemeContext';

interface MainLayoutProps {
    registry: Registry;
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ registry, children }) => {
    return (
        <ThemeProvider>
            <div className="flex h-screen font-sans">
                {/* Sidebar */}
                <aside className="w-72 flex-shrink-0 border-r border-[var(--color-border)] flex flex-col bg-[var(--color-surface)]/80 backdrop-blur-xl z-40 transition-colors duration-200">
                    <div className="h-16 flex items-center px-6 border-b border-[var(--color-border)]">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] rounded-lg flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/20">
                                <span className="text-white font-bold text-sm">UI</span>
                            </div>
                            <span className="font-bold text-xl tracking-tight text-[var(--color-text)]">
                                Atlas
                            </span>
                        </div>
                    </div>

                    <LibrarySelector registry={registry} />
                    <FamilyList registry={registry} />
                </aside>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col min-w-0">
                    <Header registry={registry} />
                    <main className="flex-1 overflow-y-auto scroll-smooth">
                        {children}
                    </main>
                </div>
            </div>
        </ThemeProvider>
    );
};
