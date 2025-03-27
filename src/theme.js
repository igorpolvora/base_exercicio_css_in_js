// src/theme.js
export const theme = {
  colors: {
    primary: '#2c3e50',
    secondary: '#e74c3c'
  }
};

// src/App.js
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';