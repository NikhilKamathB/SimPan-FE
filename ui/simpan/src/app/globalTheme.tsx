import CssBaseline from '@mui/material/CssBaseline';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles';

// Define the context type
interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

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
const lightTheme = createTheme({
    ...lightThemeOptions,
    cssVariables: true
});

// Dark theme
const darkTheme = createTheme({
    ...darkThemeOptions,
    cssVariables: true
});

// Create context for the theme with initial values
const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

// Create custom theme provider
export const MaterialThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // State variables
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    // Effect to get the saved theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        setIsDarkMode(savedTheme === "dark" ? true : false);
    }, []);
    // Effect to handle the theme change
    useEffect(() => {
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);
    // Toggle the theme
    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };
    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

// Custom hook to use the theme context
export const useTheme = () => {
    return useContext(ThemeContext);
};