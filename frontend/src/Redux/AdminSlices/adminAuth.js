import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// import { getDecodedToken } from "../../utils/decodeJwtAdminToken";

const HOSTNAME = process.env.NEXT_PUBLIC_BACKENDHOSTNAME;

export const createAdminAsync = createAsyncThunk(
  "admin/createAdmin",
  async ({ email, fullName, password }) => {
    try {
      const response = await axios.post(`${HOSTNAME}/admin/auth/signup`, {
        email: email,
        fullName: fullName,
        password: password,
      });

      return response.data;
    } catch (error) {
      console.log("createUserAsync Error - ", error.response);
    }
  }
);

export const loginAdminAsync = createAsyncThunk(
  "admin/loginAdmin",
  async ({ email, password }) => {
    try {
      console.log("loginAdminAsync - ", email, password);
      const response = await axios.post(`${HOSTNAME}/admin/auth/login`, {
        email: email,
        password: password,
      });

      return response.data;
    } catch (error) {
      console.log("loginUserAsync Error  ", error.response);
    }
  }
);

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  // loggedData: {
  //   isUserLogged: getDecodedToken?.isUserLogged || null,
  //   id: getDecodedToken?.id || null,
  //   fullName: getDecodedToken?.fullName || null,
  //   email: getDecodedToken?.email || null,
  // },
};

export const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(createAdminAsync.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(createAdminAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })

      .addCase(createAdminAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })

      .addCase(loginAdminAsync.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(loginAdminAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })

      .addCase(loginAdminAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default adminAuthSlice.reducer;
