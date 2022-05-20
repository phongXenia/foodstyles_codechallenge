import {
  ILoginWithEmailActionBody,
  ILogInWithEmailResponse,
  RegisterPayload,
} from '@app/src/features/auth/redux/auth.type';
import { SCREEN_NAME } from '@app/src/navigation/StackScreens';
import { apolloCLient, ErrorType } from '@app/src/services/apollo';
import {
  MUTATION_LOGIN_WITH_EMAIL,
  MUTATION_REGISTER_WITH_EMAIL,
} from '@app/src/services/apollo/mutation.scheme';
import { replace } from '@app/src/utils/navigation';
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
        if (response.data) {
          replace(SCREEN_NAME.LOGIN);
        }
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
};
