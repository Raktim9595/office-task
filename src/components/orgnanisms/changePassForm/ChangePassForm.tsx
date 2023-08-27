import { useRef } from "react";
import { Stack, Typography, Divider } from "@mui/material";
import { FormikProps, useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

import "./ChangePassForm.css";
import OtpField from "../../molecules/otpVerify/OtpField";
import { Button, ConfirmNewPassword, NewPassword } from "../../atoms";
import { confrimPassValidation } from "../../../validation/authValidation";
import { ChangePassProps } from "../../../interfaces/authProps";
import { changePassword } from "../../../requests/authRequests";
import Loading from "../../atoms/icons/Loading";
import { AxiosError } from "axios";
import { ErrorData } from "../../../interfaces/errorData";

const ChangePassForm = () => {
  const firstRef = useRef<HTMLInputElement>(null);
  const secoandRef = useRef<HTMLInputElement>(null);
  const thirdRef = useRef<HTMLInputElement>(null);
  const fourthRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(changePassword, {
    onSuccess: () => {
      console.log("changed password");
      navigate("/auth/create_user");
    },
    onError: ({ response }: AxiosError) => {
      console.log("error encounterd using password change");
      var err: ErrorData = (response?.data) as ErrorData;
      formik.setErrors({
        newPassword: err.message,
        confirmPassword: err.message,
        otp: "Invalid OTP"
      })
    }
  });
  const getOtpFileValues = () => {
    return `${firstRef.current?.value}${secoandRef.current?.value}${thirdRef.current?.value}${fourthRef.current?.value}`
  }

  const formik: FormikProps<ChangePassProps> = useFormik<ChangePassProps>({
    initialValues: {
      otp: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: confrimPassValidation,
    onSubmit: ({ newPassword, confirmPassword }) => {
      mutate({
        otp: getOtpFileValues(),
        newPassword,
        confirmPassword,
      })
    }
  })

  return (
    <section className="change__passform__wrapper">
      {/* form details  */}
      <form onSubmit={formik.handleSubmit} className="change__pass__form">
        <Stack gap={"7px"} width={"auto 244px"} height={"auto 55px"}>
          <Typography component="h6" fontSize={"20px"} fontWeight={"600"}>
            Verify
          </Typography>
          <Typography variant="body2" fontSize={"12px"}>
            Enter the OTP code we have sent via SMS
          </Typography>
        </Stack>

        {/* enter otp  */}
        <OtpField isError={Boolean(formik.errors.otp)} firstRef={firstRef} secoandRef={secoandRef} thirdRef={thirdRef} fourthRef={fourthRef} />
        {/* <Typography component={"p"} height={"1px"} fontSize={"12px"} color={"red"}>
          {(Boolean(formik.errors.otp) && `${formik.errors.otp}`)}
        </Typography> */}

        {/* divider  */}
        <Divider className="otp__divider" />

        {/* text for change password main  */}
        <Typography fontSize={"12px"} variant="body2">
          Enter a new password below to change your password
        </Typography>

        {/* set password fields  */}
        <NewPassword formik={formik} fullWidth={true} label="password" />
        <ConfirmNewPassword formik={formik} fullWidth={true} label="confirm Password" />

        {/* submit button  */}
        <Button size="full" type="submit">
          {isLoading ? <Loading /> :
            <Typography>Set Password</Typography>
          }
        </Button>

        {/* back button  */}
        <Link to="/auth/create_user">
          <Typography color={"#000"} sx={{
            textDecoration: "underline"
          }}>Back</Typography>
        </Link>
      </form>
    </section>
  )
}

export default ChangePassForm;