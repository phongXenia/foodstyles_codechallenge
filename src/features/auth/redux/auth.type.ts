export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IAuthState {
  user: IUser;
  isLoading: boolean;
  accessToken: string;
  refreshToken: string;
  errorMessage: string;
}

export interface ILoggedInUserPayloadAction {
  user: any;
  accessToken: string;
  refreshToken: string;
}

export interface ILogInWithEmailResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface ILoginWithEmailActionBody {
  email: string;
  password: string;
}

export interface IUpdateUserPayload {
  name: string;
  email: string;
}
