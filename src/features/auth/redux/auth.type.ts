export interface IAuthState {
  user: any;
  isLoading: boolean;
  accessToken: string;
  refreshToken: string;
}

export interface ILoggedInUserPayloadAction {
  user: any;
  accessToken: string;
  refreshToken: string;
}

export interface ILogInWithEmailResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}
