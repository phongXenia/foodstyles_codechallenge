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
      state.errorMessage = action.payload;
      state.isLoading = false;
    })
    .addCase(AuthActions.registerWithEmail.fulfilled, (state) => {
      state.isLoading = false;
    });
};
