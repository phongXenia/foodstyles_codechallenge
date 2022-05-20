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
