import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/state/store";


// Define the auth state
interface AuthState {
    isLoading: boolean;
    accessToken: string | null;
    refreshToken: string | null;
    error: Array<string> | null;
    user: {
        id: number;
        username: string;
    } | null;
}


// Define the initial state
const initialState: AuthState = {
    isLoading: false,
    accessToken: null,
    refreshToken: null,
    user: null,
    error: null,
};

// Helper - login


// Define the auth slice
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
});
export default authSlice.reducer;