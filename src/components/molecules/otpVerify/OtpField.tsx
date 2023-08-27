import { RefObject, useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import clsx from "clsx";
import "./OtpField.css";

interface OtpProps {
  firstRef?: RefObject<HTMLInputElement>;
  secoandRef?: RefObject<HTMLInputElement>;
  thirdRef?: RefObject<HTMLInputElement>;
  fourthRef?: RefObject<HTMLInputElement>;
  isError?: boolean;
}

const OtpField = (props: OtpProps) => {
  const { firstRef, secoandRef, thirdRef, fourthRef, isError } = props;

  useEffect(() => {
    firstRef?.current?.focus();
  }, []);

  const handleFirst = () => {
    secoandRef?.current?.focus();
  }

  const handleSecoand = () => {
    thirdRef?.current?.focus();
  }

  const handleThird = () => {
    fourthRef?.current?.focus();
  }

  const handleFourth = () => {
    fourthRef?.current?.blur();
  }

  const className: string = clsx("input__otp__box", {
    input__otp__error: isError === true,
  });

  return (
    <div>
      <Stack direction="row" alignItems={"flex-start"} justifyContent={"space-between"}>
        <input type="text" onChange={handleFirst} className={className} ref={firstRef} />
        <input type="text" onChange={handleSecoand} className={className} ref={secoandRef} />
        <input type="text" onChange={handleThird} className={className} ref={thirdRef} />
        <input type="text" onChange={handleFourth} className={className} ref={fourthRef} />
      </Stack>
      <Typography fontSize={"12px"} height={"1px"} color={"red"}>
        {isError && "Invalid OTP"}
      </Typography>
    </div>
  )
}

export default OtpField;