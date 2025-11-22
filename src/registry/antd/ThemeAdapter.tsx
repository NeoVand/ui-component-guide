import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { useAppStore } from '../../store/appStore';
import { colorPalettes, type PaletteName } from '../../theme/themeConstants';

export const AntdThemeAdapter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isDarkMode, primaryColor } = useAppStore();
    
    const palette = colorPalettes[primaryColor as PaletteName] || colorPalettes.blue;

    return (
        <ConfigProvider
            theme={{
                algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
                token: {
                    colorPrimary: palette.colors.primary,
                    colorBgContainer: isDarkMode ? palette.dark.surface : '#ffffff',
                    colorBorder: isDarkMode ? palette.dark.border : palette.light.border,
                },
            }}
        >
            {/* 
              Ant Design sets global styles on body by default only if using App component or specific resets.
              Since we are inside a specific area, we just wrap children.
              Note: Ant Design text color might conflict with Tailwind's reset if not careful, 
              but ConfigProvider usually handles component-internal styles well.
            */}
            <div style={{ 
                color: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.88)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
            }}>
                {children}
            </div>
        </ConfigProvider>
    );
};

