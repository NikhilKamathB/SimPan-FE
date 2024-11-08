"use client";

import { Sun, Moon } from "lucide-react";
import styles from "./themeSwitchButton.module.scss";

interface ThemeSwitchButtonProps {
    className?: string;
    isDarkMode: boolean;
    color?: string;
    toggleTheme: () => void;
}

export default function ThemeSwitchButton({ className, isDarkMode, color, toggleTheme }: ThemeSwitchButtonProps): React.ReactElement {

    // This component is used to switch the theme between light and dark and vice versa
    // It makes use of button to toggle the theme

    return (
        <div className={`${className} ${styles.theme_container}`}>
            <button className={styles.theme_button}
                onClick={toggleTheme} >
                <div className={`${styles.theme_button_container} ${isDarkMode ? styles.dark : styles.light} ${styles.sun}`}>
                    <Sun className={styles.sun} color={color}/>
                </div>
                <div className={`${styles.theme_button_container} ${isDarkMode ? styles.dark : styles.light} ${styles.moon}`}>
                    <Moon className={styles.moon} color={color}/>
                </div>
            </button>
        </div>
    );
}
