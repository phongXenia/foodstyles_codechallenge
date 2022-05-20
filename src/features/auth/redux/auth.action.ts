import {
  ILoginWithEmailActionBody,
  ILogInWithEmailResponse,
  IUpdateUserPayload,
  IUser,
  RegisterPayload,
} from '@app/src/features/auth/redux/auth.type';
import { apolloCLient, ErrorType } from '@app/src/services/apollo';
import {
  MUTATION_LOGIN_WITH_EMAIL,
  MUTATION_REGISTER_WITH_EMAIL,
  MUTATION_UPDATE_USER_PROFILE,
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
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    },
  ),
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
  updateUserProfile: createAsyncThunk(
    'auth/updateUser',
    async (body: IUpdateUserPayload, { rejectWithValue }) => {
      try {
        const response = await apolloCLient.mutate<{
          updateUser: IUser;
        }>({
          mutation: MUTATION_UPDATE_USER_PROFILE,
          variables: body,
        });
        return response.data?.updateUser;
      } catch (error) {
        return rejectWithValue((error as ErrorType)?.message);
      }
    },
  ),
};
