"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './header.module.scss';
import { toggleTheme } from '@/state/theme/themeSlice';
import SimpleAppBar from '@/components/appbar/simpleAppbar';
import ThemeSwitchButton from '@/components/theme-switch/themeSwitchButton';
import { useAppSelector, useAppDispatch } from '@/hooks/manager';


export default function LoginHeader() {
    
    const dispatch = useAppDispatch();
    const isDarkMode = useAppSelector(state => state.theme.isDarkMode);

    return (
        <SimpleAppBar position="fixed" placementFixed>
            <Typography variant="h6">SimPan</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "1rem" }}>
                <ThemeSwitchButton className={styles.nav_theme_switch} isDarkMode={isDarkMode} toggleTheme={() => dispatch(toggleTheme())} color='var(--mui-palette-primary-contrastText)' />
            </Box>
        </SimpleAppBar>
    );
    
}