import { Typography } from "@mui/material";
import { FormikProps, useFormik } from "formik";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";

import "./SignIn.css";
import { SignInProps } from "../../../interfaces/signIn";
import { Button, InputEmail, InputPassword, CustomChecbox } from "../../atoms";
import { siginInValidation } from "../../../validation/authValidation";
import Loading from "../../atoms/icons/Loading";
import { loginUser } from "../../../requests/authRequests";

interface Props {
  changeSingUp?: () => void;
}

const SIgnIn = ({ changeSingUp }: Props) => {
  const { mutate, isLoading, isSuccess, status } = useMutation(loginUser, {
    onSuccess: () => {
      console.log("login success")
    }
  });
  const formik: FormikProps<SignInProps> = useFormik<SignInProps>({
    initialValues: {
      email: "",
      password: "",
      rememberUser: false,
    },
    validationSchema: siginInValidation,
    onSubmit: ({ email, password, rememberUser }) => {
      console.log({ email, password, rememberUser });
      mutate({
        email,
        password
      });
      if (status === "success") {
        formik.values.email = "";
        formik.values.password = "";
      }
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
            <Typography variant="body2">Don't have an account?</Typography>
            <Button clickFunction={changeSingUp} variant="text">
              <Typography
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  textTransform: "capitalize",
                }}
                color="primary"
              >
                Sign Up
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

        <InputPassword
          fullWidth={true}
          variant="outlined"
          label="password"
          formik={formik}
        />

        {/* checkbox */}
        <CustomChecbox formik={formik} color="success" />

        {/* submit button  */}
        {isSuccess ? (
          <Button type="button" color="success" size="full" children={<Typography>Signed In</Typography>} />
        ) : (
          <Button type={isLoading ? "button" : "submit"} size="full" children={isLoading ? <Loading /> : <Typography>Sign In</Typography>} />
        )}

        {/* forgot password  */}
        <div className="signIn__forgotPass">
          <div className="divider" />
          <Link to="/auth/otp">
            <Typography color="primary" fontSize="12px" textAlign="right">
              Forgot password
            </Typography>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SIgnIn;
