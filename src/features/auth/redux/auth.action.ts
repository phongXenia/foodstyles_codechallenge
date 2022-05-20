import {
  ILogInWithEmailResponse,
  RegisterPayload,
} from '@app/src/features/auth/redux/auth.type';
import { apolloCLient } from '@app/src/services/apollo';
import {
  MUTATION_LOGIN_WITH_EMAIL,
  MUTATION_REGISTER_WITH_EMAIL,
} from '@app/src/services/apollo/mutation.scheme';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const AuthActions = {
  registerWithEmail: createAsyncThunk(
    'auth/registerWithEmail',
    async (payload: RegisterPayload, { rejectWithValue }) => {
      try {
        const { name, email, password } = payload;
        const response = await apolloCLient.mutate<{
          signUpWithEmail?: ILogInWithEmailResponse;
        }>({
          mutation: MUTATION_REGISTER_WITH_EMAIL,
          variables: {
            name,
            email,
            password,
          },
        });

        return response.data?.signUpWithEmail;
      } catch (error) {
        rejectWithValue(error);
      }
    },
  ),
  loginWithEmail: createAsyncThunk(
    'auth/loginWithEmail',
    async (body: any, { rejectWithValue }) => {
      try {
        const response = await apolloCLient.mutate<{
          loginWithEmail: ILogInWithEmailResponse;
        }>({
          mutation: MUTATION_LOGIN_WITH_EMAIL,
          variables: {
            email: 'phong.nguyen@xenia.tech',
            password: 'iloveXenia123!@#',
          },
        });
        return response.data?.loginWithEmail;
      } catch (error) {
        rejectWithValue(error);
      }
    },
  ),
};
