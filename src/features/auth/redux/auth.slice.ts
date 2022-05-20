import {
  IAuthState,
  ILoggedInUserPayloadAction,
} from '@app/src/features/auth/redux/auth.type';
import { RootState } from '@app/src/redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerBuilder } from '@app/src/features/auth/redux/builders/register-extra.builder';
import { loginBuilder } from '@app/src/features/auth/redux/builders/login-extra.builder';

const initialState: IAuthState = {
  isLoading: false,
  user: {
    email: '',
    id: '',
    name: '',
  },
  accessToken: '',
  refreshToken: '',
  errorMessage: '',
};

const authSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    resetAuthState: () => {
      return initialState;
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setLoggedInUser(state, action: PayloadAction<ILoggedInUserPayloadAction>) {
      const { accessToken, refreshToken, user } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.user = user;
    },
  },
  extraReducers: (builder) => {
    registerBuilder(builder);
    loginBuilder(builder);
  },
});

export const { setIsLoading, setErrorMessage, resetAuthState } =
  authSlice.actions;
export default authSlice.reducer;
export const authSelector = (state: RootState) => state.auth;
