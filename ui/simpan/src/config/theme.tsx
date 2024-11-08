import { ThemeOptions, createTheme } from '@mui/material/styles';

// Theme constants
const components = {
    MuiCssBaseline: {
        styleOverrides: {
            body: {
                transition: 'all 0.3s ease-in-out',
            },
        },
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                transition: 'all 0.3s ease-in-out',
            },
        },
    },
};

// Light theme options
const lightThemeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#6e57e0',
        },
        secondary: {
            main: '#9c27b0',
        },
    },
    components: components,
};

// Dark theme options
const darkThemeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#6e57e0',
        },
        secondary: {
            main: '#9c27b0',
        },
    },
    components: components,
};

// Light theme
export const lightTheme = createTheme({
    ...lightThemeOptions,
    cssVariables: true
});

// Dark theme
export const darkTheme = createTheme({
    ...darkThemeOptions,
    cssVariables: true
});