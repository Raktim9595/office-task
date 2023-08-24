import { useRef } from "react";
import { Stack, Typography, Divider } from "@mui/material";
import { FormikProps, useFormik } from "formik";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";

import "./ChangePassForm.css";
import OtpField from "../../molecules/otpVerify/OtpField";
import { Button, ConfirmNewPassword, NewPassword } from "../../atoms";
import { confrimPassValidation } from "../../../validation/authValidation";
import { ChangePassProps } from "../../../interfaces/authProps";
import { changePassword } from "../../../requests/authRequests";
import Loading from "../../atoms/icons/Loading";

const ChangePassForm = () => {
  const firstRef = useRef<HTMLInputElement>(null);
  const secoandRef = useRef<HTMLInputElement>(null);
  const thirdRef = useRef<HTMLInputElement>(null);
  const fourthRef = useRef<HTMLInputElement>(null);

  const { mutate, isLoading } = useMutation(changePassword, {
    onSuccess: () => {
      console.log("changed password");
    },
    onError: () => {
      console.log("error encounterd using password change");
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
        <OtpField firstRef={firstRef} secoandRef={secoandRef} thirdRef={thirdRef} fourthRef={fourthRef} />

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