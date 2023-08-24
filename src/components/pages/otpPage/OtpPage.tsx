import { Stack } from "@mui/material";

import "./OtpPage.css";
import OtpLayout from "../../layouts/otpLayout/OtpLayout";
import { HydraX } from "../../atoms";
import OtpForm from "../../orgnanisms/OtpForm/OtpForm";

const OtpPage = () => {
  return (
    <OtpLayout>
      <Stack gap={"60px"}>
        <HydraX />
        <OtpForm />
      </Stack>
    </OtpLayout>
  )
}

export default OtpPage;