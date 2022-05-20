import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    setLoggedInUser(state, action) {
      state.user = action.payload;
      return state;
    },
  },
});

export const {setLoggedInUser} = authSlice.actions;
export default authSlice.reducer;
