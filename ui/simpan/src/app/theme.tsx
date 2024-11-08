"use client";

import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { useAppSelector } from '@/hooks/manager';
import { selectThemeMode } from '@/state/theme/themeSlice';


export default function ThemeWrapper({ children }: { children: React.ReactNode }) {

    const theme = useAppSelector(selectThemeMode);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
    
};