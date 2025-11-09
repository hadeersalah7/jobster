import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchClient from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
    isLoading: false,
    user: null
}

// login API Thunk: 
export const loginUser = createAsyncThunk(
    '/user/loginUser', async (user, thunkAPI) => {
        console.log(`Login User:  ${user}`)
    })

// Register User Thunk: 
export const registerUser = createAsyncThunk(
    "user/registerUser", async (user, thunkAPI) => {
        try {
            const response = await fetchClient.post("auth/register", user)
            return response?.data
        } catch (error) {
            console.error(error)
            thunkAPI.rejectWithValue(error.message)
        }
    }
)


const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true
        }).addCase(registerUser.fulfilled, (state, { payload }) => {
            state.isLoading = false
            // const { user } = payload
            if (payload) {
                state.user = payload
                toast.success(`Welcome ${payload.user.name}! ^_^`)
            }

        }).addCase(registerUser.rejected, (state, { payload }) => {
            state.isLoading = false;
            if (payload) toast.error("error", payload)
        })
    }
})
export default userSlice.reducer