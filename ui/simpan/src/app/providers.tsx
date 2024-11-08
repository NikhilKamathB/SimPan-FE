"use client";

import React from 'react';
import { Provider } from "react-redux";
import CssBaseline from '@mui/material/CssBaseline';
import ThemeWrapper from './theme';
import { store } from "@/state/store";


export function Providers({ children }: { children: React.ReactNode }) {

    return (
        <Provider store={store}>
            <ThemeWrapper>
                <CssBaseline />
                {children}
            </ThemeWrapper>
        </Provider>
    );
    
}