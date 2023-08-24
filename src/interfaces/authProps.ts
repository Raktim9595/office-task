export interface LoginAuthProps {
  email?: string;
  password?: string;
}

export interface SignupAuthProps {
  enterPassword?: string;
  confirmPassword?: string;
  phoneNumber?: string;
  name?: string;
  email?: string;
}

export interface OtpProps {
  phoneNumber?: string;
}

export interface ChangePassProps {
  otp?: string;
  newPassword?: string;
  confirmPassword?: string;
}