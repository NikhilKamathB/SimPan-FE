import { Theme } from "@mui/material/styles";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/state/store";
import { lightTheme, darkTheme } from "@/config/theme";


interface ThemeState {
    isDarkMode: boolean;
    themeMode: "light" | "dark";
}


const initialState: ThemeState = {
    isDarkMode: false,
    themeMode: "light",
};


export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode;
            state.themeMode = state.isDarkMode ? "dark" : "light";
        },
    },
});
export const selectThemeMode = (state: RootState): Theme => {
    return state.theme.themeMode === "dark" ? darkTheme : lightTheme;
}
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;