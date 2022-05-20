import { generateErrorMessage } from '@app/src/constants/errorMessage';
import { AuthActions } from '@app/src/features/auth/redux/auth.action';
import {
  IAuthState,
  ILoggedInUserPayloadAction,
} from '@app/src/features/auth/redux/auth.type';
import { RootState } from '@app/src/redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerBuilder } from '@app/src/features/auth/redux/builders/register-extra.builder';

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

    builder
      .addCase(AuthActions.loginWithEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AuthActions.loginWithEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = generateErrorMessage(String(action.payload));
      })
      .addCase(AuthActions.loginWithEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          const { accessToken, refreshToken, user } = action.payload;
          state.accessToken = accessToken;
          state.refreshToken = refreshToken;
          state.user = user;
        }
      });
  },
});

export const { setIsLoading, setErrorMessage, resetAuthState } =
  authSlice.actions;
export default authSlice.reducer;
export const authSelector = (state: RootState) => state.auth;
