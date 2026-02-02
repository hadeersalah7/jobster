import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import fetchClient from "./../../utils/axios";

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: "",
};

export const createJob = createAsyncThunk("job/createJob", async (job, thunkAPI) => {
  try {
    const response = await fetchClient.post("/job", job, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.user.token}`,
      },
    });
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: () => {
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.location || ''
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Job Created!")
      }).addCase(createJob.rejected, (state, {payload}) => {
        state.isLoading = false;
        if (payload) return toast.error(payload)
      });
  },
});

export const { handleChange, clearValues } = jobSlice.actions;
export default jobSlice.reducer;
