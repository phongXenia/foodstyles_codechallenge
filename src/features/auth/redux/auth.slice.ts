import {
  IAuthState,
  ILoggedInUserPayloadAction,
} from '@app/src/features/auth/redux/auth.type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: IAuthState = {
  isLoading: false,
  user: null,
  accessToken: '',
  refreshToken: '',
};

const authSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setLoggedInUser(state, action: PayloadAction<ILoggedInUserPayloadAction>) {
      const {accessToken, refreshToken, user} = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.user = user;
    },
  },
});

export const {setLoggedInUser, setIsLoading} = authSlice.actions;
export default authSlice.reducer;
