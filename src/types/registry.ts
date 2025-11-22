import React from 'react';

export interface PropDefinition {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'select';
  options?: string[]; // For 'select' type
  defaultValue?: string | number | boolean;
  description?: string;
}

export interface TunerDefinition {
  component: React.ComponentType<any>;
  props: PropDefinition[];
  imports: string[]; // Imports required for the code snippet
}

export interface ComponentItem {
  name: string;
  description?: string;
  component: React.ComponentType<unknown>;
  code: string; // The source code to display
  props?: Record<string, unknown>; // Default props or configurable props
  
  // AI Helper Info
  aiInfo?: {
    componentName: string; // Exact export name
    prompt: string; // "Ask AI to..."
    tips?: string[]; // Additional context
  };

  // Component Tuner/Settings
  tuner?: TunerDefinition;
}

export interface ComponentFamily {
  name: string;
  description?: string;
  icon?: React.ReactNode;
  components: ComponentItem[];
}

export interface LibraryDefinition {
  id: string;
  name: string;
  description?: string;
  logo?: React.ReactNode;
  families: ComponentFamily[];
  ThemeProvider?: React.ComponentType<{ children: React.ReactNode }>;
  // Potentially add icon sets here later
  icons?: {
    name: string;
    component: React.ComponentType<unknown>;
  }[];
}

export interface Registry {
  [libraryId: string]: LibraryDefinition;
}
