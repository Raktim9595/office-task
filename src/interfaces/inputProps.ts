import { FormikProps } from "formik";
import { SignInProps, SignUpProps } from "./signIn";
import { ChangePassProps } from "./authProps";

export interface InputProps {
  variant?: "filled" | "outlined" | "standard";
  fullWidth?: boolean;
  label?: string;
  formik: FormikProps<SignInProps>;
}

export interface CreateUserProps extends InputProps {
  formik: FormikProps<SignUpProps>;
}

export interface CheckboxProps {
  color?:
    | "default"
    | "error"
    | "warning"
    | "success"
    | "primary"
    | "secondary"
    | "info";
  size?: "small" | "medium";
  formik: FormikProps<SignInProps>
}

export interface SignUpCheckbox extends CheckboxProps {
  formik: FormikProps<SignUpProps>
}

export interface OtpInputProps {
  variant?: "filled" | "outlined" | "standard";
  fullWidth?: boolean;
  label?: string;
  formik: FormikProps<ChangePassProps>
}