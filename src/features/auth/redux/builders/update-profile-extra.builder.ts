import { AuthActions } from '@app/src/features/auth/redux/auth.action';
import { ActionReducerMapBuilder } from '@reduxjs/toolkit/src/mapBuilders';
import { NoInfer } from '@reduxjs/toolkit/src/tsHelpers';
import { showMessage } from 'react-native-flash-message';

export const updateProfileExtraBuilder = (
  builder: ActionReducerMapBuilder<NoInfer<any>>,
) => {
  return builder
    .addCase(AuthActions.updateUserProfile.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(AuthActions.updateUserProfile.rejected, (state, action) => {
      showMessage({ message: action.payload as string, type: 'danger' });
      state.isLoading = false;
    })
    .addCase(AuthActions.updateUserProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload) {
        const { name, email } = action.payload;
        state.user = { ...state.user, name, email };
        showMessage({ message: 'Update user successfully', type: 'success' });
      }
    });
};
