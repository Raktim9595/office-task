import { Stack, Typography } from "@mui/material";
import { useFormik, FormikProps } from "formik";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

import "./OtpForm.css";
import { Button, InputPhone } from "../../atoms";
import { otpValidation } from "../../../validation/authValidation";
import { SignUpProps } from "../../../interfaces/signIn";
import { sendOtp } from "../../../requests/authRequests";
import Loading from "../../atoms/icons/Loading";
import { AxiosError } from "axios";
import { ErrorData } from "../../../interfaces/errorData";

const OtpForm = () => {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(sendOtp, {
    onSuccess: () => {
      console.log("success sending otp");
      navigate("/auth/change_password");
    },
    onError: ({ response }: AxiosError) => {
      console.log("error faced in sending otp");
      const err: ErrorData = (response?.data) as ErrorData;
      formik.setErrors({
        phoneNumber: err.message
      });
    }
  })

  const handleBackClick = () => {
    navigate(-1);
  }

  const formik: FormikProps<SignUpProps> = useFormik<SignUpProps>({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: otpValidation,
    onSubmit: ({ phoneNumber }) => {
      mutate({
        phoneNumber: `+977${phoneNumber}`,
      })
      // navigate("/auth/change_password");
    }
  });
  return (
    <div className="otp__form__wrapper">
      <form onSubmit={formik.handleSubmit} className="otp__form">
        <Stack gap={"7px"} width={"327px"} height={"auto 73px"}>
          <Typography component="h2" fontWeight="600" fontSize={"20px"} lineHeight={"normal"} fontStyle={"normal"}>Reset your password</Typography>
          <Typography component={"p"} variant="body2" fontSize={"12px"}>
            Enter the phone number associated with your account
            and we’ll  send you a code to reset your password.
          </Typography>
        </Stack>
        <InputPhone formik={formik} />
        {!isLoading ? (
          <Button size="full" type="submit">
            <Typography>Get OTP</Typography>
          </Button>
        ) : (
          <Button type="button" size="full">
            <Loading />
          </Button>
        )}

        <Button type="button" clickFunction={handleBackClick} style={{ height: "auto" }} variant="text">
          <Typography variant="body1" component="p" sx={{ textDecoration: "underline" }}>Back</Typography>
        </Button>
      </form>
    </div>
  )
}

export default OtpForm