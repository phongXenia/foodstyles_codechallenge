export interface IAuthState {
  user: {
    id: string;
    name: string;
    email: string;
  };
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

export interface ILoginWithEmailActionBody {
  email: string;
  password: string;
}
