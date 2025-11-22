import React, { useEffect } from 'react';
import { useAppStore } from './store/appStore';
import { MainLayout } from './layouts/MainLayout';
import { MasonryGrid } from './components/Grid/MasonryGrid';
import { muiRegistry } from './registry/mui';
import { antdRegistry } from './registry/antd';
import type { Registry } from './types/registry';

// Initialize registry
const registry: Registry = {
  [muiRegistry.id]: muiRegistry,
  [antdRegistry.id]: antdRegistry,
};

function App() {
  const {
    currentLibraryId,
    setLibrary,
    currentFamilyName,
    setFamily
  } = useAppStore();

  // Set default library and family if none selected
  useEffect(() => {
    if (!currentLibraryId) {
      setLibrary(muiRegistry.id);
    } else if (!currentFamilyName && registry[currentLibraryId]) {
      const firstFamily = registry[currentLibraryId].families[0];
      if (firstFamily) {
        setFamily(firstFamily.name);
      }
    }
  }, [currentLibraryId, currentFamilyName, setLibrary, setFamily]);

  const currentLibrary = registry[currentLibraryId || 'mui'];
  const currentFamily = currentLibrary?.families.find(f => f.name === currentFamilyName);

  const ThemeAdapter = currentLibrary?.ThemeProvider || React.Fragment;

  return (
    <MainLayout registry={registry}>
      <ThemeAdapter>
        {currentFamily ? (
          <div className="max-w-7xl mx-auto">
            <div className="p-8">
              <h1 className="text-3xl font-bold text-[var(--color-text)] mb-2">
                {currentFamily.name}
              </h1>
              {currentFamily.description && (
                <p className="text-[var(--color-text-secondary)] max-w-3xl mb-8">
                  {currentFamily.description}
                </p>
              )}

              <MasonryGrid
                components={currentFamily.components}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a component family to view
          </div>
        )}
      </ThemeAdapter>
    </MainLayout>
  );
}

export default App;
