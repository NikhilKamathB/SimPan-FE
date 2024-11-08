"use client"

import Box from '@mui/material/Box';
import { LogIn } from "lucide-react";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import React, { useState, useEffect } from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import styles from "./page.module.scss";
import { toggleTheme } from '@/state/theme/themeSlice';
import ImageRoll from "@/components/image-roll/imageRoll";
import SimpleAppBar from "@/components/appbar/simpleAppbar";
import { useAppSelector, useAppDispatch } from '@/hooks/manager';
import ThemeSwitchButton from "@/components/theme-switch/themeSwitchButton";


export default function Index(): React.ReactElement {
  
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className={styles.home_container}>
      <SimpleAppBar position="fixed">
        <Typography variant="h6">SimPan</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "1rem" }}>
          <LogIn className={styles.home_content_nav_login} color='var(--mui-palette-primary-contrastText)' onClick={() => router.push('/login')} />
          <ThemeSwitchButton className={styles.home_content_nav_theme_switch} isDarkMode={isDarkMode} toggleTheme={() => dispatch(toggleTheme())} color='var(--mui-palette-primary-contrastText)' />
        </Box>
      </SimpleAppBar>
      <div className={styles.home_content}>
        <Grid className={styles.home_content_grid} container spacing={2}>
          <Grid className={styles.home_content_col_1} size={{ xs: 12, sm: 6 }}>
            <ImageRoll src="/img/logo.png" alt="Simpan Logo" width={512} height={512} />
          </Grid>
          <Grid className={styles.home_content_col_2} size={{ xs: 12, sm: 6 }}>
            <Card className={`${styles.home_content_card} ${isVisible ? styles.home_content_card_visible : styles.home_content_card_hidden}`}>
              <CardHeader
                title="SimPan | σύμπαν"
                align="center"
                className={styles.home_content_card_header}
              />
              <CardContent>
                <Typography variant="body1">
                  SimPan emerges as a pioneering application designed to revolutionize workflow automation, content creation, and collaboration, enabling expedited development.
                  This web-based platform leverages artificial intelligence to meet our needs.
                  Aimed at reducing technical barriers, SimPan offers an intuitive user interface that abstracts the complexities of coding, significantly accelerating the development cycle.
                  More updates are coming soon. Stay tuned!
                </Typography>
              </CardContent>
              <CardActions className={styles.home_content_card_actions}>
                <Button variant="contained" className={styles.home_content_card_button}>Draw and Solve</Button>
                <Button variant="contained" className={styles.home_content_card_button}>Chat and Solve</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
  
}