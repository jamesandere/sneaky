import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "./api";
import axios from "axios";

const initialState = {
  products: [],
  fetchStatus: null,
  createStatus: null,
};

export const productsCreate = createAsyncThunk(
  "products/productsCreate",
  async (values, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${url}/products`, values);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(productsCreate.pending, (state, action) => {
        state.createStatus = "pending";
      })
      .addCase(productsCreate.fulfilled, (state, action) => {
        state.createStatus = "success";
        state.products = action.payload;
      })
      .addCase(productsCreate.rejected, (state, action) => {
        state.createStatus = "rejected";
      });
  },
});

export default productsSlice.reducer;
