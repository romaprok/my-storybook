import React from 'react';

export type ThemeId = 'light' | 'dark';

interface ThemeProviderProps {
  children: React.ReactNode;
  themeId?: ThemeId;
}

const lightTheme = {
  '--phork-accent-color': '#0060ce',
  '--phork-accent-color-contrast': '#ffffff',
  '--phork-accent-color-L10': '#1a75d2',
  '--phork-accent-color-L20': '#3389d6',
  '--phork-accent-color-O5': 'rgba(0, 96, 206, 0.05)',
  '--phork-secondary-color': '#9c27b0',
  '--phork-secondary-color-contrast': '#ffffff',
  '--phork-success-color': '#2e7d32',
  '--phork-success-color-contrast': '#ffffff',
  '--phork-warning-color': '#ed6c02',
  '--phork-warning-color-contrast': '#ffffff',
  '--phork-error-color': '#d32f2f',
  '--phork-error-color-contrast': '#ffffff',
  '--phork-info-color': '#0288d1',
  '--phork-info-color-contrast': '#ffffff',
  '--phork-disabled-color': '#cccccc',
  '--phork-disabled-color-contrast': '#666666',
  '--phork-focus-ring-color': '#0060ce',
  '--phork-border-radius': '4px',
  '--phork-font-family': 'system-ui, -apple-system, sans-serif',
  '--phork-font-size-small': '0.8125rem',
  '--phork-font-size-medium': '0.875rem',
  '--phork-font-size-large': '0.9375rem',
  '--phork-font-weight-medium': '500',
  '--phork-spinner-color': '#ffffff',
  '--phork-spinner-track-color': 'rgba(255, 255, 255, 0.3)',
};

const darkTheme = {
  '--phork-accent-color': '#00baee',
  '--phork-accent-color-contrast': '#000000',
  '--phork-accent-color-L10': '#1ac1f0',
  '--phork-accent-color-L20': '#33c8f2',
  '--phork-accent-color-O5': 'rgba(0, 186, 238, 0.05)',
  '--phork-secondary-color': '#ce93d8',
  '--phork-secondary-color-contrast': '#000000',
  '--phork-success-color': '#66bb6a',
  '--phork-success-color-contrast': '#000000',
  '--phork-warning-color': '#ffa726',
  '--phork-warning-color-contrast': '#000000',
  '--phork-error-color': '#f44336',
  '--phork-error-color-contrast': '#ffffff',
  '--phork-info-color': '#29b6f6',
  '--phork-info-color-contrast': '#000000',
  '--phork-disabled-color': '#666666',
  '--phork-disabled-color-contrast': '#cccccc',
  '--phork-focus-ring-color': '#00baee',
  '--phork-border-radius': '4px',
  '--phork-font-family': 'system-ui, -apple-system, sans-serif',
  '--phork-font-size-small': '0.8125rem',
  '--phork-font-size-medium': '0.875rem',
  '--phork-font-size-large': '0.9375rem',
  '--phork-font-weight-medium': '500',
  '--phork-spinner-color': '#000000',
  '--phork-spinner-track-color': 'rgba(0, 0, 0, 0.3)',
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, themeId = 'light' }) => {
  const theme = themeId === 'light' ? lightTheme : darkTheme;

  return (
    <div style={theme as React.CSSProperties}>
      {children}
    </div>
  );
}; 