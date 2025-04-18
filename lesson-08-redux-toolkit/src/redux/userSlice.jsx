import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
};

export const getAllUsers = createAsyncThunk("users", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(response.data);
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {//used if there is no http request
    
  },
  extraReducers: (builder) => { //used if there is http request
   builder.addCase(getAllUsers.fulfilled, (state, action) => {
    state.users = action.payload;
   })

  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
