export interface SignInProps {
  email?: string;
  password?: string;
  rememberUser?: boolean;
}

export interface SignUpProps {
  email?: string;
  password?: string;
  phoneNumber?: string;
  username?: string;
  confirmPassword?: string;
  agreeTerms?: boolean;
}