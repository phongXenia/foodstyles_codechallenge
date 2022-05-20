import { AuthActions } from '@app/src/features/auth/redux/auth.action';
import { ActionReducerMapBuilder } from '@reduxjs/toolkit/src/mapBuilders';
import { NoInfer } from '@reduxjs/toolkit/src/tsHelpers';

export const registerBuilder = (
  builder: ActionReducerMapBuilder<NoInfer<any>>,
) => {
  return builder
    .addCase(AuthActions.registerWithEmail.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(AuthActions.registerWithEmail.rejected, (state, action) => {
      state.isLoading = false;
    })
    .addCase(AuthActions.registerWithEmail.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload) {
        const { accessToken, refreshToken, user } = action.payload;
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        state.user = user;
      }
    });
};
