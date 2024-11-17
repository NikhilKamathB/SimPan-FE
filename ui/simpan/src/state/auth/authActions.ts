import { createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL } from '@/config/constants';

// Login action
export const login = createAsyncThunk(
    "auth/login",
    async (payload: { email: string, password: string }, thunkAPI) => {
        try {
            const response = await fetch(`${BASE_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            return response.json();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);