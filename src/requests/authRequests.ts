import axios from "axios";
import {
  LoginAuthProps,
  SignupAuthProps,
  OtpProps,
  ChangePassProps
} from "../interfaces/authProps";

export const loginUser = async ({ email, password }: LoginAuthProps) => {
  return await axios.post("http://18.136.197.25:8080/login", {
    email,
    password,
  });
};

export const createUser = async ({
  email,
  enterPassword,
  confirmPassword,
  name,
  phoneNumber,
}: SignupAuthProps) => {
  return await axios.post("http://18.136.197.25:8080/users/signUpUser", {
    email,
    phoneNumber,
    confirmPassword,
    enterPassword,
    name,
  });
};

export const sendOtp = async ({ phoneNumber }: OtpProps) => {
  return await axios.post("http://18.136.197.25:8080/users/sendOtpToUser", null, {
    params: {
      phoneNumber,
    },
  });
};

export const changePassword = async({ otp, newPassword, confirmPassword }: ChangePassProps) => {
  return await axios.put("http://18.136.197.25:8080/users/changePassword", null, {
    params: {
      otp,
      newPassword,
      confirmPassword,
    }
  })
}
