"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@/app/globalTheme';
import SimpleAppBar from '@/app/components/appbar/simpleAppbar';
import ThemeSwitchButton from '@/app/components/theme-switch/themeSwitchButton';
import styles from './header.module.scss';

export default function LoginHeader() {
    // Get the theme context, the visibility state and set the router
    const { isDarkMode, toggleTheme } = useTheme();
    return (
        <SimpleAppBar position="fixed">
            <Typography variant="h6">SimPan</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "1rem" }}>
                <ThemeSwitchButton className={styles.nav_theme_switch} isDarkMode={isDarkMode} toggleTheme={toggleTheme} color='var(--mui-palette-primary-contrastText)' />
            </Box>
        </SimpleAppBar>
    );
}