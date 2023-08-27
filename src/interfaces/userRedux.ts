export interface LoggedInUser {
  id?: number;
  name?: string;
  email?: string;
  phoneNumber?: string;
};

export interface AuthTokenReduxInterface {
  authToken?: string;
}

export interface LoadingState {
  loading?: boolean;
}