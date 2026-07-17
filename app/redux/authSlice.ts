import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserType {
    id: number;
    first_name: string;
    last_name?: string;
    email: string;
    avatar?: string;
}

interface AuthState {
    user: UserType | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthUser: (state, action: PayloadAction<UserType>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        clearAuth: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const { setAuthUser, clearAuth } = authSlice.actions;
export default authSlice.reducer;