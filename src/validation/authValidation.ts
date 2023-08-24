import * as yup from "yup";

export const signupValidation = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "password must be of minimum 8 in length")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    // .min(8, "password must be of minimum 8 in length")
    .required("Password is required"),
  agreeTerms: yup.bool().oneOf([true], "Terms must be agreed"),
  username: yup.string().required("username required"),
  phoneNumber: yup.number().required("phone number required"),
});

export const siginInValidation = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    // .min(8, "password must be of minimum 8 in length")
    .required("Password is required"),
});

export const otpValidation = yup.object({
  phoneNumber: yup.string().required("phone number is needed")
});

export const confrimPassValidation = yup.object({
  newPassword: yup.string().required("Password is required"),
  confirmPassword: yup.string().required("confirm password required"),
});