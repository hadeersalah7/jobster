import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchClient from "../../utils/axios";
import { toast } from "react-toastify";
import {
    getUserFromLocalStorage,
    saveUserToLocalStorage,
} from "../../utils/localStorage";

const initialState = {
    isLoading: false,
    user: getUserFromLocalStorage(),
    isSidebarOpen: false,
};

// login API Thunk:
export const loginUser = createAsyncThunk(
    "/user/loginUser",
    async (user, thunkAPI) => {
        try {
            const response = await fetchClient.post("auth/login    ", user);
            return response?.data;
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue(error.response?.data?.msg);
        }
    }
);

// Register User Thunk:
export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (user, thunkAPI) => {
        try {
            const response = await fetchClient.post("auth/register", user);
            return response?.data;
        } catch (error) {
            console.error(error);
            return thunkAPI.rejectWithValue(error.response?.data?.msg);
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
    },
    extraReducers: (builder) => {
        // register cases:
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                // const { user } = payload
                if (payload) {
                    state.user = payload;
                    saveUserToLocalStorage(payload);
                    toast.success(`Welcome ${payload.user.name}! ^_^`);
                }
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                if (payload) toast.error(payload);
            });
        // Login cases:
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                if (payload) {
                    state.user = payload;
                    saveUserToLocalStorage(payload);
                    toast.success(`Welcome Back ${payload.user.name}! ^_^`);
                }
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                if (payload) toast.error(payload);
            });
    },
});
export const { toggleSidebar } = userSlice.actions;
export default userSlice.reducer;
