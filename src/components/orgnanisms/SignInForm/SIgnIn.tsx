import { Typography } from "@mui/material";
import { FormikProps, useFormik } from "formik";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

import "./SignIn.css";
import { SignInProps } from "../../../interfaces/signIn";
import { Button, InputEmail, InputPassword, CustomChecbox, Loading } from "../../atoms";
import { siginInValidation } from "../../../validation/authValidation";
import { loginUser } from "../../../requests/authRequests";
import { useCustomDispatch } from "../../../store/hooks";
import { setUser } from "../../../store/userSlice";
import { ErrorData } from "../../../interfaces/errorData";
import { setToken } from "../../../store/authTokenSlice";

interface Props {
  changeSingUp?: () => void;
}

const SIgnIn = ({ changeSingUp }: Props) => {
  const dispatch = useCustomDispatch();
  const navigate = useNavigate();

  const { mutate, isLoading, isSuccess } = useMutation(loginUser, {
    onSuccess: (res) => {
      dispatch(setUser({
        id: 1,
        name: "Raktim Thapa",
        email: "apple123456@gmail.com",
        phoneNumber: "9814482973"
      }));
      dispatch(setToken({
        authToken: res.data.token
      }));
      localStorage.setItem("authToken", res.data.token);
      console.log("login success");
      navigate("/users/users_table")
    },
    onError: ({ response }: AxiosError) => {
      var err: ErrorData = (response?.data) as ErrorData;
      if(response?.status === 404) {
        formik.setErrors({
          email: err.message
        })
      } else {
        formik.setErrors({
          password: err.message
        })
      }
    }
  });
  const formik: FormikProps<SignInProps> = useFormik<SignInProps>({
    initialValues: {
      email: "",
      password: "",
      rememberUser: false,
    },
    validationSchema: siginInValidation,
    onSubmit: ({ email, password }) => {
      mutate({
        email,
        password
      });
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
