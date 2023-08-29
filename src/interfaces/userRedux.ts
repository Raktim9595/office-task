export interface LoggedInUser {
  id?: number;
  name?: string;
  email?: string;
  phoneNumber?: string;
};

export interface AuthTokenReduxInterface {
  authToken?: string;
  refreshToken?: string;
}

export interface LoadingState {
  loading?: boolean;
}

export interface ChangeToken {
  accessToken?: string;
  refreshToken?: string;
}