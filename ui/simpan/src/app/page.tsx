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
import { useTheme } from './globalTheme';
import ImageRoll from "./components/image-roll/imageRoll";
import SimpleAppBar from "./components/appbar/simpleAppbar";
import ThemeSwitchButton from "./components/theme-switch/themeSwitchButton";

export default function Index(): React.ReactElement {
  // Get the theme context, the visibility state and set the router
  const { isDarkMode, toggleTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  // Set effect to set the visibility state to true upon loading
  useEffect(() => {
    setIsVisible(true);
  }, []);
  // Return the main container with the header, content, and footer
  return (
    <div className={styles.main_container}>
      <SimpleAppBar position="fixed">
        <Typography variant="h6">SimPan</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "1rem" }}>
          <LogIn className={styles.main_content_nav_login} color='var(--mui-palette-primary-contrastText)' onClick={() => router.push('/login')} />
          <ThemeSwitchButton className={styles.main_content_nav_theme_switch} isDarkMode={isDarkMode} toggleTheme={toggleTheme} color='var(--mui-palette-primary-contrastText)' />
        </Box>
      </SimpleAppBar>
      <div className={styles.main_content}>
        <Grid className={styles.main_content_grid} container spacing={2}>
          <Grid className={styles.main_content_col_1} size={{ xs: 12, sm: 6 }}>
            <ImageRoll src="/img/logo.png" alt="Simpan Logo" width={512} height={512} />
          </Grid>
          <Grid className={styles.main_content_col_2} size={{ xs: 12, sm: 6 }}>
            <Card className={`${styles.main_content_card} ${isVisible ? styles.main_content_card_visible : styles.main_content_card_hidden}`}>
              <CardHeader
                title="SimPan | σύμπαν"
                align="center"
                className={styles.main_content_card_header}
              />
              <CardContent>
                <Typography variant="body1">
                  SimPan emerges as a pioneering application designed to revolutionize workflow automation, content creation, and collaboration, enabling expedited development. 
                  This web-based platform leverages artificial intelligence to meet our needs. 
                  Aimed at reducing technical barriers, SimPan offers an intuitive user interface that abstracts the complexities of coding, significantly accelerating the development cycle.
                  More updates are coming soon. Stay tuned!
                </Typography>
              </CardContent>
              <CardActions className={styles.main_content_card_actions}>
                <Button variant="contained" className={styles.main_content_card_button}>Draw and Solve</Button>
                <Button variant="contained" className={styles.main_content_card_button}>Chat and Solve</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

