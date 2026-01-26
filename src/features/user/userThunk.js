import customFetch from "../../utils/axios";

import { logoutUser } from "./userSlice";

export const registerUserThunk = async (url, user, thunkAPI) => {
    try {
        const res = await customFetch.post(url, user);
        return res?.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
};

export const loginUserThunk = async (url, user, thunkAPI) => {
    try {
        const resp = await customFetch.post(url, user);
        return resp?.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
};

export const updateUserThunk = async (url, user, thunkAPI) => {
    try {
        const response = await customFetch.patch(url, user, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.user.token}`,
            },
        });
        return response?.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data.msg);
    }
};
