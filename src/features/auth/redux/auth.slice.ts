import { generateErrorMessage } from '@app/src/constants/errorMessage';
import { AuthActions } from '@app/src/features/auth/redux/auth.action';
import {
  IAuthState,
  ILoggedInUserPayloadAction,
} from '@app/src/features/auth/redux/auth.type';
import { RootState } from '@app/src/redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IAuthState = {
  isLoading: false,
  user: null,
  accessToken: '',
  refreshToken: '',
  errorMessage: '',
};

const authSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
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

export const { setLoggedInUser, setIsLoading, setErrorMessage } =
  authSlice.actions;
export default authSlice.reducer;
export const authSelector = (state: RootState) => state.auth;
