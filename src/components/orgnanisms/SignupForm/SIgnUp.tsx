import { Typography } from "@mui/material";
import { FormikProps, useFormik } from "formik";
import { useMutation } from "react-query";

import "../SignInForm/SignIn.css";
import { SignUpProps } from "../../../interfaces/signIn";
import { signupValidation } from "../../../validation/authValidation";
import {
  Button,
  InputEmail,
  InputPassword,
  InputText,
  ConfirmPassword,
  InputPhone,
  AgreeCheckBox,
} from "../../atoms";
import Loading from "../../atoms/icons/Loading";
import { createUser } from "../../../requests/authRequests";

interface Props {
  changeSignUp?: () => void;
}

const SignUp = ({ changeSignUp }: Props) => {
  const { mutate, isLoading, isSuccess } = useMutation(createUser, {
    onSuccess: () => {
      console.log("new account created");
    },
    onError: () => {
      console.log("creating use failed")
    }
  });

  const formik: FormikProps<SignUpProps> = useFormik<SignUpProps>({
    initialValues: {
      email: "",
      password: "",
      username: "",
      phoneNumber: "",
      confirmPassword: "",
      agreeTerms: false,
    },
    validationSchema: signupValidation,
    onSubmit: ({ email, password, username, phoneNumber, confirmPassword }) => {
      mutate({
        email,
        enterPassword: password,
        name: username,
        phoneNumber: `+977${phoneNumber}`,
        confirmPassword,
      })
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="login__form--container">
      {/* form details  */}
      <div className="login__main--box">
        <div className="form__top">
          <Typography fontWeight="600" variant="h6" component="h2">
            Sign In
          </Typography>
          <div>
            <Typography variant="body2">Already have an account?</Typography>
            <Button variant="text" clickFunction={changeSignUp}>
              <Typography
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  textTransform: "capitalize",
                }}
                color="primary"
              >
                Sign In
              </Typography>
            </Button>
          </div>
        </div>

        {/* form input fields  */}
        <InputEmail
          fullWidth={true}
          variant="outlined"
          label="email"
          formik={formik}
        />

        <InputText
          fullWidth={true}
          variant="outlined"
          label="username"
          formik={formik}
        />

        <InputPhone fullWidth={true} variant="outlined" formik={formik} />

        <InputPassword
          fullWidth={true}
          variant="outlined"
          label="password"
          formik={formik}
        />

        <ConfirmPassword
          fullWidth={true}
          variant="outlined"
          formik={formik}
          label="confirm password"
        />

        {/* checkbox */}
        <AgreeCheckBox color="success" formik={formik}/>

        {/* submit button  */}
        {isSuccess ? (
          <Button
            size="full"
            type="button"
            children={
              <Typography textAlign="center">Account Created</Typography>
            }
            color="success"
            style={{ width: "414px" }}
          />
        ) : (
          <Button
            type={isLoading ? "reset" : "submit"}
            size="full"
            children={isLoading ? <Loading /> : <Typography>Sign Up</Typography>}
          />
        )}
      </div>
    </form>
  );
};

export default SignUp;
