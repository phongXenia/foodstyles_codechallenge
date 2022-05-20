import {
  ILoginWithEmailActionBody,
  ILogInWithEmailResponse,
} from '@app/src/features/auth/redux/auth.type';
import { apolloCLient, ErrorType } from '@app/src/services/apollo';
import { MUTATION_LOGIN_WITH_EMAIL } from '@app/src/services/apollo/mutation.scheme';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const AuthActions = {
  loginWithEmail: createAsyncThunk(
    'auth/loginWithEmail',
    async (body: ILoginWithEmailActionBody, { rejectWithValue }) => {
      try {
        const response = await apolloCLient.mutate<{
          loginWithEmail: ILogInWithEmailResponse;
        }>({
          mutation: MUTATION_LOGIN_WITH_EMAIL,
          variables: body,
        });
        return response.data?.loginWithEmail;
      } catch (error) {
        return rejectWithValue((error as ErrorType)?.message);
      }
    },
  ),
};
