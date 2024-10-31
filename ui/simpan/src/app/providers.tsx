"use client";

import React from 'react';
import { MaterialThemeProvider } from './globalTheme';

export function Providers({ children }: { children: React.ReactNode }) {
    // This component handles:
    // - Theme switching
    return (
        <MaterialThemeProvider>
            <div className="main_provider">
                {children}
            </div>
        </MaterialThemeProvider>
    );
}