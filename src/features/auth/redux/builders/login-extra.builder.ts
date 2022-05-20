import { generateErrorMessage } from '@app/src/constants/errorMessage';
import { AuthActions } from '@app/src/features/auth/redux/auth.action';
import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { NoInfer } from '@reduxjs/toolkit/dist/tsHelpers';

export const loginBuilder = (
  builder: ActionReducerMapBuilder<NoInfer<any>>,
) => {
  return builder
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
};
