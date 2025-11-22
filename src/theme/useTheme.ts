import { useContext } from 'react';
import { ThemeContext } from './ThemeContextDefinition';

export const useTheme = () => useContext(ThemeContext);
