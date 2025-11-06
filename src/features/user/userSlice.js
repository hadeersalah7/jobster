import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    user: null
}

const userSlice = createSlice({
    name: "user",
    initialState
})

// login API Thunk: 
export const loginUser = createAsyncThunk(
    '/user/loginUser', async (user, thunkAPI) => {
        console.log(`Login User:  ${user}`)
})

// Register User Thunk: 
export const registerUser = createAsyncThunk(
    "user/registerUser", async (user, thunkAPI) => {
        console.log(`RegisterUser: ${user}`)
    }
)
export default userSlice.reducer